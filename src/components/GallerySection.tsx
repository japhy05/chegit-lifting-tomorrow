import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

// Static fallback images
import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import gallery5 from "@/assets/gallery/gallery-5.jpg";
import gallery6 from "@/assets/gallery/gallery-6.jpeg";
import gallery7 from "@/assets/gallery/gallery-7.png";
import gallery8 from "@/assets/gallery/gallery-8.jpg";
import gallery9 from "@/assets/gallery/gallery-9.jpeg";
import gallery10 from "@/assets/gallery/gallery-10.jpeg";

interface Photo {
  src: string;
  alt: string;
  span: string;
}

const fallbackPhotos: Photo[] = [
  { src: gallery1, alt: "Speaking at an event", span: "md:col-span-2" },
  { src: gallery2, alt: "Professional portrait", span: "" },
  { src: gallery3, alt: "Evening formal look", span: "" },
  { src: gallery4, alt: "Casual campus style", span: "" },
  { src: gallery5, alt: "Studio portrait", span: "" },
  { src: gallery6, alt: "At AAR Insurance event", span: "" },
  { src: gallery7, alt: "Blue suit portrait", span: "" },
  { src: gallery8, alt: "Outdoor lifestyle", span: "md:col-span-2" },
  { src: gallery9, alt: "Smart casual portrait", span: "" },
  { src: gallery10, alt: "Shizen Greenify Foundation outreach", span: "md:col-span-2" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [photos, setPhotos] = useState<Photo[]>(fallbackPhotos);

  useEffect(() => {
    const fetchPhotos = async () => {
      const { data } = await supabase
        .from("gallery_photos")
        .select("*")
        .order("display_order", { ascending: true });

      if (data && data.length > 0) {
        setPhotos(
          data.map((p: any) => ({
            src: p.image_url,
            alt: p.alt_text,
            span: p.span || "",
          }))
        );
      }
      // If no data in DB, keep fallback static photos
    };
    fetchPhotos();
  }, []);

  const navigate = (direction: "prev" | "next") => {
    if (selected === null) return;
    if (direction === "prev") setSelected(selected > 0 ? selected - 1 : photos.length - 1);
    else setSelected(selected < photos.length - 1 ? selected + 1 : 0);
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Gallery
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`${photo.span} cursor-pointer overflow-hidden rounded-xl group`}
              onClick={() => setSelected(i)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-48 md:h-64 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white z-10"
            onClick={() => setSelected(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 text-white/80 hover:text-white z-10"
            onClick={(e) => { e.stopPropagation(); navigate("prev"); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <img
            src={photos[selected].src}
            alt={photos[selected].alt}
            className="max-h-[85vh] max-w-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 text-white/80 hover:text-white z-10"
            onClick={(e) => { e.stopPropagation(); navigate("next"); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
