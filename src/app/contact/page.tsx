"use client";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { socialLinks } from "@/utils/constants";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adres",
    value: "Lipnowska 17/1, Gdynia",
    href: "https://maps.google.com/?q=Lipnowska+17/1,+Gdynia,+Poland",
  },
  {
    icon: Phone,
    title: "Telefon",
    value: "+48 607 034 911",
    href: "tel:+48607034911",
  },
  {
    icon: Mail,
    title: "Email",
    value: "kontakt@wpolisa.pl",
    href: "mailto:kontakt@wpolisa.pl",
  },
  {
    icon: Clock,
    title: "Godziny pracy",
    value: "Pon-Pt: 9:00 - 17:00",
    href: null,
  },
];

const ContactPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-hero px-4 md:px-0 py-16 md:py-20">
        <div className="container m-auto">
          <div className="animate-slide-up mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">Skontaktuj się z nami.</h1>
            <h1 className="text-4xl font-bold text-accent md:text-5xl mt-6 pb-4">Jesteśmy bliżej, niż myślisz.</h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              Masz pytania? Potrzebujesz pomocy? Jesteśmy tu, żeby Ci pomóc – osobiście, telefonicznie lub online.
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-primary-foreground/80 md:text-xl">
              🛡️ Zadzwoń, napisz - dobra polisa czeka!
            </p>
          </div>
        </div>
      </section>
      {/* Contact Info */}
      <section className="px-4 md:px-0 py-12 md:py-16">
        <div className="container m-auto">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="animate-fade-in border-border bg-card shadow-card transition-all hover:shadow-card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <info.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground">{info.title}</h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-1 block text-muted-foreground transition-colors hover:text-accent"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-muted-foreground">{info.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Map & Social */}
      <section className="bg-muted/50 px-4 md:px-0 py-12 md:py-16">
        <div className="container m-auto">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
                <iframe
                  title="Lokalizacja wPolisa"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2315.8468307847385!2d18.53358481589927!3d54.51847998025671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda73a81c0c1c5%3A0x5b0f5e7e8b8e8c8e!2sLipnowska%2017%2C%20Gdynia!5e0!3m2!1spl!2spl!4v1620000000000!5m2!1spl!2spl"
                  width="100%"
                  height="532"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Social Media */}
            <div>
              <Card className="border-border bg-card shadow-card">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-foreground">Social Media</h2>
                  <p className="mt-2 text-muted-foreground">Śledź nas w mediach społecznościowych i bądź na bieżąco!</p>

                  <div className="mt-6 space-y-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 rounded-lg border border-border bg-background p-4 transition-all hover:border-transparent hover:text-white ${social.color}`}
                      >
                        <social.icon className="h-5 w-5" />
                        <span className="font-medium">{social.name}</span>
                      </a>
                    ))}
                  </div>

                  <div className="mt-8 rounded-lg bg-accent/10 p-4">
                    <p className="text-sm font-medium text-accent">💡 Pro tip</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Najszybciej odpowiadamy na WhatsApp! Napisz, a odezwiemy się w ciągu kilku minut.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
