import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Upload, LogOut, ArrowUp, ArrowDown, GripVertical } from "lucide-react";
import type { Session } from "@supabase/supabase-js";

interface GalleryPhoto {
  id: string;
  image_url: string;
  alt_text: string;
  display_order: number;
  span: string;
}

const AdminLogin = ({ onLogin }: { onLogin: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      toast({ title: "Login failed", description: error.message, variant: "destructive" });
    } else {
      onLogin();
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

const GalleryManager = () => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [uploading, setUploading] = useState(false);
  const [altText, setAltText] = useState("");
  const [span, setSpan] = useState("");
  const { toast } = useToast();

  const fetchPhotos = async () => {
    const { data } = await supabase
      .from("gallery_photos")
      .select("*")
      .order("display_order", { ascending: true });
    if (data) setPhotos(data as GalleryPhoto[]);
  };

  useEffect(() => { fetchPhotos(); }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);

    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("gallery")
      .upload(fileName, file);

    if (uploadError) {
      toast({ title: "Upload failed", description: uploadError.message, variant: "destructive" });
      setUploading(false);
      return;
    }

    const { data: urlData } = supabase.storage.from("gallery").getPublicUrl(fileName);

    const maxOrder = photos.length > 0 ? Math.max(...photos.map((p) => p.display_order)) + 1 : 0;

    const { error: insertError } = await supabase.from("gallery_photos").insert({
      image_url: urlData.publicUrl,
      alt_text: altText || "Gallery photo",
      display_order: maxOrder,
      span: span,
    });

    if (insertError) {
      toast({ title: "Save failed", description: insertError.message, variant: "destructive" });
    } else {
      toast({ title: "Photo added!" });
      setAltText("");
      setSpan("");
      fetchPhotos();
    }
    setUploading(false);
    e.target.value = "";
  };

  const handleDelete = async (photo: GalleryPhoto) => {
    // Extract filename from URL
    const urlParts = photo.image_url.split("/");
    const fileName = urlParts[urlParts.length - 1];

    await supabase.storage.from("gallery").remove([fileName]);
    await supabase.from("gallery_photos").delete().eq("id", photo.id);
    toast({ title: "Photo deleted" });
    fetchPhotos();
  };

  const movePhoto = async (index: number, direction: "up" | "down") => {
    const newPhotos = [...photos];
    const swapIndex = direction === "up" ? index - 1 : index + 1;
    if (swapIndex < 0 || swapIndex >= newPhotos.length) return;

    const tempOrder = newPhotos[index].display_order;
    newPhotos[index].display_order = newPhotos[swapIndex].display_order;
    newPhotos[swapIndex].display_order = tempOrder;

    await supabase.from("gallery_photos").update({ display_order: newPhotos[index].display_order }).eq("id", newPhotos[index].id);
    await supabase.from("gallery_photos").update({ display_order: newPhotos[swapIndex].display_order }).eq("id", newPhotos[swapIndex].id);
    fetchPhotos();
  };

  const updateAltText = async (id: string, newAlt: string) => {
    await supabase.from("gallery_photos").update({ alt_text: newAlt }).eq("id", id);
  };

  const updateSpan = async (id: string, newSpan: string) => {
    await supabase.from("gallery_photos").update({ span: newSpan }).eq("id", id);
    fetchPhotos();
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Gallery Manager</h1>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>

        {/* Upload Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Add New Photo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="alt">Alt Text (description)</Label>
                <Input id="alt" value={altText} onChange={(e) => setAltText(e.target.value)} placeholder="e.g. Speaking at conference" />
              </div>
              <div>
                <Label htmlFor="span">Size</Label>
                <select
                  id="span"
                  value={span}
                  onChange={(e) => setSpan(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="">Normal</option>
                  <option value="md:col-span-2">Wide (2 columns)</option>
                </select>
              </div>
            </div>
            <div>
              <Label htmlFor="file" className="cursor-pointer">
                <div className="flex items-center gap-2 px-4 py-3 border-2 border-dashed border-primary/30 rounded-lg hover:border-primary/60 transition-colors">
                  <Upload className="w-5 h-5 text-primary" />
                  <span className="text-sm">{uploading ? "Uploading..." : "Click to choose a photo"}</span>
                </div>
              </Label>
              <input id="file" type="file" accept="image/*" className="hidden" onChange={handleUpload} disabled={uploading} />
            </div>
          </CardContent>
        </Card>

        {/* Photos Grid */}
        <h2 className="text-xl font-semibold mb-4 text-foreground">Current Photos ({photos.length})</h2>
        <div className="space-y-3">
          {photos.map((photo, i) => (
            <Card key={photo.id} className="overflow-hidden">
              <div className="flex items-center gap-4 p-4">
                <GripVertical className="w-5 h-5 text-muted-foreground shrink-0" />
                <img src={photo.image_url} alt={photo.alt_text} className="w-20 h-20 object-cover rounded-lg shrink-0" />
                <div className="flex-1 min-w-0 space-y-2">
                  <Input
                    defaultValue={photo.alt_text}
                    onBlur={(e) => updateAltText(photo.id, e.target.value)}
                    placeholder="Alt text"
                    className="text-sm"
                  />
                  <select
                    defaultValue={photo.span}
                    onChange={(e) => updateSpan(photo.id, e.target.value)}
                    className="flex h-8 w-full rounded-md border border-input bg-background px-2 text-xs"
                  >
                    <option value="">Normal</option>
                    <option value="md:col-span-2">Wide</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1 shrink-0">
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => movePhoto(i, "up")} disabled={i === 0}>
                    <ArrowUp className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => movePhoto(i, "down")} disabled={i === photos.length - 1}>
                    <ArrowDown className="w-4 h-4" />
                  </Button>
                </div>
                <Button variant="destructive" size="icon" className="h-8 w-8 shrink-0" onClick={() => handleDelete(photo)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
          {photos.length === 0 && (
            <p className="text-center text-muted-foreground py-8">No photos yet. Upload your first one above!</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Admin = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!session) return <AdminLogin onLogin={() => {}} />;
  return <GalleryManager />;
};

export default Admin;
