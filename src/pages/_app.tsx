import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { AppProps } from "next/app";
import { Layout } from "~/components/layout";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default api.withTRPC(MyApp);
