'use client';

import { useParams } from 'next/navigation';

export type Locale = 'en' | 'de';

export function useLocale(): Locale {
  const params = useParams<{ locale: string }>();

  return params.locale === 'de' ? 'de' : 'en';
}
