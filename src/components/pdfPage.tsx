"use client"
import { useGlobalContext } from '@/context/store';
type PdfPageProps = {
    link:string
};
// {link}:PdfPageProps

function PdfPage()  {
  const {link} = useGlobalContext();
  const {active,setActive} = useGlobalContext();
  const handleClick = () => {
    setActive(!active);
  };
  return (
      <div className="bg-white h-full w-full mt-1 rounded p-3">
<div className="flex justify-between">
    <div className='flex '>

  <div className='sm:hidden flex justify-center items-center pr-2' onClick={() => handleClick()}>
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="25" viewBox="0 0 32 32">
<path d="M 8 5 C 6.3550302 5 5 6.3550302 5 8 C 5 9.6449698 6.3550302 11 8 11 L 24 11 C 25.64497 11 27 9.6449698 27 8 C 27 6.3550302 25.64497 5 24 5 L 8 5 z M 8 7 L 24 7 C 24.56503 7 25 7.4349698 25 8 C 25 8.5650302 24.56503 9 24 9 L 8 9 C 7.4349698 9 7 8.5650302 7 8 C 7 7.4349698 7.4349698 7 8 7 z M 8 13 C 6.3550302 13 5 14.35503 5 16 C 5 17.64497 6.3550302 19 8 19 L 24 19 C 25.64497 19 27 17.64497 27 16 C 27 14.35503 25.64497 13 24 13 L 8 13 z M 8 15 L 24 15 C 24.56503 15 25 15.43497 25 16 C 25 16.56503 24.56503 17 24 17 L 8 17 C 7.4349698 17 7 16.56503 7 16 C 7 15.43497 7.4349698 15 8 15 z M 8 21 C 6.3550302 21 5 22.35503 5 24 C 5 25.64497 6.3550302 27 8 27 L 24 27 C 25.64497 27 27 25.64497 27 24 C 27 22.35503 25.64497 21 24 21 L 8 21 z M 8 23 L 24 23 C 24.56503 23 25 23.43497 25 24 C 25 24.56503 24.56503 25 24 25 L 8 25 C 7.4349698 25 7 24.56503 7 24 C 7 23.43497 7.4349698 23 8 23 z"></path>
</svg>

  </div>
      <div>
        <div className="font-base text-bold">
        Transcript
        </div>
        <span className="text-[10px] text-[#615A5A]">
        Shoppers Stop, Q3 2023 Earnings Calls
        </span>
      </div>
    </div>
    <div>
    <div className="border flex items-stretch gap-2 px-3 py-2.5 rounded-md border-solid border-stone-300">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d99fa9fd276243d7558ff77653d3d757cda7faca53aa5ef19f32eb73a53c0270?apiKey=5cde87991af244efb1de7625d579138f&"
          className="aspect-[0.88] object-contain object-center w-[15px] fill-zinc-600 overflow-hidden shrink-0 max-w-full"
          aria-label="Insights Icon"
          role="img"
        />
        <a
          href="#"
          className="text-zinc-600 text-xs font-bold capitalize grow whitespace-nowrap mt-1 self-start"
        >
          View Insights
        </a>
      </div>

    </div>
</div>
      <hr className="h-px w-full bg-[#B4B4B4] h-[1px] mt-1 mb-7" />
      
       <iframe
      src={link}
      className="h-[87%] w-full"
    ></iframe>
      </div>
  );
}

export default PdfPage;
