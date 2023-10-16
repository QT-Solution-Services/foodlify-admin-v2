import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import { AuthProvider } from "@/contexts/Auth.context";
import ToastContextProvider from "@/contexts/Toast.context";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000
      staleTime: 0,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={client}>
        <ReactQueryDevtools initialIsOpen={false} />
        <AuthProvider>
          <ToastContextProvider>
            <Component {...pageProps} />
          </ToastContextProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
