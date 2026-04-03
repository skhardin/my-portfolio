import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="px-6 py-4">
        <div className="flex justify-between items-center">
            <div className="hidden md:flex space-x-6">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
            </div>
      </div>
    </nav>
  );
}
