import { Hero } from "@/components/sections/hero";
import { Mission } from "@/components/sections/mission";
import { Tracks } from "@/components/sections/tracks";
import { Projects } from "@/components/sections/projects";
import { Events } from "@/components/sections/events";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Connect } from "@/components/sections/connect";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Tracks />
      <Projects />
      <Events />
      <Testimonials />
      <FAQ />
      <Connect />
    </>
  );
}
