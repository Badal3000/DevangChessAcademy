import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Courses } from "./components/Courses";
import { Champions } from "./components/Champions";
import { Gallery } from "./components/Gallery";
import { ParentFeedback } from "./components/ParentFeedback";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <Champions />
      <Gallery />
      <ParentFeedback />
      <Contact />
    </>
  );
}
