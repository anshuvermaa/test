
import PdfPage from '@/components/pdfPage';
import MainSidebar from '@/components/mainSidebar';

type Props = {
  params: {
    companyId: string;
  };
};

export default async function Company({ params: { companyId } }: Props) {
  const siteUrl=process.env.NEXT_PUBLIC_SITE_URL;
  const data = await fetch(`${siteUrl}/api/company/${companyId}`).then(res =>{return res.json()});
  if (!data) {
    throw new Error('Failed to load company');
  }
  debugger;
  return (
    <div className="flex">
      <div className='relative'>

       <MainSidebar data={data}/>
      </div>
      <div className=" w-full h-[89.8vh] pl-1.5 pr-3 pb-5   bg-[#EBEBEB] ">
      <PdfPage />
       

      </div>
    </div>
  );
}
