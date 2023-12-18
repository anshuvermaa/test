export default interface earningData {
    year: number;
    quaterdata: quaterdata[];
  }

 export  interface YearCardProps {
    data: quaterdata[];
    nickName: string;
    year: string;
  }
  
 export  interface quaterdata {
    quarter:string;
    date:string;
    link:string;
  }

  export default interface companyProps {
    companyId: number;
    companyName: string;
    nickName: string;
    date:string;
    earningData:earningData[];
  }

  export interface infoProps {
    nickName: string;
    companyName: string;
    earningData:earningData[];

  }
  