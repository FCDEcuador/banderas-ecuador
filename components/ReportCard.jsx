import { format, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'

export default function ReportCard ({ id, srcImage, title, date, link }) {
  return (
    <div className='bg-white rounded-[30px] pt-[42px] pb-[25px] px-[50px] flex flex-col justify-between space-y-6 hover:shadow-3 duration-300'>
      <div>
        {
          srcImage
            ? (
            <img className="aspect-3/2 object-cover object-center overflow-hidden rounded-2xl" src={srcImage} alt={`informe ${id}`} />
              )
            : (
            <div className="aspect-3/2 bg-grey bg-opacity-5 rounded-xl">
              &nbsp;
            </div>
              )
        }
        <h3 className='font-medium 3xl:text-[21px] mt-[27.93px]'>
          {title}
        </h3>
        <p className='text-grey-light italic 3xl:text-[19px] mt-[10.32px]'>
          Publicado el {format(parseISO(date), "d 'de' MMMM 'de' yyyy", { locale: es })}
        </p>
      </div>
      <div>
        <a href={link} download target="_blank" className='bg-red text-white py-[10px] px-[40px] font-bold rounded-[15px] inline-flex space-x-[10px] items-center' rel="noreferrer">
          <div className="flex-shrink-0">
            <img src="/images/doc-download.svg" alt="download icon" />
          </div>
          <span>Descargar</span>
        </a>
      </div>
    </div>
  )
};
