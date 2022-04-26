import React from 'react'

const LayoutIndex = ({children}) => {
  return (
    <section className="h-auto md:h-screen w-full overflow-x-hidden flex flex-col md:flex-row justify-center items-center">
        <section className="h-auto md:h-full w-full md:w-[25%]">
           {children[0]}
        </section>
        <section className="h-auto md:h-full w-full md:w-[50%]">
           {children[1]}
        </section>
        <section className="h-auto md:h-full w-full md:w-[25%]">
           {children[2]}
        </section>
    </section>
  )
}


export default LayoutIndex;