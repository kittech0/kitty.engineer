// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    integrations: [],
    output: 'static',
    compressHTML: true,
    site: "https://kitty.engineer",
    prefetch: {
        prefetchAll: true,
    },
    experimental: {
        fonts: [{
            provider: "local",
            name: "Monaspace Neon",
            cssVariable: "--font-neon",
            variants: [{
                style: "normal",
                src: ["./src/font/MonaspaceNeon-Regular.woff2",],
            },],
        }, {
            provider: "local",
            name: "Monaspace Radon",
            cssVariable: "--font-radon",
            variants: [{
                weight: 700,
                style: "normal",
                src: ["./src/font/MonaspaceRadon-Regular.woff2",],
            },],
        },],
    },
});