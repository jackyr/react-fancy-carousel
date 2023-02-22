export interface PropsType {
  uid: string;
  itemCount: number;
  activeIndex: number;
  duration: number;
  goTo: (index: number) => void
}