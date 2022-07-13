export default function ReportCard ({ id, srcImage, title, date, link }) {
  return (
        <div className='bg-white rounded-[30px] pt-[42px] pb-[25px] px-[50px] flex flex-col justify-between space-y-6 hover:shadow-3 duration-300'>
            <div>
                <img src={srcImage} alt={`informe ${id}`} />
                <h3 className='font-medium 3xl:text-[21px] mt-[27.93px]'>
                    {title}
                </h3>
                <p className='text-grey-light italic 3xl:text-[19px] mt-[10.32px]'>
                    Publicado el {date}
                </p>
            </div>
            <div>
                <a href={link} download target="_blank" className='bg-red text-white py-[10px] px-[40px] font-bold rounded-[15px] inline-flex space-x-[10px] items-center' rel="noreferrer">
                    <div className="flex-shrink-0">
                        <img src="/doc-download.svg" alt="download icon" />
                    </div>
                    <span>Descargar</span>
                </a>
            </div>
        </div>
  )
};
