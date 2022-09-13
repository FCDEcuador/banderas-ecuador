import LawsCard from '../components/LawsCard'
import laws from '../data/laws.json'
import MethodologyInformation from '../components/MethodologyInformation'
import methodologies from '../data/methodologies.json'
import { SwiperDefault } from '../lib/Swiper'

function getCategoryMethodologyData (category) {
  return methodologies.filter(methodology => methodology.title === category)[0]
}

export default function Metodology () {
  const categories = {
    transparencia: getCategoryMethodologyData('Transparencia'),
    temporalidad: getCategoryMethodologyData('Temporalidad'),
    trazabilidad: getCategoryMethodologyData('Trazabilidad'),
    competitividad: getCategoryMethodologyData('Competitividad'),
    confiabilidad: getCategoryMethodologyData('Confiabilidad')
  }
  const { transparencia, temporalidad, trazabilidad, competitividad, confiabilidad } = categories
  return (
    <>
      <div className='py-12 lg:py-16 xl:py-20'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <div className='space-y-[65px]'>
            <div className='flex flex-col gap-y-8 lg:flex-row lg:justify-between'>
              <div className='lg:w-7/12 max-w-[750px]'>
                <div className='space-y-[35px]'>
                  <h1 className='inline-block font-black text-5xl 3xl:text-[65px] leading-relaxed'>
                    <span className='relative'>
                      <span className='relative z-10'>Metodología</span>
                      <div className='absolute left-0 bottom-0 bg-blue-ocean h-[23px] w-full'>&nbsp;</div>
                    </span>
                    <span className='block text-3xl 3xl:text-[45px] font-normal'>
                      de evaluación
                    </span>
                  </h1>
                  <div className='space-y-[43px]'>
                    <p className='text-justify'>
                      La herramienta de banderas rojas ha sido desarrollado en conjunto por <a href='https://www.ciudadaniaydesarrollo.org/' target='_blank' className='italic underline text-gemstone-green' rel="noreferrer">Fundación Ciudadanía y Desarrollo</a> y <a href='https://www.datasketch.co/' target='_blank' className='italic underline text-gemstone-green' rel="noreferrer">Datasketch</a>, y utiliza los datos publicados en la <a href='https://datosabiertos.compraspublicas.gob.ec/PLATAFORMA' target='_blank' className='italic underline text-gemstone-green' rel="noreferrer">Plataforma de Contrataciones Abiertas Ecuador-OCDS</a> del Servicio Nacional de Contratación Pública de Ecuador (SERCOP) que contiene procedimientos de contratación pública realizados a partir de 2014, bajo el <a href='https://standard.open-contracting.org/latest/es/' target='_blank' className='italic underline text-gemstone-green' rel="noreferrer">Estándar de Datos de Contrataciones Abiertas.</a>
                    </p>
                    <p className='text-justify'>
                      Se tomó como base otros sistemas de evaluación internacionales, tales como <a href='https://www.open-contracting.org/resources/red-flags-integrity-giving-green-light-open-data-solutions/' target='_blank' className='italic underline text-gemstone-green' rel="noreferrer">Red flags for integrity: Giving the green light to open data solutions</a> de Open Contracting Partnership, y el <a href='https://github.com/ProjectPODER/groucho' target='_blank' className='italic underline text-gemstone-green' rel="noreferrer">sistema de evaluación Groucho</a> del <a href='https://poderlatam.org/' target='_blank' className='italic underline text-gemstone-green' rel="noreferrer">Proyecto sobre Organización, Desarrollo, Educación e Investigación</a> (PODER). Este último fue utilizado en las iniciativas <a href='https://todosloscontratos.quienesquien.wiki/es/todos-los-contratos' target='_blank' className='italic underline text-gemstone-green' rel="noreferrer">TodosLosContratos.mx</a>, en México, y <a href='https://todosloscontratos.ucr.ac.cr/' target='_blank' className='italic underline text-gemstone-green' rel="noreferrer">TodosLosContratos CR</a>, en Costa Rica.
                    </p>
                    <p className='text-justify'>
                      En la adaptación al contexto ecuatoriano se consideraron las siguientes <b>leyes y normas:</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className='lg:w-5/12 max-w-[498px]'>
                <img className='mx-auto lg:w-full xl:w-8/12 3xl:w-11/12' src="/images/metodology.png" alt="metodology" />
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[46px] gap-y-8'>
              {
                laws.map(({ title, description, link }, index) => <LawsCard key={`law-${index + 1}`} title={title} description={description} link={link} />)
              }
            </div>
            <div className='flex flex-col lg:flex-row lg:justify-between gap-y-8 gap-x-[62px]'>
              <div className='lg:w-5/12 max-w-[477px]'>
                <p className='text-justify'>
                  Las pruebas realizadas para identificar banderas rojas se basan en el cálculo de un promedio simple a través de 5 categorías que contienen indicadores que evalúan los procedimientos de contratación pública tanto a nivel contrato como entidad contratante/proveedor. Cuanto más cercano es el valor al 100% mejor desempeño:
                </p>
              </div>
              <div className='lg:w-7/12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-[60px] gap-y-10'>
                  {
                    methodologies.map(({ title, description, srcImage }, index) => <MethodologyInformation key={`methodology-${index + 1}`} title={title} description={description} srcImage={srcImage} />)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-banner-transparencia bg-cover 2xl:bg-center py-12 lg:py-16 xl:py-20' id='transparencia'>
        <div className='mx-auto w-10/12 xl:w-9/12 max-w-screen-2xl'>
          <div className='flex flex-col gap-y-8 lg:flex-row lg:justify-between lg:items-center'>
            <div className='lg:w-4/12 max-w-[382px]'>
              <div className='space-y-5 text-white'>
                <h2 className='font-black text-3xl 3xl:text-[45px]'>
                  {transparencia.title}
                </h2>
                <p className='3xl:text-[22px] text-justify'>
                  {transparencia.description}
                </p>
              </div>
            </div>
            <div className='lg:w-6/12 max-w-[721px]'>
              <SwiperDefault data={transparencia.suggestions} />
            </div>
          </div>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20 relative' id='temporalidad'>
        <div className='mx-auto w-10/12 xl:w-9/12 max-w-screen-2xl'>
          <div className='flex flex-col gap-y-8 lg:flex-row-reverse lg:justify-between lg:items-center relative z-10'>
            <div className='lg:w-4/12 max-w-[382px]'>
              <div className='space-y-5'>
                <h2 className='font-black text-3xl 3xl:text-[45px]'>
                  {temporalidad.title}
                </h2>
                <p className='3xl:text-[22px] text-justify'>
                  {temporalidad.description}
                </p>
              </div>
            </div>
            <div className='lg:w-6/12 max-w-[641px]'>
              <div className='space-y-[32.5px]'>
                {
                  <SwiperDefault data={temporalidad.suggestions} buttonColor="dark" />
                }
              </div>
            </div>
          </div>
        </div>
        <div className='absolute right-0 top-1/2 transform -translate-y-1/2'>
          <img src="/images/temporalidad-big-icon.svg" alt="temporalidad" />
        </div>
      </div>

      <div className='bg-banner-trazabilidad bg-cover bg-center py-12 lg:py-16 xl:py-20' id='trazabilidad'>
        <div className='mx-auto w-10/12 xl:w-9/12 max-w-screen-2xl'>
          <div className='flex flex-col gap-y-8 lg:flex-row lg:justify-between lg:items-center'>
            <div className='lg:w-4/12 max-w-[382px]'>
              <div className='space-y-5 text-white'>
                <h2 className='font-black text-3xl 3xl:text-[45px]'>
                  {trazabilidad.title}
                </h2>
                <p className='3xl:text-[22px] text-justify'>
                  {trazabilidad.description}
                </p>
              </div>
            </div>
            <div className='lg:w-6/12 max-w-[641px]'>
              <div className='space-y-[32.5px]'>
                {
                  <SwiperDefault data={trazabilidad.suggestions} />
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20 relative' id='competitividad'>
        <div className='mx-auto w-10/12 xl:w-9/12 max-w-screen-2xl'>
          <div className='flex flex-col gap-y-8 lg:flex-row-reverse lg:justify-between lg:items-center relative z-10'>
            <div className='lg:w-4/12 max-w-[382px]'>
              <div className='space-y-5'>
                <h2 className='font-black text-3xl 3xl:text-[45px]'>
                  {competitividad.title}
                </h2>
                <p className='3xl:text-[22px] text-justify'>
                  {competitividad.description}
                </p>
              </div>
            </div>
            <div className='lg:w-6/12 max-w-[641px]'>
              <div className='space-y-[32.5px]'>
                {
                  <SwiperDefault data={competitividad.suggestions} buttonColor="dark" />
                }
              </div>
            </div>
          </div>
        </div>
        <div className='absolute right-0 top-1/2 transform -translate-y-1/2'>
          <img src="/images/competitividad-big-icon.svg" alt="competitividad" />
        </div>
      </div>

      <div className='bg-banner-confiabilidad bg-cover bg-center py-24 lg:py-36 xl:py-40' id='confiabilidad'>
        <div className='mx-auto w-10/12 xl:w-9/12 max-w-screen-2xl'>
          <div className='flex flex-col gap-y-8 lg:flex-row lg:justify-between lg:items-center'>
            <div className='lg:w-4/12 max-w-[382px]'>
              <div className='space-y-5 text-white'>
                <h2 className='font-black text-3xl 3xl:text-[45px]'>
                  {confiabilidad.title}
                </h2>
                <p className='3xl:text-[22px] text-justify'>
                  {confiabilidad.description}
                </p>
              </div>
            </div>
            <div className='lg:w-6/12 max-w-[641px]'>
              <div className='space-y-[32.5px]'>
                {
                  <SwiperDefault data={confiabilidad.suggestions} />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
