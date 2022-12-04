import React from "react"
import classes from "./IssueDetails.module.css"

type Props = {}

export default function IssueDetails({ issue }: any) {
  return (
    <article className={classes.details}>
      <header>
        <h1>{issue.title}</h1>
        <p>{issue.summary}</p>
      </header>
      <p>{issue.description}</p>
    </article>
  )
}
