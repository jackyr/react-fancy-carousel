import { render, renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { classNames, useAccessibility, useUid } from '../utils';

test('test classNames', () => {
  expect(classNames()).toBe('');
  expect(classNames('a')).toBe('a');
  expect(classNames({ a: true })).toBe('a');
  expect(classNames('a', '', { b: true }, { c: false, d: true })).toBe('a b d');
});

test('test useUid', () => {
  const { result } = renderHook(() => useUid());
  const { result: another_result } = renderHook(() => useUid());
  expect(result.current).toMatch(/^[0-9a-z]{5}$/);
  expect(result.current).not.toBe(another_result.current);
});

test('test useAccessibility', async () => {
  const user = userEvent.setup()
  const { result } = renderHook(() => useAccessibility());
  const handleFocus = jest.fn();
  const handleClick = jest.fn();
  render(<div>
    <button
      role="tab"
      onKeyDown={result.current}
      onFocus={() => handleFocus(0)}
      onClick={()  => handleClick(0)}
    ></button>
    <button
      role="tab"
      onKeyDown={result.current}
      onFocus={() => handleFocus(1)}
      onClick={()  => handleClick(1)}
    ></button>
  </div>);
  await user.keyboard('{Enter} ');
  expect(handleClick).toHaveBeenCalledTimes(0);
  await user.keyboard('{Tab}');
  expect(handleFocus).toHaveBeenCalledWith(0);
  await user.keyboard('{Enter} ');
  expect(handleClick).toHaveBeenCalledWith(0);
  expect(handleClick).toHaveBeenCalledTimes(2);
  await user.keyboard('{ArrowRight}');
  expect(handleFocus).toHaveBeenCalledWith(1);
  await user.keyboard('{ArrowRight}');
  expect(handleFocus).toHaveBeenCalledWith(0);
  await user.keyboard('{ArrowLeft}');
  expect(handleFocus).toHaveBeenCalledWith(1);
  await user.keyboard('{ArrowLeft}');
  expect(handleFocus).toHaveBeenCalledWith(0);
});