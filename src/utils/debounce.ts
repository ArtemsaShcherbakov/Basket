type AnyFunction = (...args: any[]) => void;

type DebouncedFunction<F extends AnyFunction> = (
  ...args: Parameters<F>
) => void;

export const debounce = <F extends AnyFunction>(
  fn: F,
  delay: number = 300,
): DebouncedFunction<F> => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return (...args: Parameters<F>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

