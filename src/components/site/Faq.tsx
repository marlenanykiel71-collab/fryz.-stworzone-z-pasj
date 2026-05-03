import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Czy muszę umawiać wizytę wcześniej?", a: "Tak, zalecamy rezerwację telefoniczną — pracujemy na umówionych wizytach, dzięki czemu unikasz oczekiwania." },
  { q: "Ile trwa standardowa wizyta?", a: "Strzyżenie męskie zajmuje około 30–40 minut, a stylizacja brody około 20–30 minut. Pakiet łączony to ok. 60 minut." },
  { q: "Jakich kosmetyków używacie?", a: "Pracujemy wyłącznie na sprawdzonych markach barberskich — pomady, oleje i balsamy do brody dobrane do typu włosów i skóry." },
  { q: "Czy obsługujecie chłopców i nastolatków?", a: "Oczywiście. Strzyżemy panów w każdym wieku — z cierpliwością również najmłodszych klientów." },
  { q: "Jakie formy płatności akceptujecie?", a: "Przyjmujemy gotówkę, karty płatnicze oraz BLIK." },
];

const Faq = () => (
  <section id="faq" className="section bg-background">
    <div className="container-x grid gap-12 md:grid-cols-[1fr_1.4fr]">
      <div className="reveal">
        <span className="eyebrow">FAQ</span>
        <h2 className="mt-3 font-display">Najczęściej zadawane pytania.</h2>
        <p className="mt-4 text-muted-foreground">
          Nie znalazłeś odpowiedzi? Zadzwoń do nas — chętnie pomożemy.
        </p>
      </div>
      <div className="reveal">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-lg hover:text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      }}
    />
  </section>
);

export default Faq;
