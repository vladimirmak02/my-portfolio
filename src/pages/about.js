import * as React from 'react'
import { Link } from 'gatsby'
import '../styles/reset.scss'
import '../styles/global.scss'

function AboutPage() {
    return (
        <main>
            <h1>About</h1>
            <p>Just a person</p>
            <Link to="/">Back home</Link>
        </main>
    )
}

export default AboutPage
