import React from "react"
import { Head, Root, Routes } from "react-static"
import { Router } from "@reach/router"
import { ThemeProvider } from "styled-components"
import Nav from "components/nav"
import Footer from "components/footer"
import theme from "./theme"
import GlobalStyle from "./theme/global"


declare global {
  interface Window {
    dataLayer: any
    jQuery: any
  }
}

if (typeof window !== `undefined`) {
  window.dataLayer = window.dataLayer || []
}

function App() {

  return (
    <Root>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X9YKVP0J02"
        ></script>

        <script>
          {`window.dataLayer = window.dataLayer || []; function gtag()
          {window.dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-X9YKVP0J02');`}
        </script>

        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/9426098.js"
        ></script>

        <script>
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '539281380731210');
            fbq('track', 'PageView');`}
        </script>
        <noscript>
          {`<img height="1" width="1"
          src="https://www.facebook.com/tr?id=539281380731210&ev=PageView
          &noscript=1"/>`}
        </noscript>
        <meta name="facebook-domain-verification" content="txze5spro8hlfhai0p6f99gdjilwa6" />

        <title>Volta-XR</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {/* <nav>
          <Link to="/">Home</Link>
        </nav> */}
        <Nav />
        <div className="content">
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
        <Footer />
      </ThemeProvider>
    </Root>
  )
}
export default App
