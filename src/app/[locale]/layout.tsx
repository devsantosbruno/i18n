import { NextIntlClientProvider, useMessages } from 'next-intl';

type LayoutType = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function LocaleLayout({
  children,
  params: { locale },
}: LayoutType) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
