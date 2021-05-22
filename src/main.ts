// thaw-colour/src/main.ts

'use strict';

// From Bootstrap (bootstrap.css) :

// :root {
// 	--blue: #007bff;
// 	--indigo: #6610f2;
// 	--purple: #6f42c1;
// 	--pink: #e83e8c;
// 	--red: #dc3545;
// 	--orange: #fd7e14;
// 	--yellow: #ffc107;
// 	--green: #28a745;
// 	--teal: #20c997;
// 	--cyan: #17a2b8;
// 	--white: #fff;
// 	--gray: #6c757d;
// 	--gray-dark: #343a40;
// 	--primary: #007bff;
// 	--secondary: #6c757d;
// 	--success: #28a745;
// 	--info: #17a2b8;
// 	--warning: #ffc107;
// 	--danger: #dc3545;
// 	--light: #f8f9fa;
// 	--dark: #343a40;
// }

// From Chart.js :

const chartJsColours: Record<string, number[]> = {
	aliceblue: [240, 248, 255],
	antiquewhite: [250, 235, 215],
	aqua: [0, 255, 255],
	aquamarine: [127, 255, 212],
	azure: [240, 255, 255],
	beige: [245, 245, 220],
	bisque: [255, 228, 196],
	black: [0, 0, 0], // *
	blanchedalmond: [255, 235, 205],
	blue: [0, 0, 255], // *
	blueviolet: [138, 43, 226],
	brown: [165, 42, 42],
	burlywood: [222, 184, 135],
	cadetblue: [95, 158, 160],
	chartreuse: [127, 255, 0],
	chocolate: [210, 105, 30], // *
	coral: [255, 127, 80],
	cornflowerblue: [100, 149, 237],
	cornsilk: [255, 248, 220],
	crimson: [220, 20, 60],
	cyan: [0, 255, 255], // *
	darkblue: [0, 0, 139],
	darkcyan: [0, 139, 139],
	darkgoldenrod: [184, 134, 11],
	darkgray: [169, 169, 169],
	darkgreen: [0, 100, 0],
	darkgrey: [169, 169, 169],
	darkkhaki: [189, 183, 107],
	darkmagenta: [139, 0, 139],
	darkolivegreen: [85, 107, 47],
	darkorange: [255, 140, 0],
	darkorchid: [153, 50, 204],
	darkred: [139, 0, 0],
	darksalmon: [233, 150, 122],
	darkseagreen: [143, 188, 143],
	darkslateblue: [72, 61, 139],
	darkslategray: [47, 79, 79],
	darkslategrey: [47, 79, 79],
	darkturquoise: [0, 206, 209],
	darkviolet: [148, 0, 211],
	deeppink: [255, 20, 147],
	deepskyblue: [0, 191, 255],
	dimgray: [105, 105, 105],
	dimgrey: [105, 105, 105],
	dodgerblue: [30, 144, 255],
	firebrick: [178, 34, 34],
	floralwhite: [255, 250, 240],
	forestgreen: [34, 139, 34],
	fuchsia: [255, 0, 255],
	gainsboro: [220, 220, 220],
	ghostwhite: [248, 248, 255],
	gold: [255, 215, 0], // *
	goldenrod: [218, 165, 32],
	gray: [128, 128, 128],
	green: [0, 128, 0], // *
	greenyellow: [173, 255, 47],
	grey: [128, 128, 128],
	honeydew: [240, 255, 240],
	hotpink: [255, 105, 180],
	indianred: [205, 92, 92],
	indigo: [75, 0, 130],
	ivory: [255, 255, 240],
	khaki: [240, 230, 140],
	lavender: [230, 230, 250],
	lavenderblush: [255, 240, 245],
	lawngreen: [124, 252, 0],
	lemonchiffon: [255, 250, 205],
	lightblue: [173, 216, 230],
	lightcoral: [240, 128, 128],
	lightcyan: [224, 255, 255],
	lightgoldenrodyellow: [250, 250, 210],
	lightgray: [211, 211, 211],
	lightgreen: [144, 238, 144],
	lightgrey: [211, 211, 211],
	lightpink: [255, 182, 193],
	lightsalmon: [255, 160, 122],
	lightseagreen: [32, 178, 170],
	lightskyblue: [135, 206, 250],
	lightslategray: [119, 136, 153],
	lightslategrey: [119, 136, 153],
	lightsteelblue: [176, 196, 222],
	lightyellow: [255, 255, 224],
	lime: [0, 255, 0], // *
	limegreen: [50, 205, 50],
	linen: [250, 240, 230],
	magenta: [255, 0, 255], // *
	maroon: [128, 0, 0],
	mediumaquamarine: [102, 205, 170],
	mediumblue: [0, 0, 205],
	mediumorchid: [186, 85, 211],
	mediumpurple: [147, 112, 219],
	mediumseagreen: [60, 179, 113],
	mediumslateblue: [123, 104, 238],
	mediumspringgreen: [0, 250, 154],
	mediumturquoise: [72, 209, 204],
	mediumvioletred: [199, 21, 133],
	midnightblue: [25, 25, 112],
	mintcream: [245, 255, 250],
	mistyrose: [255, 228, 225],
	moccasin: [255, 228, 181],
	navajowhite: [255, 222, 173],
	navy: [0, 0, 128],
	oldlace: [253, 245, 230],
	olive: [128, 128, 0],
	olivedrab: [107, 142, 35],
	orange: [255, 165, 0], // *
	orangered: [255, 69, 0],
	orchid: [218, 112, 214],
	palegoldenrod: [238, 232, 170],
	palegreen: [152, 251, 152],
	paleturquoise: [175, 238, 238],
	palevioletred: [219, 112, 147],
	papayawhip: [255, 239, 213],
	peachpuff: [255, 218, 185],
	peru: [205, 133, 63],
	pink: [255, 192, 203],
	plum: [221, 160, 221],
	powderblue: [176, 224, 230],
	purple: [128, 0, 128], // *
	rebeccapurple: [102, 51, 153],
	red: [255, 0, 0], // *
	rosybrown: [188, 143, 143],
	royalblue: [65, 105, 225],
	saddlebrown: [139, 69, 19],
	salmon: [250, 128, 114],
	sandybrown: [244, 164, 96],
	seagreen: [46, 139, 87],
	seashell: [255, 245, 238],
	sienna: [160, 82, 45],
	silver: [192, 192, 192],
	skyblue: [135, 206, 235],
	slateblue: [106, 90, 205],
	slategray: [112, 128, 144],
	slategrey: [112, 128, 144],
	snow: [255, 250, 250],
	springgreen: [0, 255, 127],
	steelblue: [70, 130, 180],
	tan: [210, 180, 140],
	teal: [0, 128, 128],
	thistle: [216, 191, 216],
	tomato: [255, 99, 71],
	transparent: [0, 0, 0, 0], // * (copied to our list below)
	turquoise: [64, 224, 208],
	violet: [238, 130, 238],
	wheat: [245, 222, 179],
	white: [255, 255, 255], // *
	whitesmoke: [245, 245, 245],
	yellow: [255, 255, 0], // *
	yellowgreen: [154, 205, 50]
};

// **** BEGIN: 4-bit (VGA?) palette ****

// This array enforces the order of the colours in the palette.

export const fourBitPaletteColourNames = [
	'Black',
	'Maroon',
	'Green',
	'Olive',
	'Navy',
	'Purple',
	'Teal',
	'Silver',
	'Grey',
	'Red',
	'Lime',
	'Yellow',
	'Blue',
	'Fuchsia',
	'Aqua',
	'White'
];

export const fourBitPalette: Record<string, string> = {
	Black: '#000000',
	Maroon: '#800000',
	Green: '#008000',
	Olive: '#808000',
	Navy: '#000080',
	Purple: '#800080',
	Teal: '#008080',
	Silver: '#c0c0c0',
	Grey: '#808080',
	Red: '#ff0000',
	Lime: '#00ff00',
	Yellow: '#ffff00',
	Blue: '#0000ff',
	Fuchsia: '#ff00ff',
	Aqua: '#00ffff',
	White: '#ffffff'
};

// **** END: 4-bit (VGA?) palette ****

/*
const transparent = 'rgba(0, 0, 0, 0)';

// type rgbTriplet = [number, number, number];
export type rgbTriplet = number[];

// const rgbColours = {
// 	cyan: chartJsColours.cyan
// };

export const rgbColours = new Map<string, rgbTriplet>();

rgbColours.set('black', chartJsColours.black);
rgbColours.set('blue', chartJsColours.blue);
rgbColours.set('chocolate', chartJsColours.chocolate);
rgbColours.set('cyan', chartJsColours.cyan);
rgbColours.set('green', chartJsColours.green);
rgbColours.set('lime', chartJsColours.lime);
rgbColours.set('magenta', chartJsColours.magenta);
rgbColours.set('orange', chartJsColours.orange);
rgbColours.set('purple', chartJsColours.purple);
rgbColours.set('red', chartJsColours.red);
rgbColours.set('white', chartJsColours.white);
rgbColours.set('yellow', chartJsColours.yellow);
// rgbColours.set('', chartJsColours.);
 */

// const selectedChartJsColourNames = [
// 	'cyan',
// 	'',
// ];

// for (const colourName of selectedChartJsColourNames) {
// 	rgbColours.set(colourName, chartJsColours[colourName]);
// }

export function getRGBString(colourName: string): string {
	// const triplet = rgbColours.get(colourName);
	const triplet = chartJsColours[colourName];
	// const triplet = Colours.get[colourName];

	if (typeof triplet === 'undefined') {
		throw new Error(
			`thaw-colour: getRGBString('${colourName}') : Colour not found.`
		);
	}

	// return `rgb(${triplet.join()})`;

	switch (triplet.length) {
		case 3:
			return `rgb(${triplet.join()})`;

		case 4:
			return `rgba(${triplet.join()})`;

		default:
			throw new Error(
				`thaw-colour: getRGBString('${colourName}') : Illegal length ${triplet.length} of triplet ${triplet}.`
			);
	}
}

export function getRGBAString(colourName: string, alpha: number): string {
	// const triplet = rgbColours.get(colourName);
	const triplet = chartJsColours[colourName];
	// const triplet = Colours.get[colourName];

	if (typeof triplet === 'undefined') {
		throw new Error(
			`thaw-colour: getRGBAString('${colourName}') : Colour not found.`
		);
	} else if (triplet.length !== 3) {
		throw new Error(
			`thaw-colour: getRGBAString('${colourName}') : Illegal length ${triplet.length} of triplet ${triplet}.`
		);
	}

	return `rgba(${triplet.join()}, ${alpha})`;
}

const selectedChartJsColours = [
	'black',
	'blue',
	'chocolate',
	'cyan',
	'gold',
	'green',
	'lime',
	'magenta',
	'orange',
	'purple',
	'red',
	'transparent',
	'white',
	'yellow'
];

export const Colours: Record<string, string> = {
	// black: getRGBString('black'),
	// blue: getRGBString('blue'),
	// chocolate: getRGBString('chocolate'),
	// cyan: getRGBString('cyan'),
	// green: getRGBString('green'),
	// lime: getRGBString('lime'),
	// magenta: getRGBString('magenta'),
	// orange: getRGBString('orange'),
	// purple: getRGBString('purple'),
	// red: getRGBString('red'),
	// transparent: 'rgba(0, 0, 0, 0)',
	// white: getRGBString('white'),
	// yellow: getRGBString('yellow')
};

for (const colourName of selectedChartJsColours) {
	Colours[colourName] = getRGBString(colourName);
}

export function setAlphaInColourString(
	colourString: string,
	alpha: number
): string {
	// const defaultResult = '';
	// const defaultResult = colourString;
	const defaultResult = Colours.black;
	// const defaultResult = Colours.transparent;
	const regexRGB =
		'^rgb\\(([0-9]{1,3}),\\s*([0-9]{1,3}),\\s*([0-9]{1,3})\\)$';
	const regexRGBA =
		'^rgba\\(([0-9]{1,3}),\\s*([0-9]{1,3}),\\s*([0-9]{1,3}),\\s*[.0-9]+\\)$';
	const match = colourString.match(regexRGB) || colourString.match(regexRGBA);

	return match
		? `rgba(${match[1]}, ${match[2]}, ${match[3]}, ${alpha})`
		: defaultResult;
}
