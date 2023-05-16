import { useRef } from 'react';
import { act, fireEvent, render, renderHook } from '@testing-library/react';
import Carousel, { type RefType } from '../index';

test('renders Carousel component', () => {
  const { getByText } = render(<Carousel>
    <Carousel.Item>1</Carousel.Item>
    <Carousel.Item>2</Carousel.Item>
  </Carousel>);
  const element = getByText('1');
  expect(element).toBeInTheDocument();
});

test('test autoplay and duration', async () => {
  const { getAllByRole } = render(<Carousel
    autoplay
    duration={1000}
  >
    <Carousel.Item>1</Carousel.Item>
    <Carousel.Item>2</Carousel.Item>
  </Carousel>);
  const tabpanels = getAllByRole('tabpanel', {
    hidden: true,
  });
  expect(tabpanels[0]).toHaveAttribute('aria-hidden', 'false');
  expect(tabpanels[1]).toHaveAttribute('aria-hidden', 'true');
  await act(() => new Promise(resolve => setTimeout(resolve, 1000)));
  expect(tabpanels[0]).toHaveAttribute('aria-hidden', 'true');
  expect(tabpanels[1]).toHaveAttribute('aria-hidden', 'false');
});

test('test pause on hover', () => {
  jest.useFakeTimers();
  const { getAllByRole, getByRole } = render(<Carousel
    autoplay
    pauseOnHover
  >
    <Carousel.Item>1</Carousel.Item>
    <Carousel.Item>2</Carousel.Item>
  </Carousel>);
  const tabpanels = getAllByRole('tabpanel', {
    hidden: true,
  });
  const wrapper = getByRole('region');
  fireEvent.mouseEnter(wrapper);
  act(() => jest.runAllTimers());
  expect(tabpanels[0]).toHaveAttribute('aria-hidden', 'false');
  expect(tabpanels[1]).toHaveAttribute('aria-hidden', 'true');
  fireEvent.mouseLeave(wrapper);
  act(() => jest.runAllTimers());
  expect(tabpanels[0]).toHaveAttribute('aria-hidden', 'true');
  expect(tabpanels[1]).toHaveAttribute('aria-hidden', 'false');
  fireEvent.mouseEnter(wrapper);
  const targetTab = getByRole('tab', {
    selected: false,
  });
  fireEvent.click(targetTab);
  act(() => jest.runAllTimers());
  expect(tabpanels[0]).toHaveAttribute('aria-hidden', 'false');
  expect(tabpanels[1]).toHaveAttribute('aria-hidden', 'true');
});

test('test none indicator', () => {
  const { queryAllByRole } = render(<Carousel
    indicator={null}
  >
    <Carousel.Item>1</Carousel.Item>
    <Carousel.Item>2</Carousel.Item>
  </Carousel>);
  const targetTab = queryAllByRole('tab');
  expect(targetTab).toHaveLength(0);
});

test('test indicator click', () => {
  const { getByRole, container } = render(<Carousel
    effect='fade'
    indicator="dot"
  >
    <Carousel.Item>1</Carousel.Item>
    <Carousel.Item>2</Carousel.Item>
  </Carousel>);
  const targetTab = getByRole('tab', {
    selected: false,
  });
  const targetTabpanel = container.querySelector(`#${targetTab.getAttribute('aria-controls')}`);
  expect(targetTab).toHaveAttribute('aria-selected', 'false');
  expect(targetTabpanel).toHaveAttribute('aria-hidden', 'true');
  fireEvent.click(targetTab);
  expect(targetTab).toHaveAttribute('aria-selected', 'true');
  expect(targetTabpanel).toHaveAttribute('aria-hidden', 'false');
});

test('test callback function', async () => {
  const handleChange = jest.fn();
  const { getByRole } = render(<Carousel
    autoplay
    onChange={handleChange}
  >
    <Carousel.Item>1</Carousel.Item>
    <Carousel.Item>2</Carousel.Item>
  </Carousel>);
  const targetTab = getByRole('tab', {
    selected: false,
  });
  fireEvent.click(targetTab);
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(handleChange).toHaveBeenCalledWith(1, 0);
});

test('test reference method', () => {
  const { result } = renderHook(() => useRef<RefType>())
  const { getAllByRole } = render(<Carousel
    ref={result.current as any}
  >
    <Carousel.Item>1</Carousel.Item>
    <Carousel.Item>2</Carousel.Item>
  </Carousel>);
  const ref = result.current.current as RefType;
  const targetTabs = getAllByRole('tab');
  act(() => ref.next());
  expect(targetTabs[1]).toHaveAttribute('aria-selected', 'true');
  act(() => ref.next());
  expect(targetTabs[0]).toHaveAttribute('aria-selected', 'true');
  act(() => ref.prev());
  expect(targetTabs[1]).toHaveAttribute('aria-selected', 'true');
  act(() => ref.prev());
  expect(targetTabs[0]).toHaveAttribute('aria-selected', 'true');
  act(() => ref.goTo(1));
  expect(targetTabs[1]).toHaveAttribute('aria-selected', 'true');
  act(() => ref.goTo(100));
  expect(targetTabs[1]).toHaveAttribute('aria-selected', 'true');
  act(() => ref.goTo(-1));
  expect(targetTabs[1]).toHaveAttribute('aria-selected', 'true');
  act(() => ref.goTo(-100));
  expect(targetTabs[0]).toHaveAttribute('aria-selected', 'true');
});

test('test finite loop', () => {
  jest.useFakeTimers();
  const { result } = renderHook(() => useRef<RefType>())
  const { getAllByRole } = render(<Carousel
    ref={result.current as any}
    autoplay
    infiniteLoop={false}
  >
    <Carousel.Item>1</Carousel.Item>
    <Carousel.Item>2</Carousel.Item>
  </Carousel>)
  const ref = result.current.current as RefType;
  const targetTabs = getAllByRole('tab');
  expect(targetTabs[0]).toHaveAttribute('aria-selected', 'true');
  act(() => ref.prev());
  expect(targetTabs[0]).toHaveAttribute('aria-selected', 'true');
  act(() => jest.runAllTimers());
  expect(targetTabs[0]).toHaveAttribute('aria-selected', 'false');
  act(() => jest.runAllTimers());
  expect(targetTabs[0]).toHaveAttribute('aria-selected', 'false');
  act(() => ref.next());
  expect(targetTabs[0]).toHaveAttribute('aria-selected', 'false');
});