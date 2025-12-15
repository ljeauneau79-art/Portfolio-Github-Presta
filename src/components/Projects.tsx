import { ArrowUpRight } from "lucide-react";
import robotImage from "@/assets/robot-integration.jpg";
import automationImage from "@/assets/automation-panel.jpg";
import heroImage from "@/assets/hero-robot.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Ligne de Soudage Automatisée",
      category: "Automobile",
      description: "Installation de 12 robots KUKA pour une ligne de soudage haute cadence chez un équipementier automobile.",
      image: heroImage,
      stats: { productivity: "+45%", time: "6 mois" },
    },
    {
      title: "Cellule de Palettisation",
      category: "Agroalimentaire",
      description: "Conception d'une cellule robotisée pour la palettisation de produits conditionnés avec vision industrielle.",
      image: robotImage,
      stats: { productivity: "+60%", time: "4 mois" },
    },
    {
      title: "Système SCADA Centralisé",
      category: "Pharmaceutique",
      description: "Déploiement d'un système de supervision SCADA pour le pilotage de 8 lignes de production.",
      image: automationImage,
      stats: { productivity: "+35%", time: "8 mois" },
    },
  ];

  return (
    <section id="realisations" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Nos Réalisations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Projets <span className="text-accent">Marquants</span>
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Découvrez quelques-unes de nos réalisations récentes qui témoignent 
            de notre savoir-faire en automatisation industrielle.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-foreground/10 hover:border-accent/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex gap-6 mb-4">
                  <div>
                    <div className="text-accent font-bold text-lg">{project.stats.productivity}</div>
                    <div className="text-xs text-primary-foreground/50">Productivité</div>
                  </div>
                  <div>
                    <div className="text-accent font-bold text-lg">{project.stats.time}</div>
                    <div className="text-xs text-primary-foreground/50">Durée projet</div>
                  </div>
                </div>

                {/* Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all"
                >
                  Voir le projet
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors font-medium"
          >
            Voir tous nos projets
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
