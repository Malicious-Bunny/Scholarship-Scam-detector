"use client"
 
import { useState } from 'react'
import Link from 'next/link'
import ModeToggle from "@/components/micro/lightdark"
import { usePathname } from 'next/navigation'
 
const Navbar = () => {
const [navIsOpened, setNavIsOpened] = useState(false)
const closeNavbar = () => {
    setNavIsOpened(false)
}
 
const toggleNavbar = () => {
    setNavIsOpened(navIsOpened => !navIsOpened)
}
const router = usePathname();
const path = router;

function isActive(href:string) : boolean {
    return path === href;
}

return (
    <>
        <div aria-hidden={true} onClick={() => {
            closeNavbar()
        }} className={
            `fixed bg-gray-800/40 inset-0 z-30 ${navIsOpened ? "lg:hidden" : "hidden lg:hidden"}`
        } />
       
            <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
            <div className="flex items-center min-w-max relative">
                    <Link href="#" className="font-semibold flex items-center gap-x-2">
                        <div className="flex items-center -space-x-3">
                            <span className="h-6 aspect-square bg-purple-600 dark:bg-purple-500 rounded-full flex" />
                            <span className="h-6 aspect-square bg-pink-600 dark:bg-pink-400 blur rounded-full flex" />
                        </div>
                        <span className="text-lg text-gray-700 dark:text-gray-300">Scam Detector AI</span>
                    </Link>
                </div>
                <div className={`
          absolute top-full left-0 bg-white dark:bg-gray-950 dark:lg:bg-transperent lg:bg-transparent border-b border-gray-200 dark:border-gray-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:w-max lg:flex lg:transition-none duration-300 ease-linear gap-x-6
          ${navIsOpened ? "visible opacity-100 translate-y-0" : "translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0 lg:opacity-100"}
          `}>
                    <ul className="flex flex-col lg:flex-row gap-12 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:justify-center">
                        <li>
                            <Link href="/" className={`relative py-2.5 duration-300 ease-linear hover:text-primary after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-accent-foreground ${isActive("/")? "after:scale-x-100":"after:scale-x-0"}`}>AI</Link>
                        </li>
                        <li>
                            <Link href="/resources" className={`relative py-2.5 duration-300 ease-linear hover:text-primary after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-accent-foreground ${isActive("/resources")? "after:scale-x-100":"after:scale-x-0"}`}>Resources</Link>
                        </li>
                        <li>
                            <Link href="#" className={`relative py-2.5 duration-300 ease-linear hover:text-primary after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-accent-foreground ${isActive("/faq")? "after:scale-x-100":"after:scale-x-0"}`}>FAQ</Link>
                        </li>
                        <li>
                            <ModeToggle />
                        </li>
                        
                    </ul>
                 
                </div>
                <div className="flex items-center lg:hidden">
                    <button onClick={() => {
                        toggleNavbar()
                    }} aria-label='toggle navbar' className="outline-none border-l border-l-indigo-100 dark:border-l-gray-800 pl-3 relative py-3">
                        <span aria-hidden={true} className={`
              flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
              ${navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""}
            `}>
                        </span>
                        <span aria-hidden={true} className={`
              mt-2 flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
              ${navIsOpened ? "-rotate-45 -translate-y-[.324rem]" : ""}
              `} />
                    </button>
                </div>
            </nav>
    </>
)
}
 
export default Navbar