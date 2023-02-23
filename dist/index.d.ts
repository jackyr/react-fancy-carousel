import { default as React_2 } from 'react';

declare const _default: React_2.NamedExoticComponent<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLElement>, HTMLElement>>;

export declare interface IndicatorPropsType {
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
     * @description autoplay time duration, used for animation, if autoplay==false it will be 0
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

declare const MemoizedCarousel: React_2.NamedExoticComponent<Omit<PropsType, "ref"> & React_2.RefAttributes<RefType>> & {
    readonly type: React_2.ForwardRefExoticComponent<Omit<PropsType, "ref"> & React_2.RefAttributes<RefType>>;
} & {
    Item: typeof _default;
};
export default MemoizedCarousel;

declare interface PropsType extends Omit<JSX.IntrinsicElements['div'], 'className' | 'children'> {
    className?: React.ClassAttributes;
    children?: React.ReactElement | Array<React.ReactElement>;

    /**
     * @description show default indicator
     * @default true
     */
    showIndicator?: boolean;

    /**
     * @description autoplay
     * @default false
     */
    autoplay?: boolean;

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
     * @description use built-in indicator or customized component, wil be hidden when set to null
     * @enum 'solid' | 'dot' | React.ComponentType | null
     * @default 'solid'
     */
    indicator?: 'solid' | 'dot' | React.ComponentType | null;

    /**
     * @description active item change handler
     * @param currentIndex current active item index
     * @param prevIndex previous active item index
     * @returns void
     * @default () => {}
     */
    onChange?: (currentIndex: number, prevIndex: number) => void;
}

declare interface RefType {
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

export { }
