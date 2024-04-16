import type { W3mCoreButton } from '@web3modal/ui';
import React from 'react';
/**
 * Component
 */
export declare function Web3Button(props: JSX.IntrinsicElements['w3m-core-button']): React.JSX.Element;
/**
 * Types
 */
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'w3m-core-button': Pick<W3mCoreButton, 'avatar' | 'balance' | 'icon' | 'label'>;
        }
    }
}
