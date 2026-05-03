import { Phone, ChevronDown } from "lucide-react";
import hero from "@/assets/hero.jpg";

interface HeroProps { phone: string }

const Hero = ({ phone }: HeroProps) => {
  return (
    <section id="hero" className="relative isolate min-h-[100svh] w-full overflow-hidden">
      <img
        src={hero}
        alt="Wnętrze salonu barberskiego fryz – profesjonalne strzyżenie męskie"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
      />
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />
      <div className="absolute inset-0 bg-foreground/30" aria-hidden="true" />

      <div className="container-x relative z-10 flex min-h-[100svh] flex-col items-center justify-center text-center text-primary-foreground">
        <span className="mb-6 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] backdrop-blur animate-fade-in">
          Barber Shop · Od 2015
        </span>
        <h1 className="max-w-3xl drop-shadow-lg animate-fade-in text-6xl font-mono">
          Męski styl zaczyna się <span className="italic text-accent">tutaj</span>.
        </h1>
        <p className="mt-6 max-w-xl text-base md:text-lg text-primary-foreground/90 animate-fade-in">
          Strzyżenie męskie i stylizacja brody w barberskim klimacie. Precyzja, charakter i odrobina luksusu —
          dla każdego mężczyzny, który dba o szczegóły.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-fade-in">
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-elegant transition-smooth hover:bg-primary-hover hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <Phone className="h-5 w-5" /> Zadzwoń teraz
          </a>
          <a
            href="#oferta"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-8 py-4 text-base font-medium text-primary-foreground backdrop-blur transition-smooth hover:bg-primary-foreground/10"
          >
            Zobacz ofertę
          </a>
        </div>

        <a href="#o-nas" aria-label="Przewiń w dół" className="absolute bottom-8 animate-bounce text-primary-foreground/80">
          <ChevronDown className="h-7 w-7" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
