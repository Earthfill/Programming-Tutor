import { useLocation } from "react-router-dom";

export const useShowContent = () => {
  const location = useLocation();
  const { pathname } = location;

  // Define routes where Perks should be excluded
  const routesToExcludeFrom = ['/learning'];

  // Check if the current route is in routesWithoutPerks
  return !routesToExcludeFrom.includes(pathname);
};