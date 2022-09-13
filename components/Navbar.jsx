import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { FaBars } from 'react-icons/fa'

export default function Navbar () {
  const router = useRouter()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setIsOpenMenu(false)
  }, [scrollPosition])

  return (
    <header className='py-[19px] border-b-2 border-gemstone-green mx-auto w-11/12 max-w-screen-2xl'>
      <div className='mx-auto xl:w-11/12'>
        <div className='flex justify-between items-center lg:items-end'>
          <Link href='/'>
            <a className='cursor-pointer flex-shrink-0'>
              <img src="/images/logo-header.svg" alt="logo header" />
            </a>
          </Link>
          <nav>
            {/* DESKTOP MENU */}
            <ul className='hidden lg:flex lg:items-center lg:gap-x-16 xl:gap-x-20 3xl:gap-x-[95px]'>
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
            <ul className={classNames('fixed top-0 bg-white w-full h-[50vh] flex flex-col items-center justify-evenly lg:hidden z-40 duration-300 shadow-md', { 'left-0': isOpenMenu === true }, { '-left-full': isOpenMenu === false })}>
              <li>
                <Link href="/">
                  <a onClick={() => setIsOpenMenu(false)} className={classNames({ 'text-red underline font-black': router.pathname === '/' })}>Inicio</a>
                </Link>
              </li>
              <li>
                <Link href="/banderas-rojas">
                  <a onClick={() => setIsOpenMenu(false)} className={classNames({ 'text-red underline font-black': router.pathname === '/banderas-rojas' })}>Banderas Rojas</a>
                </Link>
              </li>
              <li>
                <Link href="/metodologia">
                  <a onClick={() => setIsOpenMenu(false)} className={classNames({ 'text-red underline font-black': router.pathname === '/metodologia' })}>Metodología</a>
                </Link>
              </li>
              <li>
                <Link href="/informes">
                  <a onClick={() => setIsOpenMenu(false)} className={classNames({ 'text-red underline font-black': router.pathname === '/informes' })}>Informes</a>
                </Link>
              </li>
              <li>
                <Link href="/conocenos">
                  <a onClick={() => setIsOpenMenu(false)} className={classNames({ 'text-red underline font-black': router.pathname === '/conocenos' })}>Conócenos</a>
                </Link>
              </li>
            </ul>
          </nav>
          <button onClick={() => setIsOpenMenu(!isOpenMenu)} className='lg:hidden z-50'>
            <FaBars className='text-2xl' />
          </button>
        </div>
      </div>
    </header>
  )
}
