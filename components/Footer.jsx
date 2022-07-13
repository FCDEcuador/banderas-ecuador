export default function Footer () {
  return (
    <footer className="bg-white-huge pt-[67.32px]">
      <div className="mx-auto w-10/12 max-w-screen-2xl">
        <div className="flex flex-col lg:flex-row lg:justify-between text-grey gap-y-8">
          <div className="lg:w-2/12">
            <div className="space-y-2">
              <p className="text-grey-light 3xl:text-[19px] italic">
                Una iniciativa de:
              </p>
              <div>
                <img src="/fcd-logo.svg" alt="fcd logo" />
              </div>
              <ul className="space-y-2">
                <li className="flex items-center space-x-[11.23px]">
                  <img src="/facebook-icon.svg" alt="facebook icon" />
                  <p>
                    @CompraAbiertaEc
                  </p>
                </li>
                <li className="flex items-center space-x-[11.23px]">
                  <img src="/twitter-icon.svg" alt="twitter icon" />
                  <p>
                    @CompraAbiertaEc
                  </p>
                </li>
                <li className="flex items-center space-x-[11.23px]">
                  <img src="/instagram-icon.svg" alt="instagram icon" />
                  <p>
                    @fcd_ecuador
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-2/12">
            <div className="space-y-4">
              <p className="text-grey-light 3xl:text-[19px] italic">
                Con el apoyo de:
              </p>
              <div>
                <img src="/open-contracting-partnership-logo.svg" alt="open contracting partnership logo" />
              </div>
              <ul className="space-y-2">
                <li className="flex items-center space-x-[11.23px]">
                  <img src="/facebook-icon.svg" alt="facebook icon" />
                  <p>
                    @OpenContracting
                  </p>
                </li>
                <li className="flex items-center space-x-[11.23px]">
                  <img src="/twitter-icon.svg" alt="twitter icon" />
                  <p>
                    @opencontracting
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-3/12">
            <div className="space-y-4">
              <div>
                <img src="/banco-de-desarrollo-de-america-latina.png" alt="banco de desarrollo de america latina" />
              </div>
              <ul className="space-y-2">
                <li className="flex items-center space-x-[11.23px]">
                  <img src="/facebook-icon.svg" alt="facebook icon" />
                  <p>
                    @CompraAbiertaEc
                  </p>
                </li>
                <li className="flex items-center space-x-[11.23px]">
                  <img src="/twitter-icon.svg" alt="twitter icon" />
                  <p>
                    @CompraAbiertaEc
                  </p>
                </li>
                <li className="flex items-center space-x-[11.23px]">
                  <img src="/instagram-icon.svg" alt="instagram icon" />
                  <p>
                    @fcd_ecuador
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-3/12">
            <div className="space-y-4 lg:space-y-9">
              <div className="space-y-2">
                <p className="text-gemstone-green italic 3xl:text-[19px] font-bold">
                  Suscríbete a nuestro newsletter para recibir informes de contratación
                </p>
                <form className="flex items-center" action="#">
                  <input className="bg-transparent border-gemstone-green border rounded-[11px] py-2 px-4 focus:outline-none" type="email" name="email" id="email" placeholder="Correo electrónico" required />
                  <button className="-ml-10">
                    <img src="/newsletter-button.svg" alt="newsletter button" />
                  </button>
                </form>
              </div>
              <ul className="space-y-2 lg:space-y-[15px] font-bold">
                <li>
                  <a href="#">
                    Banderas Rojas
                  </a>
                </li>
                <li>
                  <a href="#">
                    Estadísticas
                  </a>
                </li>
                <li>
                  <a href="#">
                    Informes
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t-grey-light border-t py-[31.13px] mt-[74.09px]">
          <a href="https://www.datasketch.co/" target="_blank" rel="noreferrer">
            <img className="mx-auto w-2/12" src="/logo-datasketch.svg" alt="logo datasketch" />
          </a>
        </div>
      </div>
    </footer>
  )
}
