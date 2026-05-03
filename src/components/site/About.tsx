import about from "@/assets/about.jpg";

const About = () => (
  <section id="o-nas" className="section bg-background">
    <div className="container-x grid gap-12 md:grid-cols-2 md:items-center">
      <div className="reveal order-2 md:order-1">
        <span className="eyebrow">O nas</span>
        <h2 className="mt-3 font-display">Pasja do męskiego stylu — od pierwszego cięcia.</h2>
        <div className="mt-6 space-y-4 text-muted-foreground">
          <p>
            <span className="text-foreground font-medium">fryz</span> to kameralny barber shop, w którym każdy klient
            traktowany jest indywidualnie. Nie spieszymy się — bo dobre strzyżenie wymaga uwagi i wprawnego oka.
          </p>
          <p>
            Zaczynaliśmy w 2015 roku z prostym przekonaniem: <strong>mężczyźni też zasługują na miejsce stworzone tylko
            dla nich</strong>. Dziś łączymy klasyczne barberskie rzemiosło z nowoczesnymi technikami stylizacji brody.
          </p>
          <p>
            Pracujemy na sprawdzonych narzędziach i kosmetykach najwyższej jakości. Nasz cel jest jeden — żebyś wyszedł
            z salonu pewny siebie, zadbany i w pełni zadowolony.
          </p>
        </div>
        <ul className="mt-8 grid grid-cols-3 gap-4 text-center">
          {[
            { n: "10+", l: "lat doświadczenia" },
            { n: "8 000+", l: "zadowolonych klientów" },
            { n: "5.0", l: "ocena Google" },
          ].map((s) => (
            <li key={s.l} className="rounded-xl border border-border bg-secondary/40 p-4">
              <div className="font-display text-2xl text-primary">{s.n}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="reveal order-1 md:order-2 relative">
        <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-accent opacity-20 blur-2xl" />
        <img
          src={about}
          alt="Wnętrze salonu fryz — fotele barberskie i lustra"
          width={1200}
          height={900}
          loading="lazy"
          className="w-full rounded-2xl object-cover shadow-elegant"
        />
      </div>
    </div>
  </section>
);

export default About;
