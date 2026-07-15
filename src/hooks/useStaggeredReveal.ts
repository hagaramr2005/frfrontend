import { useEffect, useState } from "react";

/** Returns true one tick after mount, used to trigger a page-load stagger sequence. */
export function useStaggeredReveal(): boolean {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const raf = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(raf);
  }, []);
  return ready;
}
