import Link from "next/link";
export default function Home() {
  return (
   <div>

      hello
      <div className="text-[#0047ab]">
      <Link href={'/dashboard'}>
        go to companies list page
      
      </Link>

      </div>
   </div>
    
  );
}
