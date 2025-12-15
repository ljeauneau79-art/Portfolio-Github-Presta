import { CheckCircle2, Users, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import engineerImage from "@/assets/engineer-programming.jpg";

const About = () => {
  const features = [
    "Équipe d'ingénieurs certifiés et expérimentés",
    "Partenariats avec les leaders du marché (KUKA, ABB, Siemens)",
    "Solutions sur mesure adaptées à votre secteur",
    "Accompagnement de A à Z, de l'étude à la mise en service",
    "Support technique réactif 24h/24, 7j/7",
  ];

  const values = [
    {
      icon: Users,
      title: "Expertise",
      description: "Plus de 50 ingénieurs et techniciens qualifiés",
    },
    {
      icon: Target,
      title: "Précision",
      description: "Des solutions calibrées pour vos besoins exacts",
    },
    {
      icon: TrendingUp,
      title: "Performance",
      description: "ROI moyen de 200% sur nos installations",
    },
  ];

  return (
    <section id="apropos" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={engineerImage}
                alt="Ingénieur programmant un robot industriel"
                className="w-full h-auto object-cover"
              />
              {/* Overlay accent */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-lg p-6 border border-border">
              <div className="text-4xl font-bold text-accent mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Années d'Excellence</div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
          </div>

          {/* Content Column */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              À Propos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Votre Partenaire en{" "}
              <span className="text-accent">Innovation Industrielle</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Depuis 2009, RoboTech Pro accompagne les industriels français dans leur 
              transformation digitale. Notre expertise en robotique et automatisme nous 
              permet de concevoir des solutions innovantes qui optimisent votre productivité.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="accent" size="lg">
              Découvrir Notre Histoire
            </Button>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-6 text-center hover:border-accent/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
