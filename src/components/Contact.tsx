import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "Zone Industrielle Nord\n45000 Orléans, France",
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+33 2 38 00 00 00",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@robotechpro.fr",
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun-Ven: 8h-18h\nSAV 24h/24",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Parlons de Votre{" "}
              <span className="text-accent">Projet</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Vous avez un projet d'automatisation ou de robotique ? 
              Nos experts sont à votre écoute pour vous accompagner dans 
              votre transformation industrielle.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-muted/50 rounded-xl p-5 border border-border hover:border-accent/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {info.title}
                  </h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {info.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Réponse sous 24h</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Devis gratuit</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Sans engagement</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Demande de Devis
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Prénom *
                  </label>
                  <Input placeholder="Jean" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nom *
                  </label>
                  <Input placeholder="Dupont" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input type="email" placeholder="jean.dupont@entreprise.fr" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Téléphone
                </label>
                <Input type="tel" placeholder="+33 6 00 00 00 00" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Entreprise
                </label>
                <Input placeholder="Nom de votre entreprise" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  placeholder="Décrivez votre projet d'automatisation..."
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    Envoyer ma demande
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
