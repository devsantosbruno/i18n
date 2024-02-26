import { Header } from '@/app/[locale]/components/Header';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main>
      <Header />
      <h1>{t('title')}</h1>
    </main>
  );
}
