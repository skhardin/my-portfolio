import Link from 'next/link';
import Typewriter from '@/components/Typewriter';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import About from './about/page';
import Projects from './projects/page';
import Contact from './contact/page';

const Title = () => {
  return (
    <div className="min-h-screen px-6 py-4 pb-16 grid grid-rows-[1fr_auto] items-center">
        <div className="flex flex-col items-end">
          <h1 className="text-6xl lg:text-9xl font-bold">Sophie Hardin</h1>
          <Typewriter textArray={["Engineer", "Designer", "Collaborator"]} textStyle="text-4xl lg:text-6xl font-semibold"/>
        </div>
          <ArrowDownIcon className="justify-self-center h-20 w-20 text-gray-300 animate-bounce" />
      </div>
  )
}

export default function Home() {
  return (
    <div>
      <Title />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
