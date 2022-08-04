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

// await import('@google/model-viewer/dist/model-viewer')

const links = ['Art', 'About', 'Projects', 'Work']
const linkArt = [darkFlower, blurryportrait, bookface, paintedbricks]

const IndexPage = () => {
    const [artShown, setArtShown] = React.useState(-1)

    return (
        <main className="frontPageMain">
            <Helmet>
                <script
                    type="module"
                    src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>

                <title>Vlad's Portfolio</title>
                <meta
                    name="description"
                    content="Vlad's Portfolio showing the art, projects and work I've done"
                />
                <html lang="en" />
            </Helmet>
            <h1 style={{}}>Vlad's Portfolio</h1>

            <nav className="centernav">
                <div className="linkArtContainer">
                    <div className="linkart">
                        <div
                            className={
                                'model3d ' + (artShown === -1 ? 'visible' : '')
                            }>
                            <model-viewer
                                bounds="tight"
                                src="flower.glb"
                                ar
                                ar-modes="webxr scene-viewer quick-look"
                                auto-rotate
                                auto-rotate-delay="0"
                                interaction-prompt="none"
                                rotation-per-second="300%"
                                camera-controls
                                environment-image="sunset.hdr"
                                shadow-intensity="1"
                                style={{ backgroundcolor: 'unset' }}>
                                <div id="lazy-load-poster" slot="poster"></div>
                            </model-viewer>
                        </div>
                    </div>
                    <div className="linkart">
                        <div
                            className={
                                'model3d ' + (artShown !== -1 ? 'visible' : '')
                            }>
                            <model-viewer
                                bounds="tight"
                                src="monke.glb"
                                ar
                                ar-modes="webxr scene-viewer quick-look"
                                auto-rotate
                                auto-rotate-delay="0"
                                rotation-per-second="300%"
                                interaction-prompt="none"
                                camera-controls
                                environment-image="sunset.hdr"
                                shadow-intensity="1"
                                style={{ backgroundcolor: 'unset' }}>
                                <div id="lazy-load-poster" slot="poster"></div>
                            </model-viewer>
                        </div>
                    </div>
                    {/* {linkArt.map((imgsrc, i) => (
                        <div className="linkart" key={links[i]}>
                            <img
                                src={imgsrc}
                                alt=""
                                className={i === artShown ? 'visible' : ''}
                            />
                        </div>
                    ))} */}
                </div>

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
