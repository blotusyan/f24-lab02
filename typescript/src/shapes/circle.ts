// import { Shape } from "./shapes/shape.js";

class Circle implements Shape{
    radius: number
    // computeArea: () => number

    constructor(radius: number) {
        this.radius = radius;
    }

    computeArea(): number {
        return Math.PI * this.radius * this.radius
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

export { Circle }
