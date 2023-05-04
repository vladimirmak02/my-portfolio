import { useRef, useEffect, Children } from 'react'

const useCanvas = (draw, options = {}) => {
    const canvasRef = useRef(null)

    function resizeCanvas(canvas) {
        const { width, height } = canvas.getBoundingClientRect()

        if (canvas.width !== width || canvas.height !== height) {
            const { devicePixelRatio: ratio = 1 } = window
            const context = canvas.getContext('2d')
            canvas.width = width * ratio
            canvas.height = height * ratio
            context.scale(ratio, ratio)
            return true
        }

        return false
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext(options.context || '2d')
        const children = options.children || []
        let frameCount = 0
        let lastCalledTime
        let animationFrameId
        let fps
        let delta
        const render = () => {
            resizeCanvas(canvas)
            const { width, height } = context.canvas
            context.clearRect(0, 0, width, height)
            frameCount++

            draw(context, frameCount)

            // FPS COUNTER
            if (!lastCalledTime) {
                lastCalledTime = performance.now()
                fps = 0
            }
            delta = (performance.now() - lastCalledTime) / 1000
            lastCalledTime = performance.now()
            fps = Math.floor(1 / delta)

            context.font = '12px monospace'
            context.fillStyle = '#00ff00'
            context.fillText(`${fps} fps`, 10, 12)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()
        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw, options])

    useEffect(() => {
        const children = options.children || []
        // Children.forEach(children, (child) => console.log(child.props))

        Children.forEach(children, (child) => {
            // Get the draw and update props from each child
            const { draw, update } = child.props
            console.log(child.props)
            const childArray = Children.toArray(child.props.children)
            console.log(child.props.children)
            // Call the draw function with the context
            // draw(context)
            // // Call the update function if any
            // if (update) {
            //     update()
            // }
        })
    }, [options.children])
    return canvasRef
}
export default useCanvas
