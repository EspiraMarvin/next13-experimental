import { PrismaClient } from "@prisma/client"
import React from "react"
import IssueList from "../issues/IssueList"
import classes from "./layout.module.css"

export default async function IssuesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const prisma = new PrismaClient()
  const issues = await prisma.issue.findMany()

  return (
    <div className={classes.layout}>
      <aside className={classes.sidebar}>
        <IssueList issues={issues} />
      </aside>
      {children}
    </div>
  )
}
