import { useEffect } from "react";
import Navbar, { NavItem } from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import WhyUs from "@/components/site/WhyUs";
import Gallery from "@/components/site/Gallery";
import Faq from "@/components/site/Faq";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import { useReveal } from "@/hooks/useReveal";

// Edytuj poniższą listę, by łatwo usuwać/dodawać sekcje (treść i nawigacja).
const NAV_ITEMS: NavItem[] = [
  { label: "O nas", href: "#o-nas" },
  { label: "Oferta", href: "#oferta" },
  { label: "Dlaczego my", href: "#dlaczego-my" },
  { label: "Galeria", href: "#galeria" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const COMPANY = {
  name: "fryz",
  phone: "+48 600 100 200",
  email: "kontakt@fryz.pl",
  address: "ul. Brzytwy 12, 00-001 Warszawa",
};

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "fryz – Barber Shop | Strzyżenie męskie i stylizacja brody";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "fryz – kameralny barber shop. Profesjonalne strzyżenie męskie i stylizacja brody. Umów wizytę telefonicznie."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", window.location.origin + "/");

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BarberShop",
      name: COMPANY.name,
      telephone: COMPANY.phone,
      email: COMPANY.email,
      address: { "@type": "PostalAddress", streetAddress: COMPANY.address },
      url: window.location.origin,
    });
    document.head.appendChild(ld);
    return () => { document.head.removeChild(ld); };
  }, []);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        Przejdź do treści
      </a>
      <Navbar items={NAV_ITEMS} phone={COMPANY.phone} />
      <main id="main">
        <Hero phone={COMPANY.phone} />
        <About />
        <Services />
        <WhyUs />
        <Gallery />
        <Faq />
        <Contact phone={COMPANY.phone} email={COMPANY.email} address={COMPANY.address} />
      </main>
      <Footer name={COMPANY.name} />
    </>
  );
};

export default Index;
