# react-fancy-carousel
![NPM](https://img.shields.io/npm/l/react-fancy-carousel)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/jackyr/react-fancy-carousel/pages.yml)
[![Coveralls](https://img.shields.io/coverallsCoverage/github/jackyr/react-fancy-carousel)](https://coveralls.io/github/jackyr/react-fancy-carousel?branch=main)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-fancy-carousel)
[![npm](https://img.shields.io/npm/v/react-fancy-carousel)](https://www.npmjs.com/package/react-fancy-carousel)

- Built-in common different carousel effects and indicators.
- Support extension and customization.
- ARIA-ify, accessible to people with disabilities.
- With complete test cases.

## [Demo Page](https://jackyr.github.io/react-fancy-carousel/)

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

## Options
| Name | Type | Description | Default |
| :----- | :----- | :----- | :----- |
| `autoplay` | boolean | Autoplay. | false |
| `effect` | 'slide' \| 'fade' | Change animation effect. | 'slide' |
| `duration` | number | Autoplay time duration. | 3000 (ms) |
| `speed` | number | Transition speed. | 500 (ms) |
| `timingFunction` | string | Transition timing function, reference to css property 'transition-timing-function' | 'ease' |
| `infiniteLoop` | boolean | Infinite loop. | true |
| `pauseOnHover` | boolean | Pause autoplay on hover | false |
| `indicator` | 'solid' \| 'dot' \| React.ComponentType \| null | Use built-in indicator or customized component, it will be hidden when set to null. | 'solid' |
| `onChange` |  (currIndex: number, prevIndex: number) => void | Active item change handler. | () => {} |

## Ref instance methods (interface RefType)
| Name | Type | Description |
| :----- | :----- | :----- |
| `next` | () => void | Change to next item. |
| `prev` | () => void | Change to prev item. |
| `goTo` | (index: number) => void | Change to item given by index. |

## Customized indicator component options (interface IndicatorPropsType)
| Name | Type | Description |
| :----- | :----- | :----- |
| `uid` | string | Carousel instance uid, used for ARIA. |
| `itemCount` | number | Carousel item total count. |
| `activeIndex` | number | Current active index. |
| `animation` | number | Show animation. |
| `duration` | number | Animation duration. |
| `paused` | boolean | Animation paused. |
| `next` | () => void | Change to next item. |
| `prev` | () => void | Change to prev item. |
| `goTo` | (index: number) => void | Change to item given by index. |

## Theme css vars
```css
.default {
  --indicator-bg-color: rgba(0, 0, 0, 0.4);
  --indicator-active-bg-color: #fff;

  --indicator-items-gap: 10px;
  --indicator-surround-offset: 30px;

  --indicator-dot-diameter: 10px;

  --indicator-solid-width: 40px;
  --indicator-solid-height: 3px;
  --indicator-solid-padding-y: 5px;
  --indicator-solid-border-radius: 2px;
}
```

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