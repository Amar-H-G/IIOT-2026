import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function GalleryGrid({ images }) {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const prev = () => setLightboxIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setLightboxIdx((i) => (i === images.length - 1 ? 0 : i + 1));

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') setLightboxIdx(null);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="gallery-item aspect-square relative group cursor-pointer rounded-2xl overflow-hidden shadow-md"
            onClick={() => setLightboxIdx(idx)}
          >
            <img src={img.src} alt={img.caption} className="w-full h-full object-cover" onError={(e) => { e.target.src = 'https://placehold.co/600x600/e2e8f0/1e293b?text=Gallery+Image'; }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white text-xs font-medium">{img.caption}</p>
              </div>
              <div className="absolute top-3 right-3">
                <ZoomIn size={20} className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxIdx(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-10"
            onClick={() => setLightboxIdx(null)}
          >
            <X size={24} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={28} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={28} />
          </button>
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIdx].src}
              alt={images[lightboxIdx].caption}
              className="max-h-[75vh] max-w-full rounded-xl object-contain shadow-2xl"
              onError={(e) => { e.target.src = 'https://placehold.co/800x600/e2e8f0/1e293b?text=Gallery+Image'; }}
            />
            <p className="text-white/80 text-sm mt-4 font-medium">
              {images[lightboxIdx].caption}
            </p>
            <p className="text-white/40 text-xs mt-1">
              {lightboxIdx + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
