import { renderHook, waitFor } from '@testing-library/react'
import { useDebounce } from '../../hooks/useDebounce'

describe('useDebounce', () => {
  it('should return the debounced value after the specified time', async () => {
    const { result } = renderHook(() => useDebounce('test', 500))
		await waitFor(() => {
			expect(result.current).toBe('test')
		});
		await waitFor(() => {
			expect(result.current).toBe('test')
		});
  })

	it('should update the debounced value when the value changes', async () => {
    const { result } = renderHook(() => useDebounce('test', 500))
    expect(result.current).toBe('test')
    expect(result.current).toBe('test')
    result.current = 'new test'
    expect(result.current).toBe('new test')
  })
})