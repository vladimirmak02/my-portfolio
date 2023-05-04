import React from 'react'
import './styles/reset.scss'
import './styles/skellygame.scss'
import './styles/gamecanvas.scss'
import { Helmet } from 'react-helmet'
import { useRef, useEffect, useState } from 'react'
import Upgrade from './components/upgrade'
import Canvas from './components/canvas'
import { character, Character } from './components/character'
import CustomFragment from './components/customfragment'

const Game = () => {
    const [inMenu, setInMenu] = useState(false)
    const [isEscapePressed, setIsEscapePressed] = useState(false)

    useEffect(() => {
        if (isEscapePressed) {
            setInMenu(!inMenu)
        }
    }, [isEscapePressed])

    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.font = '24px sans-serif'
        ctx.fillStyle = '#ffffff'

        character.draw(ctx, frameCount)
        ctx.fill()
    }

    return (
        <main
            tabIndex="0"
            onKeyDown={(e) => {
                if (e.key === 'Escape') {
                    setIsEscapePressed(true)
                }
            }}
            onKeyUp={(e) => {
                if (e.key === 'Escape') {
                    setIsEscapePressed(false)
                }
            }}>
            {inMenu ? (
                <Upgrade />
            ) : (
                <Canvas draw={draw} options={{ context: '2d' }}>
                    <Character />
                    <CustomFragment draw={character.draw} />
                </Canvas>
            )}
        </main>
    )
}

export default Game
