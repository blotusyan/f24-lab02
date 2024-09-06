// function square(sideLen: number): Shape {
//     return {
//         sideLen,
//         computeArea: function (): number {
//             return sideLen * sideLen
//         }
//     }
// }

class Square implements Shape{
    sideLen: number
    // computeArea: () => number

    constructor(sideLen: number) {
        this.sideLen = sideLen;
    }

    computeArea(): number {
        return this.sideLen * this.sideLen
    }
}

export { Square }