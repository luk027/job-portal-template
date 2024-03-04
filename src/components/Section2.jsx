import React from 'react'

const Section2 = () => {
  return (
    <div className='lg:my-16 py-8 px-4 md:px-20 lg:px-40'>
            <div className='flex flex-col text-[#202430] py-8 sm:py-16 leading-snug text-4xl lg:text-5xl font-bold'>
                <div className='text-center'>
                    Easy steps to
                </div>
                <div className='text-center'>
                    land your next job
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {/* 1 card  */}
                <div className='flex flex-col items-center'>
                    <div className='bg-blue-600 text-white rounded-lg shadow-lg shadow-blue-500 h-20 w-20 flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            className="bi bi-crosshair h-8 w-8" viewBox="0 0 16 16">
                            <path d="M8.5.5a.5.5 0 0 0-1 0v.518A7.001 7.001 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7.001 7.001 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7.001 7.001 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7.001 7.001 0 0 0 8.5 1.018V.5Zm-6.48 7A6.001 6.001 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6.001 6.001 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6.002 6.002 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6.001 6.001 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1h-.48ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                        </svg>
                    </div>

                    <div className='font-semibold text-xl py-6'>
                        Register Your Account
                    </div>
                    <div className='text-center text-gray-500'>
                        Get started by creating an account for quick access to career opportunities.
                    </div>
                </div>
                {/* 2 card  */}
                <div className='flex flex-col items-center'>
                    <div className='bg-green-600 text-white rounded-lg shadow-lg shadow-green-500 h-20 w-20 flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            className="bi bi-ui-radios h-8 w-8" viewBox="0 0 16 16">
                            <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM0 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm7-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM3 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                        </svg>
                    </div>

                    <div className='font-semibold text-xl py-6'>
                        Apply for New Jobs
                    </div>
                    <div className='text-center text-gray-500'>
                        Browse and apply to jobs with ease, increasing your chances of landing your ideal role.
                    </div>
                </div>

                {/* 3 card  */}
                <div className='flex flex-col md:col-span-2 lg:col-span-1 items-center'>
                    <div className='bg-yellow-400 text-white rounded-lg shadow-lg shadow-yellow-300 h-20 w-20 flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            className="bi bi-person-fill-check h-8 w-8" viewBox="0 0 16 16">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                        </svg>
                    </div>

                    <div className='font-semibold text-xl py-6'>
                        Get Hired Immediately
                    </div>
                    <div className='text-center text-gray-500'>
                        Connect with employers looking for talent, and get hired quickly to jumpstart your career.
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Section2