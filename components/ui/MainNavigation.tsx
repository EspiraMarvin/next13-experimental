import React from "react"
import Link from "next/link"

import classes from "./MainNavigation.module.css"

type Props = {}

export default function MainNavigation({}: Props) {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/issues">Issues</Link>
        </li>
      </ul>
    </nav>
  )
}
