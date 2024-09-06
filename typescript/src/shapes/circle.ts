class Circle implements Shape{
    radius: number

    constructor(radius: number) {
        this.radius = radius;
    }

    computeArea(): number {
        return Math.PI * this.radius * this.radius
    }
}

export { Circle }
