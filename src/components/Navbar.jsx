import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="w-full backdrop-blur-sm bg-white/90 sm:bg-white/80  fixed top-0">
        <nav className="tracking-wide py-4 px-4 md:px-20 lg:px-40 z-30 ">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <a href="#" className="flex">
              <span className="self-center text-2xl font-extrabold font-[#4338ca] tracking-widest">
                <span className=' bg-gradient-to-r from-[#4338ca] to-purple-600 bg-clip-text text-transparent transition-all duration-300 ease-in-out'>PASSION</span>
                <span className='text-[#202430]'>TRACK</span>
              </span>
            </a>
            <button data-collapse-toggle="mobile-menu" type="button" className="md:hidden ml-3 text-gray-900 focus:outline-none inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
              <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <li className='grid items-center'>
                  <a href="#" className="rounded-sm text-[#202430] font-bold text-[13px] block pl-3 pr-4 py-2 md:p-0 focus:outline-none hover:bg-white  md:hover:bg-transparent" aria-current="page">HOME</a>
                </li>
                <li className='grid items-center'>
                  <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="text-[#202430] font-bold text-[13px] hover:bg-white border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-2 py-2  md:p-0 flex items-center justify-between w-full md:w-auto rounded-sm">JOBS <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                  {/* <!-- Dropdown menu --> */}
                  <div id="dropdownNavbar" className="hidden bg-white text-base z-30 list-none divide-y divide-gray-100 rounded shadow-2xl my-4 w-44">
                    <ul className="py-1" aria-labelledby="dropdownLargeButton">
                      <li>
                        <a href="#" className="font-bold text-[13px] hover:bg-gray-100 text-gray-700 block px-4 py-2">ALL JOBS</a>
                      </li>
                      <li>
                        <a href="#" className="font-bold text-[13px] hover:bg-gray-100 text-gray-700 block px-4 py-2">REMOTE JOBS</a>
                      </li>
                      <li>
                        <a href="#" className="font-bold text-[13px] hover:bg-gray-100 text-gray-700 block px-4 py-2">PART-TIME JOBS</a>
                      </li>
                      <li>
                        <a href="#" className="font-bold text-[13px] hover:bg-gray-100 text-gray-700 block px-4 py-2">FULL-TIME JOBS</a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a href="#" className="font-bold text-[13px] hover:bg-gray-100 text-gray-700 block px-4 py-2">FIND BY COMPANIES</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='flex  font-bold text-[13px] mt-2 sm:mt-0'>
                    <a href={'#'}>
                      <div className='pl-3 sm:pl-0 pr-6 py-2 hover:text-gray-600 ease-in-out'>LOG IN</div>
                    </a>
                    <a href={'#'}>
                      <div className='bg-[#4338ca] rounded-sm hover:bg-gradient-to-r from-[#4338ca] to-purple-600 text-white px-4 py-2'>SIGN UP</div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
    </div>
  )
}

export default Navbar