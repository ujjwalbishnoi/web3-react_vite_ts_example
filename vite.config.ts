import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import NodeModulesPolyfills from "@esbuild-plugins/node-modules-polyfill";
import nodePolyfills from "rollup-plugin-polyfill-node";
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: {},
  },
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis",
        WebSocket: "ws",
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
          process: true,
        }),
        NodeModulesPolyfills(),
        esbuildCommonjs(["@web3-react/walletconnect", "ws"]),
      ],
    },
  },
  build: {
    rollupOptions: {
      plugins: [nodePolyfills()],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
