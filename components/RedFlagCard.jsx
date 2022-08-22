import Link from 'next/link'

export default function RedFlagCard ({ title, urlImage }) {
  return (
    <Link href={`/metodologia/#${title.toLowerCase()}`}>
      <a className='shadow-2 text-white text-center py-[21px] px-[34px] bg-gemstone-green rounded-[30px] bg-transparent space-y-2 hover:bg-white-dark hover:bg-opacity-[0.18] duration-300'>
        <img className='mx-auto' src={urlImage} alt={`${title.toLowerCase()} icon`} />
        <p className='font-black text-sm'>
          {title}
        </p>
      </a>
    </Link>
  )
};
