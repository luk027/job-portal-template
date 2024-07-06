import React from 'react'


const CategoriesSection = () => {

  return (
    <div className='lg:my-16 py-8 px-4 md:px-20 lg:px-40'>

      {/* categories card  */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='text-center sm:text-start sm:leading-normal lg:leading-normal  leading-normal text-[#202430]  text-4xl lg:text-5xl font-bold'>
          Explore by Different Categories
        </div>

       <a href={'#'}>
          <div className='group'>
            <div className=' group-hover:border-red-300  border-2 border-red-300 lg:border-gray-200 rounded-2xl bg-gradient-to-b from-transparent via-red-50 to-red-200 flex flex-col p-6 sm:p-8 '>
              <div className='text-gray-500'> TREANDING AT #1</div>
              <div className='group-hover:text-red-600 text-red-600 lg:text-[#202430] font-bold text-2xl py-4'>Information technology</div>
              <div className='leading-5 text-gray-500'>
                Explore lucrative IT industry jobs, from software development and cybersecurity to data analysis and cloud computing, for a rewarding career.
              </div>
              <div className='group-hover:text-white group-hover:bg-red-600 bg-red-600 lg:bg-transparent text-white lg:text-[#202430] flex justify-start items-center mt-5 font-bold w-min p-2 rounded-lg'>
                <div className=''>
                  Explore
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    className="bi bi-chevron-right  h-4 w-4 " viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </a>
        
       <a href={'#'}>
          <div className='group'>
            <div className=' group-hover:border-yellow-500  border-2 border-yellow-500 lg:border-gray-200 rounded-2xl bg-gradient-to-b from-transparent via-yellow-50 to-yellow-300 flex flex-col p-6 sm:p-8 '>
              <div className='text-gray-500'> TREANDING AT #2</div>
              <div className='group-hover:text-yellow-600 text-yellow-600 lg:text-[#202430] font-bold text-2xl py-4'>Finance</div>
              <div className='leading-5 text-gray-500'>
                Discover rewarding finance jobs, including roles in accounting, investment banking, financial analysis, and more, for a prosperous career in finance.
              </div>
              <div className='group-hover:text-white group-hover:bg-yellow-600 bg-yellow-600 lg:bg-transparent text-white lg:text-[#202430] flex justify-start items-center mt-5 font-bold w-min p-2 rounded-lg'>
                <div className=''>
                  Explore
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    className="bi bi-chevron-right  h-4 w-4 " viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </a>

       <a href={'#'}>
          <div className='group'>
            <div className=' group-hover:border-blue-500  border-2 border-blue-500 lg:border-gray-200 rounded-2xl bg-gradient-to-b from-transparent via-blue-50 to-blue-300 flex flex-col p-6 sm:p-8 '>
              <div className='text-gray-500'> TREANDING AT #3</div>
              <div className='group-hover:text-blue-600 text-blue-600 lg:text-[#202430] font-bold text-2xl py-4 break-all'>Medical/Healthcare</div>
              <div className='leading-5 text-gray-500'>
              Discover rewarding careers in healthcare, from doctors and nurses to medical researchers and healthcare, making a difference in people's lives.
              </div>
              <div className='group-hover:text-white group-hover:bg-blue-600 bg-blue-600 lg:bg-transparent text-white lg:text-[#202430] flex justify-start items-center mt-5 font-bold w-min p-2 rounded-lg'>
                <div className=''>
                  Explore
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    className="bi bi-chevron-right  h-4 w-4 " viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </a>

       <a href={'#'}>
          <div className='group'>
            <div className=' group-hover:border-green-500  border-2 border-green-500 lg:border-gray-200 rounded-2xl bg-gradient-to-b from-transparent via-green-50 to-green-300 flex flex-col p-6 sm:p-8 '>
              <div className='text-gray-500'> TREANDING AT #4</div>
              <div className='group-hover:text-green-600 text-green-600 lg:text-[#202430] font-bold text-2xl py-4'>Marketing</div>
              <div className='leading-5 text-gray-500'>
              Discover dynamic marketing careers, from digital strategy and content creation to branding and analytics, for a thriving professional journey.
              </div>
              <div className='group-hover:text-white group-hover:bg-green-600 bg-green-600 lg:bg-transparent text-white lg:text-[#202430] flex justify-start items-center mt-5 font-bold w-min p-2 rounded-lg'>
                <div className=''>
                  Explore
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    className="bi bi-chevron-right  h-4 w-4 " viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </a>

       <a href={'#'}>
          <div className='group'>
            <div className=' group-hover:border-purple-500  border-2 border-purple-500 lg:border-gray-200 rounded-2xl bg-gradient-to-b from-transparent via-purple-50 to-purple-300 flex flex-col p-6 sm:p-8 '>
              <div className='text-gray-500'> TREANDING AT #5</div>
              <div className='group-hover:text-purple-600 text-purple-600 lg:text-[#202430] font-bold text-2xl py-4'>Advisor Creators</div>
              <div className='leading-5 text-gray-500'>
                Discover rewarding roles as an advisor to creators, offering guidance in content creation, marketing, and brand development for success.
              </div>
              <div className='group-hover:text-white group-hover:bg-purple-600 bg-purple-600 lg:bg-transparent text-white lg:text-[#202430] flex justify-start items-center mt-5 font-bold w-min p-2 rounded-lg'>
                <div className=''>
                  Explore
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    className="bi bi-chevron-right  h-4 w-4 " viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </a>
        
      </div>

      <div className='flex justify-center py-6'>
       <a href={'#'}>
          <div className='group flex justify-center self-end w-fit'>
            <div className='group-hover:text-purple-500 flex text-[#4338ca] pt-3 sm:pt-3 text-xs sm:text-sm font-semibold'>SEE MORE CATEGORIES &nbsp;</div>
            <div className='flex self-end w-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                className="bi bi-arrow-right arrow-icon h-5 w-6 group-hover:text-purple-500 text-[#4338ca] stroke-2" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default CategoriesSection