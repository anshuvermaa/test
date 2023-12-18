'use client';
import { useGlobalContext } from '@/context/store';
import { YearCardProps } from '@/lib/props';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

function YearCard(props: YearCardProps) {
  const { data, nickName, year } = props;
  const { link, setLink,setActive } = useGlobalContext();
  useEffect(() => {
    handleClick(data[0].link);
  }, []);

  const handleClick = (link: string): void => {
    setLink(link);
    setActive(false)
  };
  return (
    <div>
      <div>
        <div className="text-[#615A5A] text-[10px]">Year {year}</div>
        <hr className="h-px w-full bg-[#B4B4B4] h-[1px] mt-1 mb-2" />
        <div className="flex flex-col text-xs text-[#615A5A] gap-1">
          {data.map((quater, index) => (
            <div
              key={index}
              onClick={() => handleClick(quater.link)}
              className={cn(
                `flex justify-between px-4  cursor-pointer  p-3 rounded`,
                {

                  "border-black border": link === quater.link
                }
              )}
            >
              <div>
                <span>{nickName},</span>
                <span>
                  {quater.quarter} {year} Earnings Calls
                </span>
              </div>
              <span className="text-[#B4B4B4] text-xs">{quater.date}</span>
            </div>
          ))}

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default YearCard;
