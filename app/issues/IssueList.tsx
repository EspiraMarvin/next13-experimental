import React from "react"
import Link from "next/link"

type Props = {}

export default function IssueList({ issues }: any) {
  return (
    <ul>
      {issues.map((issue: any) => (
        <li key={issue.id}>
          <article>
            <h2>{issue.title}</h2>
            <p>{issue.summary}</p>
            <p>
              <Link href={`/issues/${issue.id}`}>View Details</Link>
            </p>
          </article>
        </li>
      ))}
    </ul>
  )
}
