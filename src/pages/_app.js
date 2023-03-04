import '@/styles/globals.css'
import Layout from "@/Layout/Layout/Layout";
import Script from 'next/script'

export default function App({Component, pageProps}) {
    return <Layout>
        <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=G-8E3J5MXEGW`}
        />

        <Script id="ga-script" strategy="lazyOnload">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8E3J5MXEGW', {
              page_path: window.location.pathname,
            });
        `}
        </Script>
            <Component {...pageProps} />
    </Layout>
}
