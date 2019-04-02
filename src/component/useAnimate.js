import { useEffect, useState } from "react";

const useAnimate = animateFn => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    animateFn();
    setShow(true);
  }, [animateFn]);
  return [show];
};
export default useAnimate;
