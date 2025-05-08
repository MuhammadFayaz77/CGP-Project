import React from 'react'

function video() {
  return (
    <div className="w-full flex flex-col items-center justify-center lg:py-12  bg-[#F9F9F9]">
        <div className='flex flex-col items-center justify-center lg:mb-16 md:mb-12 mb-4' >
            <h1 className='lg:text-5xl lg:mt-0 mt-3 md:text-4xl sm:text-2xl  text-xl text-black font-semibold '>Product Tour Video</h1>
            <p className='text-[#0000008F] max-w-2xl text-center lg:mt-7'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
        </div>
            <div className="aspect-video lg:w-[85%]  lg:h-[90dvh] md:h-[60dvh] md:w-[87%] rounded-lg">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/u2IEDVXPcc8?si=al4vIrKb3ymEuvfn"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
  )
}

export default video