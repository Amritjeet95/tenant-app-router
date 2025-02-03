'use client';

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { routeTo } from "@/routes";
import { getRecord } from "@/app/db/services";
import {GET_RECORDS_KEY} from '@/tanstack-keys'
import { notFound } from "next/navigation";


export default function DisplayRecord(props: any) {

    const { data: record } = useQuery({
        queryKey: [GET_RECORDS_KEY],
        queryFn: () => getRecord(props.id)
      });

    if (!record) {
        notFound();
    }

    return (
        <Link key={record.id} href={routeTo.viewRecord(record.id)}>
            <h1>{record.name}</h1>
            <p>{record.email}</p>
        </Link>
    )
}