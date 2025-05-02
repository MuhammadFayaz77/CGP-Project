import React from 'react'

function video() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12  bg-[#F9F9F9]">
        <div className='flex flex-col items-center justify-center mb-16' >
            <h1 className='text-5xl text-black font-semibold '>Product Tour Video</h1>
            <p className='text-[#0000008F] max-w-2xl text-center mt-7'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
        </div>
            <div className="aspect-video w-[85%]  h-[90dvh] rounded-lg">
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