export default function RedFlags () {
  return (
    <>
      <div className='py-12 lg:py-16 xl:py-20'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <div className='space-y-20'>
            <div className='flex flex-col lg:flex-row lg:justify-between gap-y-8'>
              <div className='lg:w-5/12 max-w-[635px]'>
                <div className='space-y-[46px]'>
                  <h1 className='text-5xl 3xl:text-[65px] font-black inline-block relative'>
                    <span className='relative z-10'>Banderas rojas</span>
                    <div className='absolute -bottom-[10px] left-0 w-full bg-pink-2 h-[23px]'>&nbsp;</div>
                  </h1>
                  <div className='space-y-[35px]'>
                    <p className="text-justify">
                      Esta herramienta es un explorador de datos sobre contratación pública en Ecuador. Mensualmente, verifica los procedimientos registrados en la Plataforma de Contrataciones Abiertas Ecuador-OCDS y marca comportamientos que podrían clasificarse - o no - como banderas rojas. Cada procedimiento marcado con una bandera roja necesita verificación adicional.
                    </p>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpa euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim.
                    </p>
                  </div>
                </div>
              </div>
              <div className='lg:w-6/12 lg:self-end'>
                <div className='space-y-4'>
                  <h3 className='text-grey-light text-xl 3xl:text-[23px] font-bold'>
                    ¿Cómo funciona esta herramienta?
                  </h3>
                  <img src="/images/como-funciona-herramienta.jpg" alt="como funciona esta herramienta" />
                </div>
              </div>
            </div>
            <div id="app">
              <iframe className="aspect-video" src="https://datasketch.shinyapps.io/RedFlagsEcApp/" width="100%"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
