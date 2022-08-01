import * as React from 'react'
import { Link } from 'gatsby'
import '../styles/reset.scss'
import '../styles/frontPage.scss'
import '../styles/global.scss'
import { StaticImage } from 'gatsby-plugin-image'
import darkFlower from '../images/darkflower.png'
import blurryportrait from '../images/blurryportrait.png'
import bookface from '../images/bookface.png'
import paintedbricks from '../images/paintedbricks.png'

const links = ['Art', 'About', 'Projects', 'Work']
const linkArt = [darkFlower, blurryportrait, bookface, paintedbricks]

const IndexPage = () => {
    const [artShown, setArtShown] = React.useState(-1)

    return (
        <main style={{}}>
            <title>Vlad's Portfolio</title>
            <h1 style={{}}>Vlad's Portfolio</h1>
            <nav className="centernav">
                {linkArt.map((imgsrc, i) => (
                    <div className="linkart">
                        <img
                            src={imgsrc}
                            className={i === artShown ? 'visible' : ''}
                        />
                    </div>
                ))}

                {links.map((str, i) => (
                    <Link
                        to={`/${str.toLowerCase()}`}
                        className={str.toLowerCase()}
                        onMouseOver={(event) => {
                            setArtShown(i)
                        }}
                        onMouseOut={(event) => {
                            setArtShown(-1)
                        }}>
                        {str}
                    </Link>
                ))}
            </nav>
        </main>
    )
}

export default IndexPage
