import { Bot, Cog, Settings, Wrench, LineChart, HeadphonesIcon } from "lucide-react";
import automationImage from "@/assets/automation-panel.jpg";
import robotImage from "@/assets/robot-integration.jpg";
import engineerImage from "@/assets/engineer-programming.jpg";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Intégration Robotique",
      description: "Installation et programmation de robots industriels KUKA, ABB, Fanuc et Universal Robots pour vos lignes de production.",
      image: robotImage,
    },
    {
      icon: Cog,
      title: "Automatisation de Process",
      description: "Conception et mise en œuvre de systèmes d'automatisation sur mesure avec automates Siemens, Schneider et Rockwell.",
      image: automationImage,
    },
    {
      icon: Settings,
      title: "Programmation Automates",
      description: "Développement de programmes PLC/API, supervision SCADA et interfaces homme-machine (IHM) performantes.",
      image: engineerImage,
    },
    {
      icon: Wrench,
      title: "Maintenance & SAV",
      description: "Service de maintenance préventive et curative 24/7 pour garantir la disponibilité maximale de vos équipements.",
      image: null,
    },
    {
      icon: LineChart,
      title: "Audit & Optimisation",
      description: "Analyse de vos installations existantes et propositions d'amélioration pour gagner en productivité.",
      image: null,
    },
    {
      icon: HeadphonesIcon,
      title: "Formation & Support",
      description: "Formation de vos équipes à l'utilisation et la maintenance de vos nouvelles installations robotisées.",
      image: null,
    },
  ];

  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Solutions Complètes en{" "}
            <span className="text-accent">Automatisme</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            De la conception à la maintenance, nous vous accompagnons à chaque étape 
            de votre projet d'automatisation industrielle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card-industrial p-6 relative overflow-hidden"
            >
              {/* Image Background (for services with images) */}
              {service.image && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-5 flex items-center gap-2 text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">En savoir plus</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
