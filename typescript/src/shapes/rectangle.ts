// interface Rectangle {
//     width: number,
//     height: number,
//     computeArea: () => number
// }

// function newRectangle(width: number, height: number): Rectangle {
//     return {
//         width,
//         height,

//         computeArea: function (): number {
//             return width * height
//         }
//     }
// }

// export { Rectangle, newRectangle }

// import { Shape } from "./shapes/shape.js";

class Rectangle implements Shape{
    width: number
    height: number

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    computeArea(): number {
        return this.width * this.height;
    }
}

// function NewCircle(radius: number): Shape {
//     return {
//         radius,
//         computeArea: function (): number {
//             return Math.PI * radius * radius
//         }
//     }
// }

export { Rectangle }
