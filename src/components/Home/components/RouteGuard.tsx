"use client";
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const RouteGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isSellerRoute = pathname?.startsWith('/seller') || pathname?.startsWith('/seller-dashboard');
    
    if (isSellerRoute) {
      const sellerData = localStorage.getItem('sellerData');
      if (!sellerData) {
        router.push('/seller');
      }
    }
  }, [pathname, router]);

  return <>{children}</>;
};

export default RouteGuard;