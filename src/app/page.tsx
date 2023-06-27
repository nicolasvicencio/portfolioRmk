import {
  About,
  Contact,
  Featured,
  Footer,
  Projects,
  Services,
} from "../components";

export default function Home() {
  return (
    <main>
      <Featured />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
