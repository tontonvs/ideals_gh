import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import type { ReactNode } from "react";

const LOAD_DURATION_MS = 2000;

interface PageLoadWrapperProps {
  skeleton: ReactNode;
  children: ReactNode;
}

export default function PageLoadWrapper({
  skeleton,
  children,
}: PageLoadWrapperProps) {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), LOAD_DURATION_MS);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (loading) {
    return <>{skeleton}</>;
  }

  return <>{children}</>;
}
