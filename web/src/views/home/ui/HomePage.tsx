import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { AboutTrainer } from "@/widgets/about-trainer";
import { ProgramContent } from "@/widgets/program-content";
import { SampleWorkout } from "@/widgets/sample-workout";
import { Reviews } from "@/widgets/reviews";
import { Tariffs } from "@/widgets/tariffs";
import { PreorderSection } from "@/widgets/preorder-section";
import { Conditions } from "@/widgets/conditions";
import { Footer } from "@/widgets/footer";
import styles from "./HomePage.module.css";

export function HomePage() {
  return (
    <div className={styles.root}>
      <Header />
      <main>
        <Hero />
        <AboutTrainer />
        <ProgramContent />
        <SampleWorkout />
        <Reviews />
        <Tariffs />
        <PreorderSection />
        <Conditions />
      </main>
      <Footer />
    </div>
  );
}
