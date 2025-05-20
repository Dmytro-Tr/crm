'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/button';

export default function DachboardButton() {
  const router = useRouter();
  return (
    <Button onClick={() => router.push('/dashboard', { scroll: false })}>
      Go to Dashboard
    </Button>
  );
}
