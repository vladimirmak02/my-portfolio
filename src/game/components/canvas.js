import React from 'react'
import useCanvas from './useCanvas'

const Canvas = (props) => {
    const { draw, options, children, ...rest } = props
    const { context, ...moreConfig } = options

    const canvasRef = useCanvas(draw, { context, children })

    return <canvas ref={canvasRef} {...rest} />
}

export default Canvas
