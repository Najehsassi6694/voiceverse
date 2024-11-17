import Image from "next/image";
import Hero from "./components/Hero";
import { TTSForm } from "./components/TTS/TTSForm";

export default function Home() {
  return (
 <div>
  <Hero/>
  <TTSForm/>
   </div>
  );
}
