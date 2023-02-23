# react-fancy-carousel [![npm](https://img.shields.io/npm/v/react-fancy-carousel.svg?style=flat-square)](https://www.npmjs.com/package/react-fancy-carousel)
- Built-in common different carousel effects and indicators.
- Support extension and customization.
- Use with react component or hooks(todo..).
- ARIA-ify, accessible to people with disabilities.
- With complete test cases.

## [Demo Page](https://jackyr.github.io/react-fancy-carousel/site/)

## Installation
```sh
npm install react-fancy-carousel --save
```

## Usage
### Component
```jsx
import Carousel from 'react-fancy-carousel'
import 'react-fancy-carousel/dist/style.css'
const Item = Carousel.Item

export default () => {
  return (
    <Carousel autoplay>
      <Item>{content1}</Item>
      <Item>{content2}</Item>
      <Item>{content3}</Item>
    </Carousel>
  )
}
```

<!-- ### Hooks
```jsx
import { useImageCarousel } from 'react-fancy-carousel'
import 'react-fancy-carousel/style.css'

export default () => {
  const imageCarousel = useImageCarousel({
    images: ['1.png', '2.png', '3.png'],
    autoplay: true,
  })
  return (
    <div>{imageCarousel}</div>
  )
}
``` -->

## Options
#### `autoplay`: boolean
Autoplay. default: false

#### `duration`: number
Autoplay time duration. default: 3000 (ms)

#### `speed`: number
Transition speed. default: 500 (ms)

#### `timingFunction`: string
Transition timing function, reference to css property 'transition-timing-function'. default: 'ease'

#### `indicator`: 'solid' | 'dot' | React.ComponentType | null
use built-in indicator or customized component, wil be hidden when set to null. default: 'solid'

#### `onChange`: (currIndex: number, prevIndex: number) => void
Active item change handler. default: () => {}

## Ref instance methods (interface RefType)
#### `next`: () => void
change to next item. default: () => {}

#### `prev`: () => void
change to prev item. default: () => {}

#### `goTo`: (index: number) => void
change to item given by index. default: () => {}

## Customized indicator component options (interface IndicatorPropsType)
#### `uid`: string
Carousel instance uid, used for ARIA

#### `itemCount`: number
Carousel item total count

#### `activeIndex`: number
Current active index

#### `duration`: number
autoplay time duration, used for animation, if autoplay=false it will be 0

#### `next`: () => void
change to next item

#### `prev`: () => void
change to prev item

#### `goTo`: (index: number) => void
change to item given by index

## Test
```sh
git clone git@github.com:jackyr/react-fancy-carousel.git
cd react-fancy-carousel
npm install
npm test
```

## Browser compatibility
Supports Chrome51+ / Edge15+ / Safari10+ / Firefox54+ / etc. ES6 environment.

## Changelog

## License
MIT