import { AppProps } from "next/app";
import { Footer } from "../components/footer";
import "../styles/globals.scss";
import NextNprogress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
      <Footer />
    </>
  );
}

export default MyApp;
