import { db } from "@/app/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import { routeTo } from "@/routes";

interface DisplayRecordPageProps {
  params: {
    recordId: string
  };
}

export default async function DisplayRecordPage(props: DisplayRecordPageProps) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const record = await db.tenancyRecord.findFirst({
    where: {id: parseInt(props.params.recordId)}
  });

  if (!record) {
    notFound();
  }

  console.log(record);
  
  // const renderedRecords = records.map((record) => {
  //   return (
  //     <div key={record.id}>
  //       <h1>{record.name}</h1>
  //       <p>{record.email}</p>
  //     </div>
  //   )
  // })

    return (
      <Link key={record.id} href={routeTo.viewRecord(record.id)}>
      
        <h1>{record.name}</h1>
        <p>{record.email}</p>
      
      </Link>
    )
}


  // async function getRecord() {
  //   "use server";
  //   const id = props.id;
  //   const records = await db.createTenancyRecord.findMany();

  //   const renderedRecords = records.map((record) => {
  //     return (
  //       <div key={record.id}>
  //         <h1>{record.name}</h1>
  //         <p>{record.email}</p>
  //       </div>
  //     )
  //   });
  // }