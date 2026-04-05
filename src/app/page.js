import Link from 'next/link';
import Typewriter from '@/components/Typewriter';

export default function Home() {
  return (
    <div className="px-6 py-4">
      <div className="flex flex-col justify-between items-end">
        <h1 className="text-4xl font-bold">Sophie Hardin</h1>
        <Typewriter textArray={["Engineer", "Designer", "Collaborator"]} textStyle="text-2xl font-semibold"/>
      </div>
    </div>
  );
}
