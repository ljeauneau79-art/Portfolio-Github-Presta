import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>RoboTech Pro - Expert en Automatisation & Robotique Industrielle</title>
        <meta 
          name="description" 
          content="RoboTech Pro, votre partenaire en automatisation industrielle et intégration de robots. Conception, programmation et maintenance de solutions robotiques sur mesure." 
        />
        <meta name="keywords" content="automatisation industrielle, robotique, intégration robots, KUKA, ABB, Fanuc, automates programmables, PLC, SCADA" />
        <link rel="canonical" href="https://robotechpro.fr" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
