import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="bg-backgroundBlack w-full h-full min-h-screen">
      <NavBar />
      <div className="w-full md:px-16 sm:px-3">
        <Landing />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}
