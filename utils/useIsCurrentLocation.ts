import { useRouter } from 'next/router';
import { UrlObject } from 'url';

export default function useIsCurrentLocation() {
  const router = useRouter();

  return (locationToCheck: string | UrlObject) => {
    if (typeof locationToCheck === 'string') {
      return router.pathname === locationToCheck;
    } else {
      return router.pathname === locationToCheck.pathname;
    }
  };
}
