
-- Gallery photos table
CREATE TABLE public.gallery_photos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url text NOT NULL,
  alt_text text NOT NULL DEFAULT '',
  display_order integer NOT NULL DEFAULT 0,
  span text NOT NULL DEFAULT '',
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.gallery_photos ENABLE ROW LEVEL SECURITY;

-- Anyone can view gallery photos
CREATE POLICY "Anyone can view gallery photos"
  ON public.gallery_photos FOR SELECT
  TO public
  USING (true);

-- Only authenticated users can insert
CREATE POLICY "Authenticated users can insert gallery photos"
  ON public.gallery_photos FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Only authenticated users can update
CREATE POLICY "Authenticated users can update gallery photos"
  ON public.gallery_photos FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Only authenticated users can delete
CREATE POLICY "Authenticated users can delete gallery photos"
  ON public.gallery_photos FOR DELETE
  TO authenticated
  USING (true);

-- Storage bucket for gallery images
INSERT INTO storage.buckets (id, name, public)
VALUES ('gallery', 'gallery', true);

-- Anyone can view gallery files
CREATE POLICY "Anyone can view gallery files"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'gallery');

-- Authenticated users can upload gallery files
CREATE POLICY "Authenticated users can upload gallery files"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'gallery');

-- Authenticated users can delete gallery files
CREATE POLICY "Authenticated users can delete gallery files"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'gallery');
