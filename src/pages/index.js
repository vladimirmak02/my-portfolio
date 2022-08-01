import * as React from 'react'
import { Link } from 'gatsby'
import '../styles/reset.scss'
import '../styles/frontPage.scss'
import '../styles/global.scss'

const IndexPage = () => {
    return (
        <main style={{}}>
            <title>Vlad's Portfolio</title>
            <h1 style={{}}>Vlad's Portfolio</h1>
            <nav>
                <Link to="/art">Art</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link className="work" to="/work">
                    Work
                </Link>
            </nav>
        </main>
    )
}

export default IndexPage
