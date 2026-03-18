import { useState } from "react";
import { X } from "lucide-react";

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

const photos = [
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
            className="absolute top-6 right-6 text-white/80 hover:text-white"
            onClick={() => setSelected(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={photos[selected].src}
            alt={photos[selected].alt}
            className="max-h-[85vh] max-w-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
