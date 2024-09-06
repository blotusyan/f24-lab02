class Square implements Shape{
    sideLen: number

    constructor(sideLen: number) {
        this.sideLen = sideLen;
    }

    computeArea(): number {
        return this.sideLen * this.sideLen
    }
}

export { Square }