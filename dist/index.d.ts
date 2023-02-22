import { default as React_2 } from 'react';

declare const _default: React_2.NamedExoticComponent<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLElement>, HTMLElement>>;

export declare interface IndicatorPropsType {
    uid: string;
    itemCount: number;
    activeIndex: number;
    duration: number;
    goTo: (index: number) => void
}

declare const MemoizedCarousel: React_2.NamedExoticComponent<Omit<PropsType, "ref"> & React_2.RefAttributes<RefType>> & {
    readonly type: React_2.ForwardRefExoticComponent<Omit<PropsType, "ref"> & React_2.RefAttributes<RefType>>;
} & {
    Item: typeof _default;
};
export default MemoizedCarousel;

declare interface PropsType {
    uid: string;
    itemCount: number;
    activeIndex: number;
    duration: number;
    goTo: (index: number) => void
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
     * @returns void
     */
    goTo: (index: number) => void;
}

export { }
