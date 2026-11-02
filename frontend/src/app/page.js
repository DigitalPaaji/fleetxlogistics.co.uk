'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/delivery-driver-jobs-portsmouth');
  }, [router]);

  return null; // or a loader if you want
}
