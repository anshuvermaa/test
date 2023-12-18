'use client';
import YearCard from '@/components/yearCard';
import { useGlobalContext } from '@/context/store';

import { infoProps } from '@/lib/props';

function Info(props: infoProps) {
  const { active, setActive } = useGlobalContext();
  // if(data[0]){
  //   console.log("data in info page ............. "+data[0].year);

  // }
  return (
    <div>
      <div className="flex flex-col gap-y-8">
        <div className="flex justify-between">
          <div className="font-bold text-base text-[#1C1818]">
            Earnings Calls
          </div>
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="cursor-pointer hidden sm:flex"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="filer">
                <path
                  id="Vector"
                  d="M15.9997 12.6073C15.9997 14.4833 14.4883 16.0037 12.6234 16.0037C10.7586 16.0037 9.24707 14.4833 9.24707 12.6073C9.24707 10.7314 10.7586 9.21094 12.6234 9.21094C14.4883 9.21094 15.9997 10.7314 15.9997 12.6073Z"
                  fill="#B4B4B4"
                />
                <path
                  id="Vector_2"
                  d="M6.74918 3.39639C6.74918 5.27233 5.2377 6.79278 3.37284 6.79278C1.50798 6.79278 0 5.26881 0 3.39639C0 1.52398 1.51148 0 3.37634 0C5.2412 0 6.75268 1.52046 6.75268 3.39639H6.74918Z"
                  fill="#B4B4B4"
                />
                <path
                  id="Vector_3"
                  d="M3.37634 9.21094C1.51148 9.21094 0 10.7314 0 12.6073C0 14.4833 1.51148 16.0037 3.37634 16.0037C5.2412 16.0037 6.75268 14.4833 6.75268 12.6073C6.75268 10.7314 5.2412 9.21094 3.37634 9.21094ZM3.37634 13.9307C2.65209 13.9307 2.06779 13.3429 2.06779 12.6144C2.06779 11.8858 2.65209 11.298 3.37634 11.298C4.10059 11.298 4.68489 11.8858 4.68489 12.6144C4.68139 13.3394 4.09709 13.9237 3.37634 13.9237V13.9307Z"
                  fill="#B4B4B4"
                />
                <path
                  id="Vector_4"
                  d="M13.6344 0H11.6191V6.78927H13.6344V0Z"
                  fill="#B4B4B4"
                />
                <path
                  id="Vector_5"
                  d="M16.0002 2.38281H9.25098V4.41009H16.0002V2.38281Z"
                  fill="#B4B4B4"
                />
              </g>
            </svg>
            <svg
              onClick={() => setActive(!active)}
              className="cursor-pointer flex sm:hidden"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="16"
              height="16"
              viewBox="0 0 50 50"
            >
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {/* <YearCard  data={data}/> */}
          {props.earningData.map((data) => (
            <YearCard
              key={data.year}
              data={data.quaterdata}
              nickName={props.nickName}
              year={data.year.toString()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Info;
