const CIRCLE_RADIUS = 180;
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 550;
const CIRCLE_ORIGIN = [
	CANVAS_WIDTH / 2,
	CANVAS_HEIGHT / 2
];

function getPointOnCircle(theta, radius) {
	let x = Math.cos(theta);
	let y = Math.sin(theta);

	return [x * radius, y * radius];

}

function degToRad(deg) {
	return deg * 0.0174533;
}      

function radToDeg(rad) {
	return rad * 57.2958;
}

function radToHSL(rad) {
	return `hsl(${Math.floor(radToDeg(rad))}, 100%, 50%)`;
}

function testFreqs() {
	let f = [];
	const scale = degToRad(360);

	for (let i=0; i<360; i++) {
		f.push(degToRad(i));
	}

	return f;
}
