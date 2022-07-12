export default function LawsCard ({ title, description, link }) {
  return (
        <div className='pt-[47px] pb-[40.97px] px-[47px] rounded-[20px] border-gemstone-light border flex flex-col justify-between'>
            <div className='space-y-[18px]'>
                <h3 className='font-bold'>
                    {title}
                </h3>
                <p className='3xl:text-[19pxin]'>
                    {description}
                </p>
            </div>
            <a href={link} className='mt-[18px] inline-block max-w-[184px] px-[30px] py-[10px] border border-gemstone-green text-gemstone-green font-bold rounded-[15px]'>
                Conocer más
            </a>
        </div>
  )
};
