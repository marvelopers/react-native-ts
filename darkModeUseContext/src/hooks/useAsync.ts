// 리액트 훅 함수의 콜백 함수에는 async 함수를 사용하지 못한다.

import { useCallback, useEffect, useState } from "react"

export const useAsync = <T>(asyncCallback: () => Promise<T>, deps: any[] = []): [Error | null, () => void] => {
  const [error, setError] = useState<Error | null>(null);
  const resetError = useCallback(() => setError((notUsed) => null), []);
  useEffect(() => {
    asyncCallback().catch(setError)
  }, deps)

  return [error, resetError]
}