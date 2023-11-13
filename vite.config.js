import { resolve } from "path";

/** @type {import('vite').UserConfig} */
export default {
    root: "./src",
    base: "./",
    appType: "mpa",
    build: {
        outDir: "../build",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, "./src/index.html"),
                about: resolve(__dirname, "./src/about.html"),
            },
            output: {
                entryFileNames: "js/[name]-[hash].js",
                chunkFileNames: "js/[name]-[hash].js",

                assetFileNames: (assetInfo) => {
                    const info = assetInfo.name.split(".");

                    const extType = info[info.length - 1];

                    if (/\.(css)$/.test(assetInfo.name)) {
                        return `css/[name]-[hash].${extType}`;
                    }

                    if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name)) {
                        return `fonts/[name]-[hash].${extType}`;
                    }

                    return `assets/[name]-[hash].${extType}`;
                },
            },
        },
    },
};
