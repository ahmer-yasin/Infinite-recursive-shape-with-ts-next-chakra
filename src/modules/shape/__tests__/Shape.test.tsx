/* eslint-env jest */
// import React from 'react'
import Shape from './../Shape';
import ShapeState from './../Shape';
const data = require('../testData')


describe('Shape test cases', () => {
  let instance: Shape;

  beforeEach(() => {
    instance = new Shape(ShapeState);
  });

  data.forEach(mock => {
    const args = mock.input.split(',').map(Number);
    it(`mock json render (${args})`, () => {
      const pixelArrayJson = instance.makeShape(args[0], args[1], args[2]);
      expect(JSON.stringify(pixelArrayJson)).toBe(mock.pixelArrayJson);
    });
  });
})
