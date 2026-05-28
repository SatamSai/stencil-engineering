import { getProjectsWithImages } from "@/lib/projects";
import HomeContent from "@/components/home/HomeContent";

export default function HomePage() {
  const projects = getProjectsWithImages();
  return <HomeContent projects={projects} />;
}
