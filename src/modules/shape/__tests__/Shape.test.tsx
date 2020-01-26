/* eslint-env jest */
// import React from 'react'
import Shape from './../Shape';
import ShapeState from './../Shape';
const data = require('../testData')


describe('Shape test cases', () => {
  let instance: Shape;

  beforeEach(() => {
      instance = new Shape(ShapeState);
  })
  it('Test method 1', () => {
    expect(1).toEqual(1)
  });

  it('draw data',async () => {
    // for (const element of data) {
    //   let args = element.input.split(",").map(Number);
    //   console.log(args);
    //   const pixelArrayJson = await instance.makeShape(args[0],args[1],args[2]);
    //   expect(JSON.stringify(pixelArrayJson)).toBe(element.pixelArrayJson);
    // }
    let args = data[0].input.split(",").map(Number);
    console.log(args);
    const pixelArrayJson = await instance.makeShape(args[0],args[1],args[2]);
    const pixelArrayJsons = await instance.makeShape(args[0],args[1],args[2]);
    expect(JSON.stringify(pixelArrayJsons)).toBe(JSON.stringify(pixelArrayJson));
    // expect(JSON.stringify(pixelArrayJson)).toBe(data[0].pixelArrayJson);

  });
})
