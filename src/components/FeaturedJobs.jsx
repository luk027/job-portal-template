import React from 'react'

const FeaturedJobs = () => {
  return (
    <div className='lg:my-16 py-8 px-4 md:px-20 lg:px-40 bg-purple-50'>
      <div className='text-center text-[#202430] py-8 sm:py-16 leading-snug text-4xl lg:text-5xl font-bold'>
        Featured Jobs
      </div>

      {/* Feature Jobs  */}
      <div className='  '>

      </div>

      <div className=''>
        <a href={'#'}>
          <div className='group flex justify-center self-end'>
            <div className='group-hover:text-purple-500 flex text-primary pt-3 sm:pt-3 text-xs sm:text-sm font-semibold'>SEE MORE JOBES &nbsp;</div>
            <div className='flex self-end w-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                className="bi bi-arrow-right arrow-icon h-5 w-6 group-hover:text-purple-500 text-primary stroke-2" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default FeaturedJobs