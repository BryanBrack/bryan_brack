import ExperienceFeed from "./components/ExperienceFeed";
import About from "./components/About";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-[#0b0b0c] text-white min-h-screen flex">
      <Sidebar />

      <main className="flex-1 px-10 py-8">
        <Header />
        <About />
        <ExperienceFeed />
        <Contact />
      </main>
    </div>
  );
}