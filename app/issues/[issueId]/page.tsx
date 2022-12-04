import React from "react"
import IssueDetails from "./IssueDetails"
import { PrismaClient } from "@prisma/client"
import { wait } from "../../../utils/time"

export default async function IssueDetailsPage({ params }: any) {
  const prisma = new PrismaClient()
  const issue = await prisma.issue.findFirst({ where: { id: +params.issueId } })
  // wait() mimicks loading issue component
  //   await wait(3)

  if (!issue) {
    throw new Error("Issue not found!!")
  }

  return <IssueDetails issue={issue} />
}
