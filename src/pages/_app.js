import "../styles/globals.css";
import { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { tokenAuthFetchMiddleware } from "@strata-foundation/web3-token-auth";
import { getToken } from "../utils";
import generalConfig from "../configs/general.config";
import utilConfig from "../configs/util.config"
import Head from "next/head";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const App = ({ Component, pageProps }) => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork[utilConfig.cluster];

  // You can also provide a custom RPC endpoint.
  const endpoint = utilConfig.httpRPC;

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
      new SolletWalletAdapter({ network }),
      new SolletExtensionWalletAdapter({ network }),
    ],
    [network]
  );

  const connectionConfig = {
      commitment: "confirmed",
      fetchMiddleware: tokenAuthFetchMiddleware({
        tokenExpiry: 180000,
        getToken,
      }),
    };

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        {/* <!-- Primary Meta Tags --> */}
        <title>Duppies</title>
        <meta name="title" content={`Duppies`} />
        <meta
          name="description"
          content={`Duppies: A new NFT project from the team that brought you DeGods`}
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://${generalConfig.baseUrl}`} />
        <meta property="og:title" content={`Duppies`} />
        <meta
          property="og:description"
          content={`Duppies: A new NFT project from the team that brought you DeGods`}
        />
        <meta
          property="og:image"
          content={`https://duppies.com/images/metaImagev2.jpg?v=1`}
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://${generalConfig.baseUrl}`} />
        <meta property="twitter:title" content={`Duppies`} />
        <meta
          property="twitter:description"
          content={`Duppies: A new NFT project from the team that brought you DeGods`}
        />
        <meta
          property="twitter:image"
          content={`https://duppies.com/images/metaImagev2.jpg?v=1`}
        />
      </Head>
      <ConnectionProvider endpoint={endpoint} config={connectionConfig}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <Component {...pageProps} />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
      <Toaster />
      {/* StatusPage Popup */}
      <Script src="https://vczh4gd7bl1x.statuspage.io/embed/script.js"></Script>
    </>
  );
};

export default App;
