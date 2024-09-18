'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation';


export default function Navbar() {
  const pathName = usePathname();
  // console.log(pathName);

  return (
    <>
      <nav className="bg-slate-950 ">

        <ul className="list-none flex justify-center p-2 ">
          <Link href='/'>   <li className={pathName === '/' ? 'active navlink' : 'navlink'}> Home</li></Link>
          <Link href='/posts'> <li className={pathName === '/posts' ? 'active navlink' : 'navlink'}>Posts</li></Link>
         <Link href='/contact'> <li className={pathName === '/contact' ? 'active navlink' : 'navlink'}> contact</li></Link>
         <Link href='/gallery'> <li className={pathName === '/gallery' ? 'active navlink' : 'navlink'}> Gallery</li></Link>
         <Link href='/Login'><li className={pathName === '/Login' ? 'active navlink' : 'navlink'}> Login</li></Link>
         <Link href='/Register'><li className={pathName === '/Register' ? 'active navlink' : 'navlink'}> Register</li></Link>

        </ul>
      </nav>
    </>
  )
}
