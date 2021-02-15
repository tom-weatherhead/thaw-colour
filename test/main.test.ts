// thaw-colour/test/main.test.ts

'use strict';

import * as engine from '..';

test('setAlphaInColourString test', () => {
	// Arrange
	const expectedResult1 = 'rgba(50, 100, 150, 0.75)';
	const expectedResult2 = 'rgba(51, 102, 153, 0.75)';
	const expectedResult3 = 'rgba(51, 102, 154, 0.75)';

	// Act
	const actualResult1 = engine.setAlphaInColourString(
		'rgb(50, 100, 150)',
		0.75
	);
	const actualResult2 = engine.setAlphaInColourString(
		'rgba(51, 102, 153, 0.25)',
		0.75
	);
	const actualResult3 = engine.setAlphaInColourString(
		'rgba(51,102,154,0.25)',
		0.75
	);

	// Assert
	expect(actualResult1).toBe(expectedResult1);
	expect(actualResult2).toBe(expectedResult2);
	expect(actualResult3).toBe(expectedResult3);
});
