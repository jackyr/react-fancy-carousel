import ReactFancyCarousel from 'react-fancy-carousel'
import useHighlight from '../useHighlight'
import CustomIndicator from './CustomIndicator'

const Item = ReactFancyCarousel.Item

const codeStr = `
import ReactFancyCarousel from 'react-fancy-carousel'
import 'react-fancy-carousel/dist/style.css'
import CustomIndicator from './CustomIndicator.tsx'
const Item = ReactFancyCarousel.Item

export default function () {
  return (
    <ReactFancyCarousel
      style={{ height: '500px' }}
      infiniteLoop={false}
      indicator={CustomIndicator}
    >
      <Item style={{ backgroundColor: '#eee' }}>1</Item>
      <Item style={{ backgroundColor: '#bbb' }}>2</Item>
      <Item style={{ backgroundColor: '#999' }}>3</Item>
      <Item style={{ backgroundColor: '#666' }}>4</Item>
      <Item style={{ backgroundColor: '#333' }}>5</Item>
    </ReactFancyCarousel>
  ) 
}
`

const codeStr2 = `
import { useAccessibility, type IndicatorPropsType } from 'react-fancy-carousel'
import styles from './CustomIndicator.module.css'

const CustomIndicator: React.FC<IndicatorPropsType> = ({
  uid,
  itemCount,
  activeIndex,
  next,
  prev,
  goTo,
}) => {
  const handleKeyDown = useAccessibility()
  
  return (<>
    <ul
      className={styles.indicator}
      role="tablist"
    >
      {Array.from({ length: itemCount }).map((_, i) => (
        <li
          key={i}
          id={\`carousel-indicator-\${uid}-\${i}\`}
          role="tab"
          aria-label={\`change to page \${i + 1}\`}
          aria-controls={\`carousel-item-\${uid}-\${i}\`}
          aria-selected={activeIndex === i}
          tabIndex={activeIndex === i ? 0 : -1}
          data-active={activeIndex === i}
          className={styles.indicator_item}
          onClick={() => goTo(i)}
          onKeyDown={handleKeyDown}
        >{i + 1}</li>
      ))}
    </ul>
    <button
      type="button"
      className={styles.prevBtn}
      aria-label="change to previous"
      aria-controls={\`carousel-item-\${uid}-\${
        activeIndex === 0 ? 0 : activeIndex - 1
      }\`}
      aria-disabled={activeIndex === 0}
      disabled={activeIndex === 0}
      tabIndex={0}
      onClick={prev}
    >&lt;</button>
    <button
      type="button"
      className={styles.nextBtn}
      aria-label="change to next"
      aria-controls={\`carousel-item-\${uid}-\${
        activeIndex === itemCount - 1 ? itemCount - 1 : activeIndex + 1
      }\`}
      aria-disabled={activeIndex === itemCount - 1}
      disabled={activeIndex === itemCount - 1}
      tabIndex={0}
      onClick={next}
    >&gt;</button>
  </>);
}

export default CustomIndicator
`

const codeStr3 = `
.indicator {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  position: absolute;
  bottom: 30px;
}

.indicator_item {
  width: 20px;
  height: 20px;
  border-radius: 2px;
  font-size: 14px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.indicator_item[data-active=true] {
  color: #000;
  background-color: #fff;
}

.prevBtn, .nextBtn {
  position: absolute;
  left: 20px;
  top: 50%;
  bottom: 50%;
  width: 20px;
  height: 50px;
  border-radius: 2px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  border: none;
  transform: translate(0, -50%);
  cursor: pointer;
}

.prevBtn:disabled, .nextBtn:disabled {
  background-color: rgba(0, 0, 0, 0.1);
  cursor: default;
}

.nextBtn {
  left: auto;
  right: 20px;
}
`

function Custom() {
  useHighlight()

  return (<section>
    <h2>Custom indicator component</h2>
    <div style={{ display: 'flex', gap: 30 }}>
      <ReactFancyCarousel
        style={{ height: '500px', flex: '1 0 500px' }}
        infiniteLoop={false}
        indicator={CustomIndicator}
      >
        <Item style={{ backgroundColor: '#eee' }}>1</Item>
        <Item style={{ backgroundColor: '#bbb' }}>2</Item>
        <Item style={{ backgroundColor: '#999' }}>3</Item>
        <Item style={{ backgroundColor: '#666' }}>4</Item>
        <Item style={{ backgroundColor: '#333' }}>5</Item>
      </ReactFancyCarousel>
      <pre style={{ flex: 1, margin: 0 }}>
        Custom.tsx
        <code className='language-tsx'>{codeStr}</code>
        <br />
        CustomIndicator.tsx
        <code className='language-tsx'>{codeStr2}</code>
        <br />
        CustomIndicator.module.css
        <code className='language-css'>{codeStr3}</code>
      </pre>
    </div>
  </section>)
}

export default Custom