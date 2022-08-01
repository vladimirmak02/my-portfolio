import * as React from 'react'
import { Link } from 'gatsby'
import '../styles/reset.scss'
import '../styles/global.scss'
import { StaticImage } from 'gatsby-plugin-image'

function ArtPage() {
    return (
        <main>
            <h1>Art</h1>
            <StaticImage src="../images/ice2.png" />
            <Link to="/">Back home</Link>
        </main>
    )
}

export default ArtPage
