
type props = {
    params: {
      companyId: string;
    };
  };

type QuarterData = {
  quarter: string;
  date: string;
  link: string;
};

type EarningData = {
  year: number;
  quaterdata: QuarterData[];
};

type Company = {
  companyId: number;
  nickName: string;
  companyName: string;
  earningData: EarningData[];
};

type Companies = {
  [companyId: string]: Company;
};
const companies:Companies={
    "1":{
        companyId: 1,
        nickName: "TCS",
        companyName: "Tata Consultancy Services Ltd",
        earningData:[
            {
                year:2021,
                quaterdata:[{
                    quarter:"Q1",
                    date:"01/19/21",
                    link:"https://stockinsights-in-filings.s3.ap-south-1.amazonaws.com/earnings-transcripts/TCS-Tata_Consultancy_Services_Ltd-Earnings-FY2021-Q1.pdf"
                    }]
            },
            {
                year:2024,
                quaterdata:[{
                    quarter:"Q2",
                    date:"01/19/24",
                    link:"https://stockinsights-in-filings.s3.ap-south-1.amazonaws.com/earnings-transcripts/TCS-Tata_Consultancy_Services_Ltd-Earnings-FY2024-Q2.pdf"
                    }]
            },

        ]
    },
    "2":{
        companyId: 2,
        nickName: "RELIANCE",
        companyName: "Reliance Industries Ltd",
        earningData:[
            {
                year:2024,
                quaterdata:[
                    {
                    quarter:"Q2",
                    date:"01/19/24",
                    link:"https://stockinsights-in-filings.s3.ap-south-1.amazonaws.com/earnings-transcripts/RELIANCE-Reliance_Industries_Ltd-Earnings-FY2024-Q2.pdf"
                    },
                    {
                    quarter:"Q1",
                    date:"01/19/24",
                    link:"https://stockinsights-in-filings.s3.ap-south-1.amazonaws.com/earnings-transcripts/RELIANCE-Reliance_Industries_Ltd-Earnings-FY2024-Q1.pdf"
                    },
                ]
            },{
                year:2023,
                quaterdata:[
                    {
                    quarter:"Q4",
                    date:"01/19/23",
                    link:"https://stockinsights-in-filings.s3.ap-south-1.amazonaws.com/earnings-transcripts/RELIANCE-Reliance_Industries_Ltd-Earnings-FY2023-Q4.pdf"
                    },
                    {
                    quarter:"Q3",
                    date:"01/13/23",
                    link:"https://stockinsights-in-filings.s3.ap-south-1.amazonaws.com/earnings-transcripts/RELIANCE-Reliance_Industries_Ltd-Earnings-FY2023-Q3.pdf"
                    },
                    {
                    quarter:"Q2",
                    date:"01/12/23",
                    link:"https://stockinsights-in-filings.s3.ap-south-1.amazonaws.com/earnings-transcripts/RELIANCE-Reliance_Industries_Ltd-Earnings-FY2023-Q2.pdf"
                    },
                ]
            }

        ]
    },
    }
    





import { NextResponse,NextRequest } from "next/server";

export async function GET(req:Request,context:props) {
    const {params} = context;
    const companyId: keyof typeof companies = 1;

    // const data = await res.json();
    return NextResponse.json(companies[params.companyId]);


}