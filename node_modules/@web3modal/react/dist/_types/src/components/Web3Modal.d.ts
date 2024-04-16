import type { ConfigCtrlState, ThemeCtrlState } from '@web3modal/core';
import type { EthereumClient } from '@web3modal/ethereum';
import React from 'react';
/**
 * Props
 */
export type Web3ModalProps = ConfigCtrlState & ThemeCtrlState & {
    ethereumClient?: EthereumClient;
};
/**
 * Component
 */
declare function CreateWeb3Modal({ ethereumClient, ...config }: Web3ModalProps): React.JSX.Element;
export declare const Web3Modal: React.MemoExoticComponent<typeof CreateWeb3Modal>;
export {};
