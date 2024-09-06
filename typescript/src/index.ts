import { newRenderer } from "./renderer.js"
import { Rectangle } from "./shapes/rectangle.js";
import { Circle } from "./shapes/circle.js";

const rectangle: Shape = new Rectangle(2, 3)
const renderer_rectangle = newRenderer(rectangle)

const circle: Shape = new Circle(2)
const renderer_circle = newRenderer(circle)

renderer_rectangle.draw();
renderer_circle.draw();