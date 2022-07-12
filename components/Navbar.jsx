import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'

export default function Navbar () {
  const router = useRouter()
  return (
    <header className='py-[19px] border-b-2 border-gemstone-green mx-auto w-11/12 max-w-screen-2xl'>
      <div className='mx-auto w-10/12'>
        <div className='flex justify-between items-end'>
          <Link href="/">
            <a className='cursor-pointer'>
              <img src="/logo-header.svg" alt="logo header  " />
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
                <Link href="/">
                  <a>Metodología</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Informes</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Conócenos</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
