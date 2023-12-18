import Link from 'next/link'
function Navbar() {
  return (
    <div>
      <div className="flex gap-3 ">
          <Link href={`/dashboard`}>
        <div className="flex items-start justify-between gap-1 mx-1   sm:gap-2.5  max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba085e10b23653b12cca45bc51218c33c1b396d51d9789c659310f3158a5d756?apiKey=5cde87991af244efb1de7625d579138f&"
            className="aspect-[0.62] object-contain object-center w-2 stroke-[2px] stroke-zinc-400 overflow-hidden self-center shrink-0 max-w-full my-auto"
            alt="Company Logo"
          />

          <header className="justify-center text-zinc-400 text-xs font-bold self-center my-auto">
            {' '}
            Back{' '}
          </header>


          <div className="bg-black bg-opacity-20 self-stretch w-px shrink-0 h-[73px]" />
        </div>
          </Link>

        <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
          <h2 className="text-stone-900 text-base font-bold whitespace-nowrap ">
            {' '}
            Eureka Forbes Ltd{' '}
          </h2>

          <div className="sm:flex items-stretch justify-start gap-3 text-xs mt-3.5">
          
            <div className="flex gap-3">
              <div>
                <span className="text-zinc-400 font-bold">Following</span>
                <span className="text-stone-600"> </span>
              </div>
              <div>
                <span className="text-zinc-400">NSE: </span>
                <span className="text-zinc-600">EUREKAFO</span>
              </div>
              <div>
                <span className="text-zinc-400">
                  Market
                  <span className="hidden sm:inline-block">Cap:(11/16/23)</span>
                </span>
                <span className="text-zinc-600"> $11.3 Billion</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <span className="text-zinc-400">Sector: </span>
                <span className="text-zinc-600">Apparel</span>
              </div>
              <div>
                <span className="text-zinc-400">Industry: </span>
                <span className="text-zinc-600">Textiles & Apparel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
}

export default Navbar;
