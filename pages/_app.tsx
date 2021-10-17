import "../styles/app.scss";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Toaster } from "react-hot-toast";
import { queryClient } from "api";
import "draft-js/dist/Draft.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster position="bottom-center" />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
