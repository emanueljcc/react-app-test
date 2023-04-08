import { useState, useEffect } from 'react'

/**
 * The useDebounce function returns a debounced value that is updated after a specified number of
 * milliseconds.
 * @param value - The value that needs to be debounced. It could be any data type such as a string,
 * number, object, or array.
 * @param milliSeconds - The milliSeconds parameter integer
 * @returns The `useDebounce` hook returns the `debouncedValue`.
 */
export const useDebounce = (value, milliSeconds) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, milliSeconds)

    return () => {
      clearTimeout(handler)
    }
  }, [value, milliSeconds])

  return debouncedValue
}
