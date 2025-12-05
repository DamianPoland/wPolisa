'use client';
import { useState, useEffect } from 'react';
import { Heart, Shield, Plane, Home, Building2, Package, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { IDBUser } from '@/utils/types';
import axios from 'axios';

const insuranceVariants = [
  { id: 'medyczny', title: 'Pakiet Medyczny', icon: Heart },
  { id: 'zycie', title: 'Ubezpieczenie Życia', icon: Shield },
  { id: 'podroze', title: 'Ubezpieczenie Podróży', icon: Plane },
  { id: 'dom', title: 'Ubezpieczenie Domu', icon: Home },
  { id: 'firma', title: 'Ubezpieczenie Firmy', icon: Building2 },
  { id: 'inne', title: 'Pozostałe Ubezpieczenia', icon: Package },
];

export const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Partial<IDBUser>>({
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      phone_number: '',
      pesel: '',
      description: '',
      note: '',
    },
  });

  const [selectedVariant, setSelectedVariant] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const variant = searchParams.get('variant');
    if (variant) {
      setSelectedVariant(variant);
      setTimeout(() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }), 100); // Scroll to form
    }
  }, []);

  const onSubmit = async (data: Partial<IDBUser>) => {
    if (!selectedVariant) {
      toast.info('Proszę wybrać rodzaj ubezpieczenia przed wysłaniem formularza.');
      return;
    }

    try {
      const response = await axios.post('/api/users', data);
      console.log(`User created successfully: ${response.data}`);
      reset();
      setSelectedVariant('');
      toast.success('Dziękujemy za kontakt. Odezwiemy się najszybciej jak to możliwe.');
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast.error(error?.response?.data?.error || error.message || 'Failed to submit form');
    }
  };

  const selectedInsurance = insuranceVariants.find((t) => t.id === selectedVariant);

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-hero px-4 md:px-0 py-16 md:py-20">
        <div className="container m-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">
              Zacznijmy od czegoś <span className="text-accent">prostego!</span>
            </h1>
            <p className="mt-6 text-primary-foreground/80 text-lg">
              Wybierz, czego potrzebujesz, a my odezwiemy się z gotowymi propozycjami.
            </p>
            <p
              className="animate-slide-up mx-auto mt-6 max-w-3xl text-primary-foreground/80 text-lg md:text-xl"
              style={{ animationDelay: '0.1s' }}
            >
              🛡️ Zrób pierwszy krok w minutę - my zrobimy pozostałe 99.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Variant Selection */}
      <section className="px-4 md:px-0 py-12">
        <div className="container m-auto">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Wybierz rodzaj ubezpieczenia</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {insuranceVariants.map((variant) => {
              const isSelected = selectedVariant === variant.id;
              return (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant.id)}
                  className={`group flex items-center gap-4 rounded-xl border-2 p-4 text-left transition-all ${
                    isSelected ? 'border-accent bg-accent/5' : 'border-border bg-card hover:border-accent/50'
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-colors ${
                      isSelected
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-muted text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent'
                    }`}
                  >
                    <variant.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className={`font-semibold ${isSelected ? 'text-accent' : 'text-foreground'}`}>
                      {variant.title}
                    </div>
                    {isSelected && (
                      <div className="flex items-center gap-1 text-sm text-accent">
                        <CheckCircle className="h-4 w-4" />
                        Wybrano
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="bg-muted/50 px-4 md:px-0 py-12 md:py-16">
        <div className="container m-auto">
          <Card className="mx-auto max-w-2xl border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                {selectedInsurance ? (
                  <>
                    <selectedInsurance.icon className="h-6 w-6 text-accent" />
                    {selectedInsurance.title}
                  </>
                ) : (
                  'Formularz kontaktowy'
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Imię*</Label>
                    <Input
                      id="name"
                      {...register('name', {
                        required: 'Imię jest wymagane',
                      })}
                      type="text"
                      placeholder="Wpisz imię"
                    />
                    {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="surname">Nazwisko *</Label>
                    <Input
                      id="surname"
                      {...register('surname', {
                        required: 'Nazwisko jest wymagane',
                      })}
                      type="text"
                      placeholder="Wpisz nazwisko"
                    />
                    {errors.surname && <span className="text-red-600 text-sm">{errors.surname.message}</span>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Adres email *</Label>
                    <Input
                      id="email"
                      {...register('email', {
                        required: 'Adres e-mail jest wymagany',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Nieprawidłowy format adresu e-mail',
                        },
                      })}
                      type="email"
                      placeholder="Wpisz adres e-mail"
                    />
                    {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone_number">Numer telefonu (opcjonalny)</Label>
                    <Input
                      id="phone_number"
                      {...register('phone_number')}
                      type="tel"
                      placeholder="Wpisz numer telefonu"
                    />
                    {errors.phone_number && <span className="text-red-600 text-sm">{errors.phone_number.message}</span>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pesel">PESEL *</Label>
                    <Input
                      id="pesel"
                      {...register('pesel', {
                        required: 'PESEL jest wymagany',
                      })}
                      type="text"
                      placeholder="Wpisz PESEL"
                    />
                    {errors.pesel && <span className="text-red-600 text-sm">{errors.pesel.message}</span>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Krótki opis (opcjonalny)</Label>
                  <Textarea
                    id="description"
                    {...register('description')}
                    placeholder="Wpisz opis"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                  />
                </div>

                <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    'Wysyłanie...'
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Wyślij zapytanie!
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-muted-foreground">...i czekaj na najlepszą ofertę! 🎯</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default FormPage;
