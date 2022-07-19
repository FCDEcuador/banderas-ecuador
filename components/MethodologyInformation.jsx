export default function MethodologyInformation ({ title, description, srcImage }) {
  return (
    title
      ? (
                <div className='flex space-x-[10.79px]'>
                    <div className='lg:w-2/12'>
                        <img src={srcImage} alt={`${title.toLowerCase()} icon`} />
                    </div>
                    <div className='lg:w-10/12'>
                        <div className='space-y-[10px]'>
                            <h3 className='text-orange-red font-bold text-xl 3xl:text-[22px]'>
                                {title}
                            </h3>
                            <p className="text-justify">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
        )
      : (
                <div className='-mt-2'>
                    <img className='mx-auto max-w-[280px]' src={srcImage} alt="logo OCDS" />
                </div>
        )
  )
};
