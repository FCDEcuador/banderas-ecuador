export default function RedFlagCard ({ title, urlImage }) {
  return (
    <div className='shadow-2 text-white text-center py-[21px] px-[34px] bg-gemstone-green rounded-[30px] space-y-2'>
      <img className='mx-auto' src={urlImage} alt={`${title.toLowerCase()} icon`} />
      <p className='font-black text-sm'>
        {title}
      </p>
    </div>
  )
};
