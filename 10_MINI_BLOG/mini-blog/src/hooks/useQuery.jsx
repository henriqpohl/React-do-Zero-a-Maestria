// React Hooks
import { useMemo } from "react";

// Hooks
import { useLocation } from "react-router-dom";

export function useQuery() {
  const { search } = useLocation()

  return useMemo(() => new URLSearchParams(search), [search])
}
