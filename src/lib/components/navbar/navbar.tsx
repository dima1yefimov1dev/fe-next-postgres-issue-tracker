'use client';
import Link from "next/link";
import cn from 'classnames';
import { usePathname } from "next/navigation";
import { IoBugSharp } from "react-icons/io5";


export default function NavBar () {
  const links = [
    {
      label: 'Dashboard',
      href: '/'
    },
    {
      label: 'Issues',
      href: '/issues'
    }
  ];

  const currentPath = usePathname();

  return (
    <nav className="flex space-x-6 h-14 mb-5 px-5 border-b border-black items-center">
      <Link href='/'>
        <IoBugSharp style={{height: '25px', width: '25px'}}/>
      </Link>
      <ul
        className="flex space-x-5"
      >
        {links.map(link => (
          <li 
            key={link.href}
          >
            <Link 
              href={link.href} 
              className={cn({
                'text-slate-950': currentPath === link.href,
                'text-slate-500': currentPath !== link.href ,
                'hover:text-slate-950': true,
                'transition-colors': true,
                'font-semibold': true,
                'text-xl': true,
              })} 
              >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}