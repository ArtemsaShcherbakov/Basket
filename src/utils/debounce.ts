type DebouncedFunction<TArgs extends unknown[]> = (...args: TArgs) => void;

export const debounce = <TArgs extends unknown[]>(
  fn: (...args: TArgs) => void,
  delay: number = 300,
): DebouncedFunction<TArgs> => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return (...args: TArgs) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

