/** @type {import('vite').UserConfig} */
export default {
    root: "./src",
    base: "./",
    build: {
        outDir: "../build",
        emptyOutDir: true,
        rollupOptions: {
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
