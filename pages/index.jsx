import PublicationCard from '../components/PublicationCard'
import RedFlagCard from '../components/RedFlagCard'
import redFlagsImages from '../data/red-flags-images.json'
import Link from 'next/link'
import reports from '../data/reports.json'

export default function Home () {
  return (
    <>
      <div className='py-10 lg:py-12'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-8'>
            <div className='lg:w-5/12 max-w-[579px]'>
              <img src="/images/banner-home.png" alt="banner home" />
            </div>
            <div className='lg:w-6/12 max-w-[614px]'>
              <div className='space-y-[30px]'>
                <h1 className='font-black text-5xl 3xl:text-6xl'>
                  Observatorio de <span className='relative'><span className='relative z-10'>Contratación Pública</span><div className='absolute bg-pink h-4 w-full left-0 bottom-1'>&nbsp;</div></span>
                </h1>
                <p className='text-justify'>
                  Es una iniciativa de <span className='italic text-gemstone-green underline'>Fundación Ciudadanía y Desarrollo</span> que, a través del análisis y difusión de datos de la contratación pública, busca promover la contratación abierta en Ecuador.
                </p>
                <Link href="/banderas-rojas#app">
                  <a className='inline-block px-[30px] py-[10px] border border-gemstone-green text-gemstone-green font-bold rounded-[15px]'>
                    Explorar los datos
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-10 lg:py-12 xl:py-16 bg-grey-light'>
        <div className='mx-auto w-10/12 lg:w-9/12 max-w-screen-2xl'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-8'>
            <div className='lg:w-5/12 max-w-[507px]'>
              <div className='space-y-8 text-white-dark'>
                <h2 className='font-black text-3xl 3xl:text-[45px]'>
                  Últimas Publicaciones
                </h2>
                <p className='text-justify'>
                  Entérate cómo se están utilizando los recursos públicos a través de la contratación pública en nuestros informes e investigaciones.
                </p>
                <Link href="/informes">
                  <a className='inline-block px-[30px] py-[10px] border border-white-dark text-white-dark font-bold rounded-[15px]'>
                    Todas las publicaciones
                  </a>
                </Link>
              </div>
            </div>
            <div className='lg:w-6/12 max-w-[655px]'>
              <div className='space-y-[45px]'>
                {
                  reports.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 2).map(({ id, title, date, link }) => <PublicationCard key={`publication-${id}`} title={title} date={date} link={link} />)
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <div className='space-y-[85px]'>
            <div className='space-y-[19px]'>
              <div className='text-center'>
                <h2 className='font-black text-gemstone-green text-xl 3xl:text-[28px]'>
                  Contratación pública en cifras
                </h2>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[61px] gap-y-8'>
                <div className='shadow rounded-[55px]'>
                  <div className='pb-[27px]'>
                    <div className='bg-gemstone-green grid place-items-center rounded-full w-[84px] h-[84px]'>
                      <img src="/images/tenemos.svg" alt="tenemos icon" />
                    </div>
                    <div className='text-center space-y-4'>
                      <p className='text-gemstone-green text-3xl 3xl:text-[45px] font-black'>
                        12,3456,789
                      </p>
                      <p className='text-sm 3xl:text-base mt-1'>procedimientos de contratación.</p>
                    </div>
                  </div>
                </div>
                <div className='shadow rounded-[55px]'>
                  <div className='pb-[27px]'>
                    <div className='bg-gemstone-green grid place-items-center rounded-full w-[84px] h-[84px]'>
                      <img src="/images/money.svg" alt="money icon" />
                    </div>
                    <div className='text-center space-y-4'>
                      <p className='text-gemstone-green text-3xl 3xl:text-[45px] font-black'>
                        USD 1,234,567.89
                      </p>
                      <p className='text-sm 3xl:text-base mt-1'>valor adjudicado.</p>
                    </div>
                  </div>
                </div>
                <div className='shadow rounded-[55px]'>
                  <div className='pb-[27px]'>
                    <div className='bg-gemstone-green grid place-items-center rounded-full w-[84px] h-[84px]'>
                      <img src="/images/date.svg" alt="date icon" />
                    </div>
                    <div className='text-center space-y-4'>
                      <p className='text-gemstone-green text-3xl 3xl:text-[45px] font-black'>
                        123,456,789
                      </p>
                      <p className='text-sm 3xl:text-base mt-1'>proveedores adjudicados</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='space-y-[19px]'>
              <div className='text-center'>
                <h2 className='font-black text-red text-xl 3xl:text-[28px]'>
                  Riesgos en la contratación
                </h2>
              </div>
              <div className='grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-x-[61px] gap-y-8'>
                <div className='shadow rounded-[55px]'>
                  <div className='pb-[27px] pt-[43px] px-10'>
                    <div className='text-center space-y-4'>
                      <p className='text-red text-3xl 3xl:text-[45px] font-black'>
                        12,3456,789
                      </p>
                      <p className='text-sm 3xl:text-base mt-1'>procedimientos de contratación con un solo oferente.</p>
                    </div>
                  </div>
                </div>
                <div className='shadow rounded-[55px]'>
                  <div className='pb-[27px] pt-[43px] px-10'>
                    <div className='text-center space-y-4'>
                      <p className='text-red text-3xl 3xl:text-[45px] font-black'>
                        12,3456,789
                      </p>
                      <p className='text-sm 3xl:text-base mt-1'>procedimientos de contratación tuvieron un periodo corto para su adjudicación.</p>
                    </div>
                  </div>
                </div>
                <div className='shadow rounded-[55px]'>
                  <div className='pb-[27px] pt-[43px] px-10'>
                    <div className='text-center space-y-4'>
                      <p className='text-red text-3xl 3xl:text-[45px] font-black'>
                        12,3456,789
                      </p>
                      <p className='text-sm 3xl:text-base mt-1'>proveedores han obtenido un número desproporcionado de contratos del mismo tipo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20 bg-gemstone-green'>
        <div className='w-10/12 mx-auto lg:ml-auto lg:mr-0 lg:w-[89vw] max-w-screen-2xl'>
          <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-8'>
            <div className='lg:w-6/12 max-w-[756px]'>
              <div className='space-y-[50px]'>
                <div className='text-white space-y-[35px]'>
                  <h2 className='text-3xl 3xl:text-[45px] font-black'>
                    Banderas Rojas
                  </h2>
                  <p className='text-justify'>
                    Las “banderas rojas” en la contratación pública son indicadores de comportamientos sospechosos que pueden ocurrir en todas las etapas de un procedimiento de contratación, desde la publicación de la convocatoria pasando por la adjudicación, hasta la ejecución del contrato.
                  </p>
                  <p className='text-justify'>
                    Herramientas como éstas permiten detectar y prevenir la corrupción. Asimismo, permite verificar la integridad del sistema de contratación pública mediante la identificación de adquisiciones riesgosas.
                  </p>
                  <p className='text-justify'>
                    La <Link href="/metodologia"><a className='underline'>metodología</a></Link> para identificar banderas rojas en procedimientos de contratación pública en Ecuador tomó en cuenta cinco categorías:
                  </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-[55px]'>
                  {
                    redFlagsImages.map(({ title, urlImage }, index) => <RedFlagCard key={`red-flag-${index + 1}`} title={title} urlImage={urlImage} />)
                  }
                </div>
              </div>
            </div>
            <div className='lg:w-5/12 max-w-[863px]'>
              <img src="/images/banderas-rojas.png" alt="banderas rojas" />
            </div>
          </div>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <div className='text-center max-w-[632px] mx-auto'>
            <h2 className='text-grey text-3xl 3xl:text-[45px] font-black'>
              Explorador de datos
            </h2>
            <p className='mt-6'>
              Esta herramienta es un explorador de datos sobre contratación pública en Ecuador.
            </p>
            <button className='mt-10 inline-block px-[30px] py-[10px] border border-gemstone-green text-gemstone-green font-bold rounded-[15px]' href="#">
              Cómo utilizar esta herramienta
            </button>
          </div>
          <div className='mt-16'>
            <img className='mx-auto w-full' src="/images/datasketch-app.png" alt="datasketch app" />
          </div>
        </div>
      </div>
    </>
  )
}
