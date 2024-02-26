import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'pt-BR'],
  localePrefix: 'never',
  defaultLocale: 'default',
  localeDetection: true,
});

export const config = {
  matcher: ['/', '/(pt-BR|en)/:path*'],
};
