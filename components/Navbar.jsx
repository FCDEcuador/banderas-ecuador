import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { FaBars } from 'react-icons/fa'

export default function Navbar () {
  const router = useRouter()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  return (
    <header className='py-[19px] border-b-2 border-gemstone-green mx-auto w-11/12 max-w-screen-2xl'>
      <div className='mx-auto lg:w-10/12'>
        <div className='flex justify-between items-center lg:items-end'>
          <Link href="/">
            <a className='cursor-pointer flex-shrink-0'>
              <img src="/images/logo-header.svg" alt="logo header  " />
            </a>
          </Link>
          <nav>
            {/* DESKTOP MENU */}
            <ul className='hidden lg:flex lg:items-center lg:gap-x-[95px]'>
              <li>
                <Link href="/">
                  <a className={classNames({ 'text-red underline font-black': router.pathname === '/' })}>Inicio</a>
                </Link>
              </li>
              <li>
                <Link href="/banderas-rojas">
                  <a className={classNames({ 'text-red underline font-black': router.pathname === '/banderas-rojas' })}>Banderas Rojas</a>
                </Link>
              </li>
              <li>
                <Link href="/metodologia">
                  <a className={classNames({ 'text-red underline font-black': router.pathname === '/metodologia' })}>Metodología</a>
                </Link>
              </li>
              <li>
                <Link href="/informes">
                  <a className={classNames({ 'text-red underline font-black': router.pathname === '/informes' })}>Informes</a>
                </Link>
              </li>
              <li>
                <Link href="/conocenos">
                  <a className={classNames({ 'text-red underline font-black': router.pathname === '/conocenos' })}>Conócenos</a>
                </Link>
              </li>
            </ul>

            {/* MOBILE MENU */}
            <ul className={classNames('fixed top-0 bg-white w-full h-screen flex flex-col items-center justify-evenly lg:hidden z-40 duration-300', { 'left-0': isOpenMenu === true }, { '-left-full': isOpenMenu === false })}>
              <li>
                <Link href="/">
                  <a className={classNames({ 'text-red underline font-black': router.pathname === '/' })}>Inicio</a>
                </Link>
              </li>
              <li>
                <Link href="/banderas-rojas">
                  <a className={classNames({ 'text-red underline font-black': router.pathname === '/banderas-rojas' })}>Banderas Rojas</a>
                </Link>
              </li>
              <li>
                <Link href="/metodologia">
                  <a className={classNames({ 'text-red underline font-black': router.pathname === '/metodologia' })}>Metodología</a>
                </Link>
              </li>
              <li>
                <Link href="/informes">
                  <a className={classNames({ 'text-red underline font-black': router.pathname === '/informes' })}>Informes</a>
                </Link>
              </li>
              <li>
                <Link href="/conocenos">
                  <a className={classNames({ 'text-red underline font-black': router.pathname === '/conocenos' })}>Conócenos</a>
                </Link>
              </li>
            </ul>
          </nav>
          <button onClick={() => setIsOpenMenu(!isOpenMenu)} className='lg:hidden z-50'>
            <FaBars className='text-2xl'/>
          </button>
        </div>
      </div>
    </header>
  )
}
