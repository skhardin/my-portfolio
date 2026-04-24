import Link from 'next/link';
import { HomeIcon, UserIcon, FolderIcon, CheckBadgeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function NavBar() {
  return (
    <nav className="px-6 py-4 fixed bg-white w-full">
        <div className="flex justify-end items-center">
            <div className="hidden md:flex space-x-6">
                <Link href="/"><HomeIcon className="h-6 w-6 text-black" /></Link>
                <Link href="#about"><UserIcon className="h-6 w-6 text-black" /></Link>
                <Link href="#projects"><FolderIcon className="h-6 w-6 text-black" /></Link>
                <Link href="#certs"><CheckBadgeIcon className="h-6 w-6 text-black" /></Link>
                <Link href="#contact"><ChatBubbleLeftRightIcon className="h-6 w-6 text-black" /></Link>
            </div>
      </div>
    </nav>
  );
}
