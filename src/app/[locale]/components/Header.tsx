'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export function Header() {
  const [teste, setTeste] = useState(false);
  const t = useTranslations('Index');

  return <h1>{t('title')}</h1>;
}
