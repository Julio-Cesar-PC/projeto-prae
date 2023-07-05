import React from 'react'
import { Link } from '@inertiajs/react'
import { GoQuestion } from 'react-icons/go'

const NavBarHome = () => {
  return (
    // <div className="navbar">
    //   <div className="navbar-start">
    //     <a className="btn btn-ghost normal-case navText text-xl">
    //       Prae - Livro Fora da Estante
    //     </a>
    //   </div>
    //   <div className="navbar-center "></div>
    //   <div className="navbar-end">
    //     <Link href={route('about')}>
    //       <a className="btn btn-ghost normal-case navText text-xl">
    //         Sobre <GoQuestion />
    //       </a>
    //     </Link>
    //   </div>
    // </div>
    <div className="navbar hero-overlay bg-opacity-60">
      <div className="flex-1">
        <a className="btn btn-ghost navText normal-case text-xl">
          Livro Fora da Estante
        </a>
      </div>
      <div className="flex-none">
        {/* <Link href={route('about')}>
          <a className="btn btn-ghost normal-case navText text-xl">
            Sobre <GoQuestion />
          </a>
        </Link> */}
        <div className="dropdown dropdown-end  navText text-xl">
          <label tabIndex={0} className="btn m-1 bg-base-100">
            Sobre <GoQuestion />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-opacity-60"
          >
            <Link href={route('about')}>
              <li>
                <a>Quem somos nós</a>
              </li>
            </Link>
            <Link href={route('partners')}>
              <li>
                <a>Parceiros</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBarHome
