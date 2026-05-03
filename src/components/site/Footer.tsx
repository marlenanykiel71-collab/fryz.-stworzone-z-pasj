import { useState } from "react";
import { Facebook, Instagram, Youtube, X } from "lucide-react";

interface FooterProps { name: string }

const Footer = ({ name }: FooterProps) => {
  const [open, setOpen] = useState(false);

  return (
    <footer className="bg-foreground text-background">
      <div className="container-x flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-background/80">
          © {new Date().getFullYear()} {name}. Wszelkie prawa zastrzeżone.
        </p>
        <div className="flex items-center gap-5">
          {[
            { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
            { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
            { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background transition-smooth hover:bg-primary hover:text-primary-foreground"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="link-underline text-sm text-background/80 hover:text-background"
        >
          Polityka prywatności
        </button>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Polityka prywatności"
          className="fixed inset-0 z-[70] overflow-y-auto bg-background text-foreground animate-fade-in"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Zamknij"
            className="fixed right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-foreground/10 hover:bg-foreground/20"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="container-x max-w-3xl py-16 md:py-24">
            <h2 className="font-display">Polityka prywatności</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Niniejsza Polityka opisuje zasady przetwarzania danych osobowych przez salon <strong>{name}</strong>.
                Dane przetwarzane są wyłącznie w celu rezerwacji wizyt i kontaktu z klientem.
              </p>
              <h3 className="font-display text-foreground">Administrator</h3>
              <p>Administratorem danych jest właściciel salonu {name}. W sprawach związanych z danymi prosimy o kontakt
                e-mail lub telefoniczny dostępny w sekcji Kontakt.</p>
              <h3 className="font-display text-foreground">Cookies</h3>
              <p>Strona może wykorzystywać pliki cookies w celu zapewnienia prawidłowego działania serwisu oraz analizy ruchu.</p>
              <h3 className="font-display text-foreground">Prawa użytkownika</h3>
              <p>Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia oraz wniesienia sprzeciwu wobec ich przetwarzania.</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
