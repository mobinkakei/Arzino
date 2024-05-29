import { WalletAdapterNetwork, WalletError } from "@solana/wallet-adapter-base";
import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider as ReactUIWalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { Cluster, clusterApiUrl } from "@solana/web3.js";
import { FC, ReactNode, useCallback, useMemo } from "react";
import { AutoConnectProvider, useAutoConnect } from "./AutoConnectProvider";
import { notify } from "../utils/notifications";
import {
    NetworkConfigurationProvider,
    useNetworkConfiguration,
} from "./NetworkConfigurationProvider";

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const { autoConnect } = useAutoConnect();
    const { networkConfiguration } = useNetworkConfiguration();
    const network = networkConfiguration as WalletAdapterNetwork;
    // Debug
    const OrginalEndPoint = useMemo(() => clusterApiUrl(network), [network]);
    let endpoint;
    // Debug
    if (network == "mainnet-beta") {
        endpoint = "https://solana-mainnet.g.alchemy.com/v2/MVw-iY5g3wVG5yiMm0qTXOjvptloQcWI";
    } else if (network == "devnet") {
        endpoint = OrginalEndPoint;
    } else {
        endpoint = OrginalEndPoint;
    }

    const wallets = useMemo(() => [
        new PhantomWalletAdapter(),
        new SolflareWalletAdapter(),
        new SolletWalletAdapter(),
        new SolletExtensionWalletAdapter(),
        new TorusWalletAdapter(),
    ],
        [network]
    );
    const onError = useCallback((error: WalletError) => {
        notify({ type: "error", message: error.message ? `${error.name}: ${error.message}` : error.name });
        console.error(error);
    }, []);
    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} onError={onError} autoConnect={autoConnect}>
                <ReactUIWalletModalProvider>{children}</ReactUIWalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
};

// Debug
export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return  (
        <>
        <NetworkConfigurationProvider>
            <AutoConnectProvider>
                <WalletContextProvider>{children}</WalletContextProvider>
            </AutoConnectProvider> 
        </NetworkConfigurationProvider>
        </>
    );
};