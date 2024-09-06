// import { Shape } from "./shapes/shape.js";

function newRenderer(newShape: Shape) {
    return {
        draw() {
            const area: number = newShape.computeArea()
            console.log("Shape drawn\n" + "Its area is " + area)
        }
    }
}

export { newRenderer }