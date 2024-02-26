import { useTranslations } from 'next-intl';
import { Header } from './components/Header';

export default function Index() {
  const t = useTranslations('Index');
  return (
    <main>
      <Header />
      <h1>{t('title')}</h1>
    </main>
  );
}
