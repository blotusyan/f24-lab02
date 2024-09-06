import { newRenderer } from "./renderer.js"
import { Rectangle } from "./shapes/rectangle.js";
import { Circle } from "./shapes/circle.js";
import { Square } from "./shapes/square.js";

const rectangle: Shape = new Rectangle(2, 3)
const circle: Shape = new Circle(2)
const square: Shape = new Square(2)

const renderer_rectangle = newRenderer(rectangle)
renderer_rectangle.draw();

const renderer_circle = newRenderer(circle)
renderer_circle.draw();

const renderer_square = newRenderer(square)
renderer_square.draw();