import BlogSection from "./components/BlogSection";
import HeroSection from "./components/HeroSection";
import IngredientsSection from "./components/IngredientsSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <IngredientsSection/>
      <BlogSection/>
    </div>
  );
}
