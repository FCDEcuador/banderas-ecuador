import Link from 'next/link'

export default function Navbar () {
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
                  <a>Inicio</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Banderas Rojas</a>
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
