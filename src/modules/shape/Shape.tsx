import React from 'react';
import {
  Input,
  FormLabel,
  Button,
  Grid,
  Box,
  Flex,
  FormControl,
  Heading
} from '@chakra-ui/core';

export interface ShapeProps { }

export interface ShapeState {
  width: number,
  height: number,
  padding: number,
  output: string
}

export default class Shape extends React.Component<ShapeProps, ShapeState> {
  constructor(props: ShapeProps) {
    super(props)
    this.state = {
      output: '',
      width: 120,
      height: 40,
      padding: 4
    };
  }

  public drawShape = () => {
    const { width, height, padding } = this.state;
    // Check for not allowing user to voilate padding rule
    if (padding % 2 !== 0 || padding < 4 || padding > 60) {
      alert(`Padding value should be even and greater or equal to 4 and less than or equal 60, ${padding} given`)
      return;
    }

    // Check for not allowing user to voilate height rule
    if (height % 2 !== 0 || height < 20 || height > 300) {
      alert(`Height value should be even and greater or equal to 20 and less than or equal 300 ${height} given`)
      return;
    }

    // Check for not allowing user to voilate width rule
    if (width % 2 !== 0 || width < 20 || width > 300) {
      alert(`Width value should be even and greater or equal to 20 and less than or equal 300 ${width} given`)
      return;
    }

    // this metod gives you the cordinates 2D array
    const pixelArray = this.makeShape(+width, +height, +padding);

    // we used pre selector for diplaying shapes

    // the final output of shapes goes from this line by looping all rows
    const output = pixelArray.map(row =>
      row.map((item, index) => (index === 0 || index === row.length - 1) ? "|" : " -|"[item]).join``).join`\n`;
    this.setState({ output });
    console.log(output);

  };

  // recursive method for making shapes row
  public makeShape = (width: number, height: number, padding:number) => {
    if (width <= padding || height <= padding) {
      if (width <= 0 || height <= 0) return [];
      if (height < 2) return [Array(width).fill(1)];
      return [
        Array(width).fill(1),
        ...Array.from({ length: height - 2 }, () => width < 2 ? [2] : [2, ...Array(width - 2).fill(0), 2]),
        Array(width).fill(1),
      ];
    }
    return [
      Array(width).fill(1),
      ...Array.from({ length: padding >> 1 }, () => [2, ...Array(width - 2).fill(0), 2]),
      ...this.makeShape(width - padding - 2, height - padding - 2, padding).map((row) =>
        [2, ...Array(padding >> 1).fill(0), ...row, ...Array(padding >> 1).fill(0), 2]
      ),
      ...Array.from({ length: padding >> 1 }, () => [2, ...Array(width - 2).fill(0), 2]),
      Array(width).fill(1)
    ];
  };

  handleOnChange = (key: string, value: number) => {
    switch (key) {
      case 'width':
        this.setState({ "width": value })
        break;
      case 'height':
        this.setState({ "height": value })
        break;
      case 'padding':
        this.setState({ "padding": value })
        break;

      default:
        break;
    }
  }

  componentDidMount() {
    this.drawShape();
  }
  render() {
    return (
      <Flex direction="column">
        <Grid templateColumns="repeat(4, 1fr)" gap={20}>
          <Box>  <FormLabel>Width</FormLabel>
            <Input value={this.state.width} onChange={(e) => this.handleOnChange('width', Number(e.target.value))} /> </Box>
          <Box > <FormLabel>Height</FormLabel>
            <Input value={this.state.height}
              onChange={(e) => this.handleOnChange('height', Number(e.target.value))}
            /></Box>
          <Box> <FormLabel>Padding</FormLabel>
            <Input value={this.state.padding}
              onChange={(e) => this.handleOnChange('padding', Number(e.target.value))}
            /></Box>
          <Box>
            <FormControl>
              <Button mt="5.5%" variantColor="green" onClick={this.drawShape}>Submit</Button>
            </FormControl>
          </Box>
        </Grid>
        <Grid templateColumns="repeat(1, 1fr)">
          <Heading as="h3" size="lg"> Shape</Heading>
          <Box>
            <pre>
              {this.state.output}
            </pre>
          </Box>
        </Grid>
      </Flex>
    )
  }
}
