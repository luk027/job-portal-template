import himage3 from '../assets/Images/s1.jpg'
import himage4 from '../assets/Images/s9.jpg'

const EmployerPromotion = () => {
  return (
    <div className='lg:my-16 py-8 px-4 md:px-36 lg:px-56'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='relative -z-10'>
                    <img className='w-[500px] lg:h-[80vh] 2xl:h-[80vh] 3xl:h-[70vh]  rounded-lg shadow-2xl    '
                        // width={530}
                        src={himage3}   
                        alt='Working professional Women 2' />

                    {/* <Image className='hidden lg:block absolute top-1/3 left-[72%] origin-bottom -rotate-12 w-[200px] lg:h-[25vh]  2xl:h-[25vh] 3xl:h-[25vh]  rounded-xl border-8 border-white shadow-2xl'
                        // width={530}
                        src={himage4}
                        alt='Working professional Women 2' /> */}
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <span className="flex flex-wrap justify-center items-center text-xl font-bold font-[#4338ca] tracking-widest">
                            <span className=' bg-gradient-to-r from-[#4338ca] to-purple-600 bg-clip-text text-transparent transition-all duration-300 ease-in-out'>PASSION</span>
                            <span className='text-[#202430]'>TRACK</span>
                            <span className="flex justify-center items-center text-xl font-bold font-[#4338ca] tracking-widest">&nbsp;For Employers</span>
                        </span>
                    </div>
                    <div className='text-center text-[#4338ca] pt-4 pb-2  sm:pt-6  md:pt-8 sm:pb-2 md:pb-4  leading-snug text-2xl lg:text-5xl font-bold '>
                        Want to hire?
                    </div>
                    <div className='text-center text-gray-500 font-medium  text-lg lg:text-xl pt-3 pb-6'>
                        We connects job seekers with top opportunities and empowers recruiters to find exceptional talent. Your future career or ideal candidate awaits!
                    </div>
                    <a href={'#'}>
                        <div className='w-max flex justify-center items-center text-2xl font-bold font-[#4338ca] px-8 py-2 rounded-lg text-white sm:text-[#4338ca] hover:text-white bg-[#4338ca] sm:bg-white hover:bg-[#4338ca] transition delay-75 ease-in-out  border-2 border-[#4338ca]'>
                            Post job
                        </div>
                    </a>
                </div>
            </div>
        </div>
  )
}

export default EmployerPromotion