import { Suspense, useState } from "react";
import BottomBar from "./components/BottomBar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import TechCatalog from "./techCalalogSec/TechCatalog";
import Stack from "./techCalalogSec/Stack";
import type { Icatalog } from "./type/catalogType";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const catalogFetch = async (): Promise<Icatalog[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const catalogPromise = catalogFetch();
  const [stack, setStack] = useState<Icatalog[]>([]);
  const toggleStack = (technology: Icatalog) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);
    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack`);
      return;
    }

    setStack([...stack, technology]);
    toast.success(`${technology.name} added to stack`);
  };


  const removeFromStack = (id: string) => {
    const removedTechnology = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from stack`);
    }
  };


  const removeAll = () => {
    if (stack.length === 0)
      return;
    setStack([]);
    toast.success("All technologies removed from stack");
  };


  return (
    <div className="px-10 py-4">
      <Nav />
      <HeroSection />
      <div className="container mx-auto flex gap-6">
        <div className="flex-1">
          <Suspense fallback={<p>Loading Tech Catalogues....</p>}>
            <TechCatalog catalogPromise={catalogPromise} toggleStack={toggleStack} />
          </Suspense>
        </div>

        <Stack stack={stack} removeFromStack={removeFromStack} removeAll={removeAll} />
      </div>

      <Footer />
      <BottomBar />
      <ToastContainer position="bottom-right" autoClose={2000} />

    </div>
  );
}

export default App;