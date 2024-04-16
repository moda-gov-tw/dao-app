import type { Chain, Connector } from '@wagmi/core';
import { disconnect, fetchBalance, fetchEnsAvatar, fetchEnsName, getAccount, getNetwork, switchNetwork, watchAccount, watchNetwork } from '@wagmi/core';
import type { ConnectorId } from './types';
export declare class EthereumClient {
    private readonly wagmi;
    readonly chains: Chain[];
    constructor(wagmi: any, chains: Chain[]);
    private getWalletConnectConnector;
    private connectWalletConnectProvider;
    namespace: string;
    getConnectorById(id: ConnectorId | string): Connector<any, any>;
    getConnectors(): Connector<any, any>[];
    connectWalletConnect(onUri: (uri: string) => void, chainId?: number): Promise<[import("@wagmi/core").ConnectResult<import("@wagmi/core/dist/index-fc9ab085").P>, void]>;
    connectConnector(connectorId: ConnectorId | string, chainId?: number): Promise<import("@wagmi/core").ConnectResult<import("@wagmi/core/dist/index-fc9ab085").P>>;
    isInjectedProviderInstalled(): boolean;
    safeCheckInjectedProvider(providerId: string): boolean;
    getConnectedChainIds(): Promise<"ALL" | string[]>;
    disconnect: typeof disconnect;
    getAccount: typeof getAccount;
    watchAccount: typeof watchAccount;
    fetchBalance: typeof fetchBalance;
    getNetwork: typeof getNetwork;
    watchNetwork: typeof watchNetwork;
    switchNetwork: typeof switchNetwork;
    fetchEnsName: typeof fetchEnsName;
    fetchEnsAvatar: typeof fetchEnsAvatar;
}
