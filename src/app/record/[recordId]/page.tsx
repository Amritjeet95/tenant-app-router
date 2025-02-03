import { notFound } from "next/navigation";
import {GET_RECORDS_KEY} from '@/tanstack-keys'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import DisplayRecord from "@/app/components/display-record/DisplayRecord";
import { getRecord } from "@/app/db/services";


interface DisplayRecordPageProps {
  params: {
    recordId: string
  };
}

export default async function DisplayRecordPage(props: DisplayRecordPageProps) {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: [GET_RECORDS_KEY],
    queryFn: ()=> getRecord(props.params.recordId),
  })

    return (
      <HydrationBoundary state={dehydrate(queryClient)}>
          <DisplayRecord id={props.params.recordId}/>
      </HydrationBoundary>
    )
}
