import { Html, Head, Main, NextScript } from 'next/document'
import { Suspense } from 'react';
import Loading from '../components/Loading';


export default function Document() {
  return (
    <Suspense fallback={<Loading />}>
      <Html lang="fr">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </Suspense>
  )
}
