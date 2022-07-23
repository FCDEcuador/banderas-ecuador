import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../components/Map'), { ssr: false })

export default function KnowUs () {
  // center: { lat: -0.180653, lng: -78.467834 },

  return (
    <>
      <div className='py-12 lg:py-16 xl:py-20'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <div className='space-y-[75px]'>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-8'>
              <div className='lg:w-5/12 max-w-[537px]'>
                <h1 className='inline-block font-black text-5xl 3xl:text-[65px]'>
                  <span>Conócenos</span>
                  <div className='-mt-3 bg-orange bg-opacity-[0.4] h-[23px] w-full'>&nbsp;</div>
                </h1>
                <div className='mt-[45px] space-y-[17px]'>
                  <h2 className='font-black text-grey-light text-2xl 3xl:text-[35px]'>
                    Sobre nosotros
                  </h2>
                  <p className='text-xl 3xl:text-[22px] text-justify'>
                    Es una iniciativa de Fundación Ciudadanía y Desarrollo que, a través del análisis y difusión de datos de la contratación pública, busca promover la contratación abierta en Ecuador.
                  </p>
                </div>
              </div>
              <div className='lg:w-6/12 max-w-[721px]'>
                <img src="/images/conocenos.png" alt="conocenos" />
              </div>
            </div>
            <div className='flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center gap-y-8'>
              <div className='lg:w-5/12 max-w-[537px]'>
                <div className='space-y-8'>
                  <div className='space-y-[17px]'>
                    <h2 className='font-black text-grey-light text-2xl 3xl:text-[35px]'>
                      Contacto
                    </h2>
                    <p className='text-xl 3xl:text-[22px] text-justify'>
                      ¿Quieres obtener información adicional sobre el trabajo del Observatorio, compartir una idea con nosotros o hacer un comentario? Envíanos un correo electrónico a info@ciudadaniaydesarrollo.org o llena el formulario a continuación.
                    </p>
                  </div>
                  <div className='space-y-[30px]'>
                    <div className='flex gap-x-[12.79px]'>
                      <div className='mt-1 flex-shrink-0'>
                        <img src="/images/direction-icon.svg" alt="direction" />
                      </div>
                      <div className='max-w-[404px]'>
                        <h4 className='font-black text-xl 3xl:text-[28px] text-red'>
                          Dirección
                        </h4>
                        <p className='text-xl 3xl:text-[22px] text-justify'>
                          Av. Gral. Eloy Alfaro y 6 de Diciembre Edificio Monasterio Plaza Piso 10 – Quito
                        </p>
                      </div>
                    </div>
                    <div className='flex gap-x-[12.79px]'>
                      <div className='mt-1 flex-shrink-0'>
                        <img src="/images/email-icon.svg" alt="email" />
                      </div>
                      <div className='max-w-[404px]'>
                        <h4 className='font-black text-xl 3xl:text-[28px] text-red'>
                          Email
                        </h4>
                        <a href='mailto:info@ciudadaniaydesarrollo.org' className='text-xl 3xl:text-[22px]'>
                          info@ciudadaniaydesarrollo.org
                        </a>
                      </div>
                    </div>
                    <div className='flex gap-x-[12.79px]'>
                      <div className='mt-1 flex-shrink-0'>
                        <img src="/images/phone-icon.svg" alt="phone" />
                      </div>
                      <div className='max-w-[404px]'>
                        <h4 className='font-black text-xl 3xl:text-[28px] text-red'>
                          Teléfono
                        </h4>
                        <p className='text-xl 3xl:text-[22px]'>
                          (+593 – 2) 333-2526
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='lg:w-6/12 max-w-[721px]'>
                <Map />
              </div>
            </div>
            <div className='mx-auto w-10/12 max-w-[1035px]'>
              <div className='space-y-[37px]'>
                <div className='text-center'>
                  <h3 className='text-grey-light text-2xl 3xl:text-[35px] font-black'>
                    Formulario de contacto
                  </h3>
                </div>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '100%' }
                  }}
                  autoComplete="off"
                  data-netlify="true"
                  name="contact"
                  method='POST'
                  action="/conocenos?success=true"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-[35px]'>
                    <div>
                      <TextField className='bg-white' type="text" fullWidth id="nombre" name="Nombre" label="Nombre" variant="outlined" required />
                    </div>
                    <div>
                      <TextField className='bg-white' type="text" fullWidth id="apellido" name="Apellido" label="Apellido" variant="outlined" required />
                    </div>
                    <div>
                      <TextField className='bg-white' type="tel" fullWidth id="telefono" name="Telefono" label="Teléfono" variant="outlined" required />
                    </div>
                    <div>
                      <TextField className='bg-white' type="email" fullWidth id="email" name="Email" label="Email" variant="outlined" required />
                    </div>
                    <div className='lg:col-start-1 lg:col-end-3'>
                      <TextField className='bg-white' type="text" fullWidth id="asunto" name="Asunto" label="Asunto" variant="outlined" required />
                    </div>
                    <div className='lg:col-start-1 lg:col-end-3'>
                      <TextField name="Mensaje" className='bg-white' type="text" multiline rows={8} fullWidth id="mensaje" label="Mensaje" variant="outlined" required />
                    </div>
                  </div>
                  <div className='mx-auto text-center'>
                    <button className='mt-8 inline-block px-[30px] py-[10px] border border-gemstone-green text-gemstone-green font-bold rounded-[15px]' type='submit'>
                      Enviar formulario
                    </button>
                  </div>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
