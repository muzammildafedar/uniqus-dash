/**
 * Safely execute a function and handle errors gracefully
 */
export const safeExecute = <T>(
  fn: () => T,
  fallback: T,
  errorMessage?: string
): T => {
  try {
    return fn()
  } catch (error) {
    if (errorMessage) {
      console.warn(errorMessage, error)
    }
    return fallback
  }
}

/**
 * Safely parse JSON with fallback
 */
export const safeJsonParse = <T>(
  jsonString: string,
  fallback: T
): T => {
  return safeExecute(
    () => JSON.parse(jsonString),
    fallback,
    'Failed to parse JSON'
  )
}

/**
 * Safely access nested object properties
 */
export const safeGet = <T>(
  obj: Record<string, unknown>,
  path: string,
  fallback: T
): T => {
  return safeExecute(
    () => {
      const result = path.split('.').reduce((current: unknown, key: string) => {
        return (current as Record<string, unknown>)?.[key]
      }, obj)
      return result !== undefined ? (result as T) : fallback
    },
    fallback,
    `Failed to access property: ${path}`
  )
}

/**
 * Create a safe async function wrapper
 */
export const createSafeAsync = <T extends unknown[], R>(
  asyncFn: (...args: T) => Promise<R>,
  onError?: (error: Error) => void
) => {
  return async (...args: T): Promise<R | null> => {
    try {
      return await asyncFn(...args)
    } catch (error) {
      const errorObj = error instanceof Error ? error : new Error(String(error))
      onError?.(errorObj)
      console.error('Async operation failed:', errorObj)
      return null
    }
  }
}