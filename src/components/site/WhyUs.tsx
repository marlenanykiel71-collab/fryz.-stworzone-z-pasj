import { Scissors, Sparkles, Clock, Award } from "lucide-react";

const features = [
  { Icon: Scissors, title: "Barberskie rzemiosło", desc: "Pracujemy z precyzją zegarmistrza — każde cięcie ma znaczenie." },
  { Icon: Sparkles, title: "Premium kosmetyki", desc: "Używamy sprawdzonych marek dedykowanych pielęgnacji męskiej." },
  { Icon: Clock,    title: "Punktualność",       desc: "Szanujemy Twój czas. Wizyty zaczynamy zawsze o czasie." },
  { Icon: Award,    title: "Doświadczenie",      desc: "Ponad 10 lat praktyki i tysiące zadowolonych klientów." },
];

const WhyUs = () => (
  <section id="dlaczego-my" className="section bg-background">
    <div className="container-x">
      <div className="reveal max-w-2xl">
        <span className="eyebrow">Dlaczego my?</span>
        <h2 className="mt-3 font-display">Nie tylko strzyżemy — <span className="italic text-primary">tworzymy charakter</span>.</h2>
        <p className="mt-4 text-muted-foreground">
          W <strong>fryz</strong> stawiamy na <strong>jakość</strong>, <strong>komfort</strong> i <strong>autentyczność</strong>.
          Nasi klienci wracają, bo wiedzą, że ich fryzura zawsze będzie wyglądać tak, jak powinna — naturalnie i z pazurem.
        </p>
      </div>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ Icon, title, desc }, i) => (
          <li
            key={title}
            className="reveal rounded-2xl border border-border bg-card p-6 transition-smooth hover:-translate-y-1 hover:shadow-elegant"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground shadow-elegant">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default WhyUs;
