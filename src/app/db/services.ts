import { db } from "@/app/db";

export const getRecord = async (recordId: any) => await db.tenancyRecord.findFirst({
    where: {id: parseInt(recordId)}
  });