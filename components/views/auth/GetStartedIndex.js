import React from 'react'

// Next
import Link from 'next/link'
import Image from 'next/image'

const GetStartedIndex = () => {
    return (
        <div className="h-screen w-full bg-gray-50 flex items-center justify-center">
            {/* Container */}
            <div className="h-full w-full md:h-[28rem] md:w-72 bg-white rounded-md shadow-2xl flex flex-col items-center justify-center p-5">
                {/* Image */}
                <div className="h-48 w-full bg-transparent flex items-center justify-center">
                    <Image src="/assets/img/onboarding/onboarding-mockup.svg" alt="" height="700" width="700" />
                </div>
                {/* Content */}
                <div className="h-auto w-full mt-10 md:mt-5 flex flex-col items-center justify-center space-y-3 md:space-y-3">
                    {/* Title */}
                    <h1 className="text-4xl md:text-xl">Welcome to <span className="font-bold">Blance</span></h1>
                    {/* Desc */}
                    <p className="text-gray-500 text-xl md:text-md text-center w-8/12 leading-tight">Please click the button to gain quick access!</p>
                </div>
                {/* CTA */}
                <Link href="/api/auth/login">
                    <div className="h-16 md:h-12 w-full mt-10 bg-black rounded-md text-white text-lg md:text-md font-medium md:font-normal flex items-center justify-center shadow-md cursor-pointer">Get Started</div>
                </Link>
            </div>
        </div>
    )
}

export default GetStartedIndex;