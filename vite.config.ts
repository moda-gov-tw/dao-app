import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()));

  return defineConfig({
    plugins: [
      react(),
      
    {
      name: 'add-nonce-script-attr',
      enforce: 'post',
      transformIndexHtml(html) {
        return html
          .replace(new RegExp('<script', 'g'), `<script nonce="cm1vaw=="`)
          .replace(new RegExp('<style', 'g'), `<style nonce="cm1vaw=="`)
          .replace(new RegExp('<link', 'g'), `<link nonce="cm1vaw=="`)
      }
    },
    {
        name: "html-inject-data-preload-attr",
        enforce: "post",
        transformIndexHtml(html) {
            const regex = /<(link|style|script)/gi;
            const replacement = '<$1 data-preload="true"';

            return html.replace(regex, replacement);
        },
    }
    ],
    define: {
      "process.env": {
        NX_RIVET_KEY: process.env.VITE_RIVET_KEY,
        NX_GRAPH_API_KEY_MAINNET: process.env.VITE_GRAPH_API_KEY_MAINNET,
        NX_INFURA_PROJECT_ID: process.env.VITE_INFURA_PROJECT_ID,
        NX_ETHERSCAN_KEY: process.env.VITE_ETHERSCAN_KEY,
        NX_ARBISCAN_KEY: process.env.VITE_ARBISCAN_KEY,
        NX_GNOSISSCAN_KEY: process.env.VITE_GNOSISSCAN_KEY,
        NX_POLYGONSCAN_KEY: process.env.VITE_POLYGONSCAN_KEY,
        NX_OPTIMISMSCAN_KEY: process.env.VITE_OPTIMISMSCAN_KEY,
        NX_WALLET_CONNECT_ID: process.env.VITE_WALLET_CONNECT_ID,
        NX_OPTIMISM_ALCHEMY_KEY: process.env.VITE_OPTIMISM_ALCHEMY_KEY,
        NX_ARBITRUM_ALCHEMY_KEY: process.env.VITE_ARBITRUM_ALCHEMY_KEY,
        NX_POLYGONPOS_ALCHEMY_KEY: process.env.VITE_POLYGONPOS_ALCHEMY_KEY,
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        target: "es2020",
        define: {
          global: "globalThis",
        },
        supported: {
          bigint: true,
        },
      },
    },

    build: {
      target: ["es2020"],
      chunkSizeWarningLimit:5000,
      minify: false
    },
  });
};