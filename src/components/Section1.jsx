import himage1 from '../assets/Images/s3.jpg'
import himage2 from '../assets/Images/s2.jpg'

const Section1 = () => {
  return (
    <div className='py-2 px-8 lg:px-0 md:pl-20 lg:pl-40 '>
    <div className=' lg:h-[80vh]  2xl:h-[80vh] 3xl:h-[70vh] flex justify-center mt-[10vh]'>

      {/* left section  */}
      <div className='flex  flex-col justify-center text-4xl lg:text-5xl sm:my-2 font-extrabold sm:w-1/2 '>
        <div className='text-[#202430]'> Discover a Variety of <a className="group bg-gradient-to-r from-[#4338ca] to-purple-600 bg-clip-text text-transparent transition-all duration-300 ease-in-out" href="#">
          <span className="bg-left-bottom bg-gradient-to-r from-[#4338ca] to-purple-600 bg-[length:8%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
            5000+ Jobs
          </span>
          
        </a>
        </div>
        <div className='text-gray-500 lg:pr-28 sm:py-8 font-medium text-base lg:text-lg sm:pr-11 py-4 leading-6 '>
          Great Platform for the job seeker  that  searching for new career height and
          passionate.
        </div>

        {/* JOB SEARCH BAR  */}
        <div className='lg:flex w-min  bg-white text-lg font-normal rounded-sm shadow-2xl m-1 p-2'>
          {/* JOB TITLE  */}
          <div className='flex px-2 py-1'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                className="bi bi-search text-[#4338ca] mt-1 mr-2" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>  
            </div>
            <div>
              <input type="text" placeholder='Job title or keyword'
                className='outline-none ' />
            </div>
          </div>

          {/* EXPERIENCE  */}
          <div className='flex px-2 sm:py-1 py-3'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                className="bi bi-calendar-check text-[#4338ca] mt-1 mr-2" viewBox="0 0 16 16">
                <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>
            </div>
            <div>
              <select className="outline-none">
                <option value="">Fresher</option>
                <option value="">1 year</option>
                <option value="">2 years</option>
                <option value="">3 years</option>
                <option value="">4+ years</option>
              </select>
            </div>
          </div>

          {/* SEARCH BUTTON  */}
          <div>
            <a href={'#'}>
              <div className='bg-[#4338ca] text-center rounded-sm hover:bg-gradient-to-r from-[#4338ca] to-purple-600 text-white font-bold text-[13px] px-2 py-1'>SEARCH</div>
            </a>
          </div>
        </div>
      </div>

      {/* right section  */}
      <div className='hidden md:flex'>
        <div className='mr-6'>
          <img className='w-[550px] lg:h-[80vh]  2xl:h-[80vh] 3xl:h-[70vh]  rounded-xl'
            // width={530}
            src={himage1}
            alt='Working professional Team' />
        </div>
        <div>
          <img className='w-[200px] lg:h-[80vh]  2xl:h-[80vh] 3xl:h-[70vh] rounded-l-xl'
            // width={250}
            src={himage2}
            alt='Working professional Women' />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Section1