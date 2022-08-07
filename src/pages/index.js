import * as React from 'react'
import { Link } from 'gatsby'

import '../styles/reset.scss'
import '../styles/frontPage.scss'
import '../styles/global.scss'
import { Helmet } from 'react-helmet'

// await import('@google/model-viewer/dist/model-viewer')

const links = ['Art', 'About', 'Projects', 'Work']

const IndexPage = () => {
    const [artShown, setArtShown] = React.useState(0)

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
                                'model3d ' + (artShown === 0 ? 'visible' : '')
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
                                'model3d ' + (artShown === 1 ? 'visible' : '')
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
                    <div className="linkart">
                        <div
                            className={
                                'model3d ' + (artShown === 2 ? 'visible' : '')
                            }>
                            <model-viewer
                                bounds="tight"
                                src="donut.glb"
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
                    <div className="linkart">
                        <div
                            className={
                                'model3d ' + (artShown === 3 ? 'visible' : '')
                            }>
                            <model-viewer
                                bounds="tight"
                                src="laptop.glb"
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
                </div>

                {links.map((str, i) => (
                    <div className={str.toLowerCase() + ' navlink'}>
                        <button
                            className={
                                'selectArtBtn ' +
                                (artShown === i ? ' active' : '')
                            }
                            title={`Show 3D model for ${str}`}
                            onClick={(e) => {
                                setArtShown(i)
                            }}></button>
                        <Link
                            to={`/${str.toLowerCase()}`}
                            className={artShown === i ? ' active' : ''}
                            onMouseOver={(event) => {
                                setArtShown(i)
                            }}
                            key={str}>
                            {str}
                        </Link>
                    </div>
                ))}
            </nav>
        </main>
    )
}

export default IndexPage
