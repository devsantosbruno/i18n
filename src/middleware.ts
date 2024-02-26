import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'pt-BR'],

  defaultLocale: 'en',
  localePrefix: 'never',
});

export const config = {
  matcher: ['/', '/(pt-BR|en)/:path*'],
};
