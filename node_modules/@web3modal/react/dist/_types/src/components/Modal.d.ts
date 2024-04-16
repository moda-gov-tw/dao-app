import type { W3mModal } from '@web3modal/ui';
import React from 'react';
/**
 * Component
 */
export declare function Modal(props: JSX.IntrinsicElements['w3m-modal']): React.JSX.Element;
/**
 * Types
 */
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'w3m-modal': Partial<W3mModal>;
        }
    }
}
