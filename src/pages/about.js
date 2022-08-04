import * as React from 'react'
import { Link } from 'gatsby'
import '../styles/reset.scss'
import '../styles/global.scss'
import '../styles/about.scss'
import '../styles/frontPage.scss'

function AboutPage() {
    return (
        <main className="spreadout frontPageMain">
            <h1>About</h1>
            <div className="centertext">
                <p>Just a person</p>
                <p>Made of the things that I consume.</p>
                <p>But it's the things that consume me that really matter.</p>
            </div>
            <div className="centertext">
                <p>Contact Me</p>
                <a href="mailto:vova@makarov.at">vova@makarov.at</a>
            </div>
            <Link to="/">Back home</Link>
        </main>
    )
}

export default AboutPage
