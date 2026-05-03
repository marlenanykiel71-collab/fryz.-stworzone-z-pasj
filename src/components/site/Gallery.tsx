import { useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g1, caption: "Klasyczny męski look z zadbaną brodą." },
  { src: g2, caption: "Pompadour z precyzyjnym fade." },
  { src: g3, caption: "Nasze barberskie narzędzia pracy." },
  { src: g4, caption: "Undercut wykończony ręcznie." },
  { src: g5, caption: "Modelowanie i pielęgnacja zarostu." },
  { src: g6, caption: "Komfort fotela barberskiego." },
];

const Gallery = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="galeria" className="section bg-secondary/40">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <span className="eyebrow">Galeria</span>
          <h2 className="mt-3 font-display">Nasze realizacje.</h2>
          <p className="mt-4 text-muted-foreground">Wybór ulubionych kadrów z codziennej pracy w salonie.</p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {items.map((it, i) => (
            <li key={i} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group block w-full overflow-hidden rounded-2xl shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={`Powiększ zdjęcie: ${it.caption}`}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={it.src}
                    alt={it.caption}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <p className="bg-background px-4 py-3 text-left text-sm text-muted-foreground">{it.caption}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Powiększone zdjęcie"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/90 p-4 backdrop-blur animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground backdrop-blur hover:bg-primary-foreground/20"
            aria-label="Zamknij"
            onClick={() => setActive(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <figure className="max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={items[active].src} alt={items[active].caption} className="max-h-[80vh] w-auto rounded-xl object-contain" />
            <figcaption className="mt-4 text-center text-sm text-primary-foreground/90">{items[active].caption}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
};

export default Gallery;
