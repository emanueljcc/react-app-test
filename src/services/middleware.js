import { isRejectedWithValue } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

/**
 * "If the action is rejected, log the action to the console."
 *
 * Now, let's add this to our store:
 * @returns A function that returns a function that returns a function that returns the result of
 * calling `next` with the action.
 */
export const rtkQueryErrorLogger = () => next => action => {
  if (isRejectedWithValue(action)) {
    const customId = 'custom-id-yes'

		toast.error(action.payload.error, {
			toastId: customId,
		})
    console.log(action)
  }

  return next(action)
}
