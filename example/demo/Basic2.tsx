import ReactFancyCarousel from 'react-fancy-carousel'
import useHighlight from '../useHighlight'

const ImgItem = ReactFancyCarousel.ImgItem

const codeStr = `
import ReactFancyCarousel from 'react-fancy-carousel'
import 'react-fancy-carousel/dist/style.css'
const ImgItem = ReactFancyCarousel.ImgItem

export default function () {
  return (
    <ReactFancyCarousel
      style={{ height: '500px' }}
      autoplay
      effect="fade"
      indicator="dot"
      duration={2000}
      speed={800}
    >
      <ImgItem src='/1.jpeg' width="800" height="400" />
      <ImgItem src='/2.jpeg' width="800" height="400" />
      <ImgItem src='/3.jpeg' width="800" height="400" />
      <ImgItem src='/4.jpeg' width="800" height="400" />
      <ImgItem src='/5.jpeg' width="800" height="400" />
    </ReactFancyCarousel>
  ) 
}
`

function Basic2() {
  useHighlight()

  return (<section>
    <h2>Basic use2 - Fade effect, dot indicator</h2>
    <div style={{ display: 'flex', gap: 20 }}>
      <ReactFancyCarousel
        style={{ height: '500px', flex: '1 0 500px' }}
        autoplay
        effect="fade"
        indicator="dot"
        duration={2000}
        speed={800}
      >
        <ImgItem src='/1.jpeg' width="800" height="400" />
        <ImgItem src='/2.jpeg' width="800" height="400" />
        <ImgItem src='/3.jpeg' width="800" height="400" />
        <ImgItem src='/4.jpeg' width="800" height="400" />
        <ImgItem src='/5.jpeg' width="800" height="400" />
      </ReactFancyCarousel>
      <pre style={{ flex: 1, margin: 0 }}>
        Basic2.tsx
        <code className='language-tsx'>{codeStr}</code>
      </pre>
    </div>

  </section>)
}

export default Basic2