import React from 'react'

const VisionCard = ({title , description}) => {
  return (
    <>
     <div className="vision-card flex flex-col justify-center shadow-md shadow-white hover:scale-105 duration-500 cursor-default items-center border-2 border-blue-500 xl:w-[380px] xl:h-[500px] min-[360px]:w-[300px] md:w-[600px]   rounded-xl p-6">
      <div className="flex flex-col items-center gap-6">
        <img
          src="https://www.clipartmax.com/png/middle/351-3515666_c-language-global-or-external-variables-with-examples-c-programming-logo.png"
          alt=""
          className="h-[150px] w-[150px] rounded-full"
        />
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl text-white tracking-wider font-semibold">
            {title}
          </h1>
          
          <p className="text-white text-lg">
            {description}
          </p>
        </div>

       
      </div>
    </div>
    </>
  )
}

export default VisionCard