import Link from 'next/link'

export default function Footer () {
  return (
    <footer className="bg-white-huge pt-[67.32px]">
      <div className="mx-auto w-10/12 max-w-screen-2xl">
        <div className="flex flex-wrap lg:justify-between text-grey gap-y-4">
          <div className="w-6/12 xl:w-2/12">
            <div className="space-y-4">
              <p className="text-grey-light 3xl:text-[19px] italic">
                Una iniciativa de:
              </p>
              <div>
                <img className="h-[82.7px]" src="/images/fcd-logo.svg" alt="fcd logo" />
              </div>
              <ul className="space-y-2">
                <li>
                  <a className="flex items-center space-x-[11.23px]" href="https://www.facebook.com/CompraAbiertaEc/" target="_blank" rel="noreferrer">
                    <img src="/images/facebook-icon.svg" alt="facebook icon" />
                    <span>@CompraAbiertaEc</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center space-x-[11.23px]" href="https://twitter.com/compraabiertaec" target="_blank" rel="noreferrer">
                    <img src="/images/twitter-icon.svg" alt="twitter icon" />
                    <span>@CompraAbiertaEc</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center space-x-[11.23px]" href="https://www.instagram.com/fcd_ecuador/?hl=es" target="_blank" rel="noreferrer">
                    <img src="/images/instagram-icon.svg" alt="instagram icon" />
                    <span>@fcd_ecuador</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-6/12 xl:w-2/12">
            <div className="space-y-4">
              <p className="text-grey-light 3xl:text-[19px] italic">
                Con el apoyo de:
              </p>
              <div>
                <img className="h-[82.7px]" src="/images/open-contracting-partnership-logo.svg" alt="open contracting partnership logo" />
              </div>
              <ul className="space-y-2">
                <li>
                  <a className="flex items-center space-x-[11.23px]" href="https://twitter.com/opencontracting" target="_blank" rel="noreferrer">
                    <img src="/images/twitter-icon.svg" alt="twitter icon" />
                    <span>@opencontracting</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center space-x-[11.23px]" href="https://www.facebook.com/OpenContracting" target="_blank" rel="noreferrer">
                    <img src="/images/facebook-icon.svg" alt="facebook icon" />
                    <span>@OpenContracting</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-6/12 xl:w-3/12">
            <div className="space-y-4">
              <p className="hidden xl:block text-grey-light 3xl:text-[19px] italic">
                &nbsp;
              </p>
              <div>
                <img className="h-[82.7px] object-contain" src="/images/banco-de-desarrollo-de-america-latina.png" alt="banco de desarrollo de america latina" />
              </div>
              <ul className="space-y-2">
                <li>
                  <a className="flex items-center space-x-[11.23px]" href="https://twitter.com/AgendaCAF" target="_blank" rel="noreferrer">
                    <img src="/images/twitter-icon.svg" alt="twitter icon" />
                    <span>@AgendaCAF</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center space-x-[11.23px]" href="https://www.facebook.com/CAF.America.Latina" target="_blank" rel="noreferrer">
                    <img src="/images/facebook-icon.svg" alt="facebook icon" />
                    <span>@CAF.America.Latina</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-6/12 xl:w-3/12">
            <div className="space-y-4 lg:space-y-9">
              <div className="space-y-2">
                <p className="text-gemstone-green italic 3xl:text-[19px] font-bold">
                  Suscríbete a nuestro newsletter para recibir informes de contratación
                </p>
                <form className="flex items-center" action="#">
                  <input className="bg-transparent border-gemstone-green border rounded-[11px] py-2 px-4 focus:outline-none" type="email" name="email" id="email" placeholder="Correo electrónico" required />
                  <button className="-ml-10">
                    <img src="/images/newsletter-button.svg" alt="newsletter button" />
                  </button>
                </form>
              </div>
              <ul className="space-y-2 lg:space-y-[15px] font-bold">
                <li>
                  <Link href="/banderas-rojas">
                    <a>
                      Banderas Rojas
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="#">
                    Estadísticas
                  </a>
                </li>
                <li>
                  <Link href="/informes">
                    <a>
                      Informes
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t-grey-light border-t py-[31.13px] mt-[74.09px]">
          <a href="https://www.datasketch.co/" target="_blank" rel="noreferrer">
            <img className="mx-auto w-2/12" src="/images/logo-datasketch.svg" alt="logo datasketch" />
          </a>
        </div>
      </div>
    </footer>
  )
}
