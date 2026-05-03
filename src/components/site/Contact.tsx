import { MapPin, Phone, Mail } from "lucide-react";

interface ContactProps { phone: string; email: string; address: string }

const Contact = ({ phone, email, address }: ContactProps) => (
  <section id="kontakt" className="section bg-gradient-accent text-primary-foreground">
    <div className="container-x">
      <div className="reveal max-w-2xl">
        <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/80">Kontakt</span>
        <h2 className="mt-3 font-display text-primary-foreground">Wpadnij na cięcie.</h2>
        <p className="mt-4 text-primary-foreground/90">Czekamy na Ciebie w salonie. Zadzwoń, by umówić wizytę.</p>
      </div>

      <ul className="reveal mt-10 grid gap-6 md:grid-cols-3">
        {[
          { Icon: MapPin, label: "Adres", value: address, href: `https://maps.google.com/?q=${encodeURIComponent(address)}` },
          { Icon: Phone, label: "Telefon", value: phone, href: `tel:${phone.replace(/\s/g, "")}` },
          { Icon: Mail, label: "E-mail", value: email, href: `mailto:${email}` },
        ].map(({ Icon, label, value, href }) => (
          <li key={label}>
            <a
              href={href}
              className="flex h-full items-start gap-4 rounded-2xl bg-primary-foreground/10 p-6 backdrop-blur transition-smooth hover:bg-primary-foreground/20"
              {...(label === "Adres" ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-foreground text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.18em] text-primary-foreground/70">{label}</span>
                <span className="mt-1 block font-display text-xl">{value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Contact;
