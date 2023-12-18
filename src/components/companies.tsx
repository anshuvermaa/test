'use client'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from '@/components/ui/table';
  import { cn } from "@/lib/utils"
  import { useRouter } from "next/navigation";
  
  const companies = [
    {
      companyId: 1,
      companyName: 'Tata Consultancy Services Ltd',
      ticker: 'NSE: ACMEC',
      marketCap: '$ 5 Billion',
      sector: 'technology',
      industry: 'tech and steal',
    },
    {
      companyId: 2,
      companyName: 'Reliance Industries Ltd',
      ticker: 'NSE: ACMEC',
      marketCap: '$ 5 Billion',
      sector: 'technology',
      industry: 'telecom',
    },
    
  ];
  
  export default function Companies() {

   
    const router = useRouter();
  
    const handleRowClick = (url: string) => {
      router.push(url);
    };
    return (
      <>
        <div className="h-[100vh] flex bg-[#EBEBEB]">
          <div className="w-[90%] h-[80vh] shadow-md m-auto my-auto bg-[white] border-[1px] border-[#EBEBEB] rounded-md py-5">
            <div className="container mx-auto">
              <Table >
                <TableHeader className="border-0">
  
                  <TableRow className='uppercase '>
                    <TableHead className="font text-sm">Company Name</TableHead>
                    <TableHead>Ticker</TableHead>
                    <TableHead>Market Cap</TableHead>
                    <TableHead className="text-left">Sector</TableHead>
                    <TableHead className="text-right">Industry</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {companies.map((company,index) => (
                                    // <Link key={company.companyId} href={`/dashboard/${company.companyId}`}>
  
                    
                    <TableRow key={company.companyId} onClick={() => handleRowClick(`/dashboard/${company.companyId}`)} className={cn("text-[12px] text-[#615A5A] cursor-pointer", `${index % 2 === 0 ? 'bg-[#EBEBEB]' : 'bg-white'}`)}>
                      
                      <TableCell className="font-bold">
                        {company.companyName}
                      </TableCell>
                      <TableCell className="text-[12px] text-[#615A5A]">
                        {company.ticker}
                      </TableCell>
                      <TableCell>{company.marketCap}</TableCell>
                      <TableCell>{company.sector}</TableCell>
                      <TableCell className="text-right">
                        {company.industry}
                      </TableCell>
                  
                    </TableRow>
                  
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </>
    );
  }
  