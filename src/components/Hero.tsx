import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Shield, Zap, Award } from "lucide-react";
import heroImage from "@/assets/hero-robot.jpg";

const Hero = () => {
  const stats = [
    { value: "150+", label: "Projets Réalisés" },
    { value: "98%", label: "Clients Satisfaits" },
    { value: "15+", label: "Années d'Expérience" },
  ];

  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Robot industriel en action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm text-primary-foreground font-medium">
              Expert en Automatisation Industrielle
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            L'Excellence en{" "}
            <span className="text-accent">Robotique</span> &{" "}
            <span className="text-accent">Automatisme</span> Industriel
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Nous concevons, intégrons et optimisons vos solutions robotiques 
            pour transformer votre production. De l'étude à la mise en service, 
            votre partenaire de confiance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero-accent" size="lg">
              Demander un Devis
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero" size="lg">
              <PlayCircle className="w-5 h-5" />
              Voir nos Réalisations
            </Button>
          </div>

          {/* Key Features */}
          <div className="flex flex-wrap gap-6 mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Réactivité 24/7</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Garantie 5 ans</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Certifié ISO 9001</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
