import Header from "@/components/Header";
import system from "@/theme";
import { Box, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={system}>
      <Box backgroundColor="background">
        <Header />
        <Box
          paddingY="12"
          paddingX="8"
          maxWidth="1400px"
          height="100vh"
          margin="auto"
        >
          <Component {...pageProps} />
        </Box>
      </Box>
    </ChakraProvider>
  );
}
