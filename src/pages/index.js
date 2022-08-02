import * as React from 'react'
import { Link } from 'gatsby'
import '../styles/reset.scss'
import '../styles/frontPage.scss'
import '../styles/global.scss'
import darkFlower from '../images/darkflower.png'
import blurryportrait from '../images/blurryportrait.png'
import bookface from '../images/bookface.png'
import paintedbricks from '../images/paintedbricks.png'
import placeholderImg from '../images/placeholder.png'
import { Helmet } from 'react-helmet'

const links = ['Art', 'About', 'Projects', 'Work']
const linkArt = [darkFlower, blurryportrait, bookface, paintedbricks]

const IndexPage = () => {
    const [artShown, setArtShown] = React.useState(-1)

    return (
        <main style={{}}>
            <Helmet>
                <title>Vlad's Portfolio</title>
                <meta
                    name="description"
                    content="Vlad's Portfolio showing the art, projects and work I've done"
                />
                <html lang="en" />
            </Helmet>
            <h1 style={{}}>Vlad's Portfolio</h1>
            <nav className="centernav">
                <div className="linkart">
                    <img
                        src={placeholderImg}
                        alt=""
                        className={artShown === -1 ? 'visible' : ''}
                    />
                </div>
                {linkArt.map((imgsrc, i) => (
                    <div className="linkart" key={links[i]}>
                        <img
                            src={imgsrc}
                            alt=""
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
                        }}
                        key={str}>
                        {str}
                    </Link>
                ))}
            </nav>
        </main>
    )
}

export default IndexPage
