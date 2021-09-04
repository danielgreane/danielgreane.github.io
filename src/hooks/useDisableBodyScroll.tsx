import { useEffect } from 'react';

const useDisableBodyScroll = (open: boolean) => {
  useEffect(() => {
    const root = document.querySelector('html') as HTMLElement
    if (open) {
      root.style.overflow = "hidden"
    } else {
      root.style.overflow = ""
    }
  }, [open]);
};

export default useDisableBodyScroll
