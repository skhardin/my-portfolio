import Link from 'next/link';
import Typewriter from '@/components/Typewriter';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import About from './about/page';
import Projects from './projects/page';
import Certs from './certs/page';
import Contact from './contact/page';

const Title = () => {
  return (
    <div className="min-h-screen px-6 py-4 pb-12 grid grid-rows-[1fr_auto] items-center">
        <div className="flex flex-col items-end">
          <h1 className="text-7xl lg:text-9xl font-bold uppercase">Sophie Hardin</h1>
          <Typewriter textArray={["Engineer", "Designer", "Collaborator", "Sister", "Daughter", "Aunt", "Friend", "Cat Mom"]} textStyle="text-4xl lg:text-6xl font-semibold"/>
        </div>
          <Link href="#about">
            <ArrowDownIcon className="justify-self-center h-12 w-12 lg:h-20 lg:w-20 text-gray-300 animate-bounce" />
          </Link>
      </div>
  )
}

export default function Home() {
  return (
    <div>
      <Title />
      <About />
      <Projects />
      <Certs />
      <Contact />
    </div>
  );
}
