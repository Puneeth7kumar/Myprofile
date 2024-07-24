'use client'



export default function Home() {
  return (

    <div className="bg-white">
      {/* <section className="bg-animated-gradient h-96 flex items-center justify-center"> */}
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-animated-gradient h-90 flex items-center justify-center">

        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Next Upcoming Projects.{' '}
              <a href="https://puneethkumar02.carrd.co/" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              I'm Puneeth Kumar
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I'm more passionate about development of software and web-based applications. Interested in development of apps and AI technology.
            </p>

          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>

      </div >
      {/* </section> */}
      <div>
        {/* New Section Added */}
        <section className="pt-100 overflow-hidden  bg-gradient-to-r from-slate-500 to-slate-800 md:pt-0 sm:pt-16 2xl:pt-16">
          <div id="about" className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-center grid-cols-1 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                  Hey <br className="block sm:hidden" /> This is My Profile
                </h2>
                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                  Next js profile page and my software development journy
                </p>
                <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                  <span className="relative inline-block">

                    <span className="relative"> Have a question? </span>
                  </span>

                  <br className="block sm:hidden" />Ask me on <a href="https://www.instagram.com/puneeth.pandith/" title="" className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">Instagram</a>
                  <br />
                  <br className="block sm:hidden" />My LinkedIn <a href="https://in.linkedin.com/in/puneeth-kumar-5a097b286" title="" className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">LinkedIn</a>
                  <br />
                  <br className="block sm:hidden" />My GitHub Profile <a href="https://github.com/Puneeth7kumar" title="" className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">GitHub</a>
                </p>
              </div>
              <div className="relative">
                <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />
                <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://i.ibb.co/bN63yJd/IMG-9073-my-removebg.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div >
  )
}
