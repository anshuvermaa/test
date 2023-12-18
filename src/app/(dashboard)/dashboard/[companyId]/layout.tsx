import Navbar from '@/components/navbar';
import {GlobalContextProvider} from '@/context/store';

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <GlobalContextProvider>

     {children}
      </GlobalContextProvider>
    </div>
  );
}
