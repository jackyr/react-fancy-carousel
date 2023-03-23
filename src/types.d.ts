export interface CarouselPropsType extends Omit<JSX.IntrinsicElements['div'], ''> {
  children?: React.ReactElement | Array<React.ReactElement>;
  /**
   * @description autoplay
   * @default false
   */
  autoplay?: boolean;
  /**
   * @description change animation effect
   * @enum 'slide' | 'fade'
   * @default 'slide''
   */
  effect?: 'slide' | 'fade'
  /**
   * @description autoplay time duration
   * @unit ms
   * @default 3000
   */
  duration?: number;
  /**
   * @description transition speed
   * @unit ms
   * @default 500
   */
  speed?: number;
  /**
   * @description transition timing function
   * @enum 'linear' | 'ease' | 'ease-in'.. reference to css property 'transition-timing-function'
   * @default 'ease'
   */
  timingFunction?: string;
  /**
   * @description infinite loop
   * @default true
   */
  infiniteLoop?: boolean;
  /**
   * @description Continuous loop
   * @default false
   */
  continuousLoop?: boolean;
  /**
   * @description use built-in indicator or customized component, wil be hidden when set to null
   * @enum 'solid' | 'dot' | React.ComponentType | null
   * @default 'solid'
   */
  indicator?: 'solid' | 'dot' | React.ComponentType<IndicatorPropsType> | null;
  /**
   * @description active item change handler
   * @param currIndex current active item index
   * @param prevIndex previous active item index
   * @returns void
   * @default () => {}
   */
  onChange?: (currIndex: number, prevIndex: number) => void;
}

export interface RefType {
  /**
   * @description change to next item
   * @returns void
   */
  next: () => void;
  /**
   * @description change to previous item
   * @returns void
   */
  prev: () => void;
  /**
   * @description change to item given by index
   * @param index item index
   * @returns void
   */
  goTo: (index: number) => void;
}

export interface ItemPropsType extends Omit<JSX.IntrinsicElements['section'], ''> {
  /**
   * @description carousel instance uid, used for ARIA
   */
  uid?: string;
  /**
   * @description item index
   */
  index?: number;
  /**
   * @description active status
   */
  active?: boolean;
  /**
   * @description animation effect
   */
  effect?: 'fade' | 'none';
  /**
   * @description animation speed
   */
  speed?: number;
}

export interface IndicatorPropsType {
  /**
   * @description carousel instance uid, used for ARIA
   */
  uid: string;
  /**
   * @description carousel item total count
   */
  itemCount: number;
  /**
   * @description current active index
   */
  activeIndex: number;
  /**
   * @description show animation
   */
  animation: boolean;
  /**
   * @description animation duration
   */
  duration: number;
  /**
   * @description change to next item
   * @returns void
   */
  next: () => void;
  /**
   * @description change to previous item
   * @returns void
   */
  prev: () => void;
  /**
   * @description change to item given by index
   * @param index item index
   * @returns void
   */
  goTo: (index: number) => void;
}