import Link from 'next/link'

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
                      Esta herramienta es un explorador de datos sobre contratación pública en Ecuador. Mensualmente, verifica los procedimientos registrados en la Plataforma de Contrataciones Abiertas Ecuador-OCDS y marca comportamientos que podrían clasificarse - o no - como <Link href="/metodologia"><a className='underline'>banderas rojas</a></Link>.
                    </p>
                  </div>
                </div>
              </div>
              <div className='lg:w-6/12 lg:self-end'>
                <div className='space-y-4'>
                  <h3 className='text-grey-light text-xl 3xl:text-[23px] font-bold'>
                    ¿Cómo funciona esta herramienta?
                  </h3>
                  <div className="rounded-3xl overflow-hidden">
                    <iframe className='aspect-video w-full' src='https://www.youtube.com/embed/74oVxLzh9L8'></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div id="app">
              <iframe className="aspect-video" src="https://datasketch.shinyapps.io/RedFlagsEcApp/" width="100%"></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-grey-light py-12 lg:py-16 xl:py-20">
        <div className="mx-auto w-10/12 max-w-screen-3xl">
          <div className="text-center text-white-dark space-y-6 3xl:space-y-12">
            <h2 className="font-black text-3xl 3xl:text-[45px]">
              Descarga todas las banderas
            </h2>
            <div className='max-w-xl mx-auto'>
              <p>Cada procedimiento marcado con una bandera roja muestra un posible comportamiento sospechoso que requiere verificación adicional.</p>
            </div>
            <a className="inline-flex space-x-4 items-center bg-red py-2 px-6 rounded-[15px] text-lg 3xl:text-xl" href="https://corporatetrails.com/ec/contractFlags.tar.gz" download target="_blank" rel="noreferrer">
              Descargar
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
