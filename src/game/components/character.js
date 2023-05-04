import React from 'react'
import { useEffect } from 'react'
import CustomFragment from './customfragment'

export const character = {
    x: 50,
    y: 100,
    speed: 10,
    draw: (ctx, frameCount) => {
        let { x, y } = getCharacterCoords()
        character.x = x
        character.y = y
        // ctx.fillText(`frame count : ${frameCount} :)`, 10, 20);
        ctx.beginPath()

        ctx.arc(x, y, 10 * Math.sin(frameCount * 0.03) ** 2 + 5, 0, 2 * Math.PI)
    },
}

/* Direction key state */
const directions = {
    up: 'up',
    down: 'down',
    left: 'left',
    right: 'right',
}
const keys = {
    ArrowUp: directions.up,
    ArrowLeft: directions.left,
    ArrowRight: directions.right,
    ArrowDown: directions.down,
}
let held_directions = []

document.addEventListener('keydown', (e) => {
    let dir = keys[e.key]
    if (dir && held_directions.indexOf(dir) === -1) {
        held_directions.unshift(dir)
    }
})

document.addEventListener('keyup', (e) => {
    let dir = keys[e.key]
    let index = held_directions.indexOf(dir)
    if (index > -1) {
        held_directions.splice(index, 1)
    }
})

function getCharacterCoords() {
    let dx = 0
    let dy = 0
    let speed = character.speed
    for (let held_direction of held_directions) {
        if (held_direction === directions.right) {
            dx += speed
        }
        if (held_direction === directions.left) {
            dx -= speed
        }
        if (held_direction === directions.down) {
            dy += speed
        }
        if (held_direction === directions.up) {
            dy -= speed
        }
    }
    // Normalize diagonal speed
    let length = Math.sqrt(dx * dx + dy * dy)
    if (length > speed) {
        dx = (dx / length) * speed
        dy = (dy / length) * speed
    }
    let x = character.x + dx
    let y = character.y + dy
    return { x, y }
}

export const Character = () => {
    function handlekeydown(e) {
        let dir = keys[e.key]
        if (dir && held_directions.indexOf(dir) === -1) {
            held_directions.unshift(dir)
        }
    }
    function handlekeyup(e) {
        let dir = keys[e.key]
        let index = held_directions.indexOf(dir)
        if (index > -1) {
            held_directions.splice(index, 1)
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', handlekeydown)

        document.addEventListener('keyup', handlekeyup)
        return () => {
            document.removeEventListener('keydown', handlekeydown)
            document.removeEventListener('keyup', handlekeyup)
        }
    }, [])

    this.props = {
        draw: character.draw,
        update: 5,
    }

    return <CustomFragment draw={character.draw} update={character.update} />
}
