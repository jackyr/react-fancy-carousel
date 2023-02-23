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
          id={`carousel-indicator-${uid}-${i}`}
          role="tab"
          aria-label={`change to page ${i + 1}`}
          aria-controls={`carousel-item-${uid}-${i}`}
          aria-selected={activeIndex === i}
          tabIndex={activeIndex === i ? 0 : -1}
          className={`${styles.indicator_item} ${activeIndex === i ? styles.active : ''}`}
          onClick={() => goTo(i)}
          onKeyDown={handleKeyDown}
        >{i + 1}</li>
      ))}
    </ul>
    <button
      type="button"
      className={styles.nextBtn}
      aria-label="change to next"
      aria-controls={`carousel-item-${uid}-${activeIndex === itemCount - 1 ? 0 : activeIndex + 1}`}
      tabIndex={0}
      onClick={prev}
    >&lt;</button>
    <button
      type="button"
      className={styles.prevBtn}
      aria-label="change to previous"
      aria-controls={`carousel-item-${uid}-${activeIndex === 0 ? itemCount - 1 : activeIndex - 1}`}
      tabIndex={0}
      onClick={next}
    >&gt;</button>
  </>);
}

export default CustomIndicator