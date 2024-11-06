import { routes } from "@/public/routes"
import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"

export const Navbar = () => {

  return (
    <nav className="flex gap-4 p-2 m-2 bg-blue-800 rounded bg-opacity-30">
        <Link 
            // className={`${pathname === '/' ? 'bg-slate-800 ' : ''} flex items-center gap-1 px-2 rounded`}
            className="flex items-center gap-1 px-2 rounded"
            href={'/'}
        >
            <HomeIcon />
            Home</Link>
        
        <div className="flex flex-1"></div>

        { routes.map(route => {
            if(route.pathname !== '/') {
                return <ActiveLink key={route.pathname} path={route.pathname} text={route.name}/>
            } 
        }) }

    </nav>
  )
}
