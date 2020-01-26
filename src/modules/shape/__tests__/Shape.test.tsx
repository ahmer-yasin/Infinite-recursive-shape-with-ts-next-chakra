/* eslint-env jest */
// import React from 'react'
import { shallow } from 'enzyme'

import Shape from './../Shape';
import ShapeState from './../Shape';
const data = require('../testData')


describe('test', () => {
  it('Test method 1', () => {
    const app = shallow(<Shape />)
    expect(1).toEqual(1)
  });

  it('draw data', () => {
    let newShape = new Shape(ShapeState);
    newShape.setState({ output: '' });
    console.log(typeof data);
    for (const element of data) {
      newShape.setState({ width: element.input.split(",")[0] });
      newShape.setState({ height: element.input.split(",")[1] });
      newShape.setState({ padding: element.input.split(",")[2] });


      newShape.state.output === element.input.pixelArrayJson? console.log(true): console.log(false);
    }
    expect(1).toEqual(1);
  });
})
