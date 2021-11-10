import { reaction } from "dipole";
import { useState, useMemo, useEffect } from "fre";

import type { FC } from "fre";

const EMPTY_ARR = [];

export function observer<P>(component: FC<P>): FC<P> {
  const wrapped = (props: P) => {
    const [, triggerUpdate] = useState<any>(null);
    
    const r = useMemo(() => {
      return reaction(component, null, () => triggerUpdate({}));
    }, EMPTY_ARR);
    
    useEffect(() => {
      return () => r.destroy()
    }, EMPTY_ARR);
    
    return r.run(props);
  };
  return wrapped;
}
