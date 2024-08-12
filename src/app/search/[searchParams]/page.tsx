import "./recordItem.css"
import { db } from "@/app/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import { routeTo } from "@/routes";

interface SearchRecordsPageProps {
  params: {
    searchParams: string
  };
}

//Make this component with input to search for records instead of a page like "search/1" as its wrong. We already
// have "record/1" for that. Its not a real search page.
export default async function SearchRecordsPage(props: SearchRecordsPageProps) {

  const records = await db.tenancyRecord.findMany({
    where: {id: parseInt(props.params.searchParams)}
  });

  const renderedRecords = records.map((record) => <Link key={record.id} href={routeTo.viewRecord(record.id)}>
    <h1>{record.name}</h1>
    <p>{record.email}</p>
  </Link>)

  if (!records.length) {
    notFound();
  }


    return (
        <div className="recordItem">
            {renderedRecords}
        </div>
    )
}