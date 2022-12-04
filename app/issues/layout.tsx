import React from "react"
import IssueList from "../issues/IssueList"
import classes from "./layout.module.css"

export default function IssuesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={classes.layout}>
      <aside className={classes.sidebar}>
        <IssueList issues={[]} />
      </aside>
      {children}
    </div>
  )
}
