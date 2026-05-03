import haircut from "@/assets/service-haircut.jpg";
import beard from "@/assets/service-beard.jpg";
import shave from "@/assets/service-shave.jpg";

const items = [
  { img: haircut, title: "Strzyżenie męskie", desc: "Klasyczne i nowoczesne fryzury dopasowane do kształtu twarzy.", alt: "Strzyżenie męskie z fade" },
  { img: beard,   title: "Stylizacja brody", desc: "Modelowanie, trymowanie i pielęgnacja zarostu z dbałością o detal.", alt: "Stylizacja i trymowanie brody" },
  { img: shave,   title: "Golenie na ciepło", desc: "Tradycyjne golenie brzytwą z gorącym ręcznikiem — rytuał barberski.", alt: "Tradycyjne golenie brzytwą" },
];

const Services = () => (
  <section id="oferta" className="section bg-secondary/40">
    <div className="container-x">
      <div className="reveal max-w-2xl">
        <span className="eyebrow">Oferta</span>
        <h2 className="mt-3 font-display">Usługi szyte na miarę nowoczesnego mężczyzny.</h2>
        <p className="mt-4 text-muted-foreground">
          Specjalizujemy się w męskim strzyżeniu i stylizacji brody. Każda wizyta to indywidualne podejście — od
          konsultacji, przez precyzyjne wykonanie, po finalne ułożenie produktami premium.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <article
            key={it.title}
            className="reveal group overflow-hidden rounded-2xl bg-background shadow-soft transition-smooth hover:shadow-elegant hover:-translate-y-1"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={it.img}
                alt={it.alt}
                width={800}
                height={600}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
