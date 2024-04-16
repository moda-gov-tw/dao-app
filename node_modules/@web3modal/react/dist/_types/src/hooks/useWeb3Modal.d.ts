export declare function useWeb3Modal(): {
    isOpen: boolean;
    open: (options?: import("packages/core/dist/_types/src/controllers/ModalCtrl").OpenOptions | undefined) => Promise<void>;
    close: () => void;
    setDefaultChain: (selectedChain: import("packages/core/dist/_types/src/types/controllerTypes").Chain | undefined) => void;
};
