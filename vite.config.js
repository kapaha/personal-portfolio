/** @type {import('vite').UserConfig} */
export default {
    base: "./",
    root: "./src",
    build: {
        outDir: "../build",
        assetsDir: "", // Leave `assetsDir` empty so that all static resources are placed in the root of the `dist` folder.
        assetsInlineLimit: 0,
        rollupOptions: {
            // input: {
            //   // Uncomment if you need to specify entry points for .html files
            //   index: resolve(__dirname, 'src/index.html'),
            //   myworks: resolve(__dirname, 'src/my-works.html'),
            //   thoughts: resolve(__dirname, 'src/thoughts.html'),
            //   about: resolve(__dirname, 'src/about.html'),
            //   contact: resolve(__dirname, 'src/contact.html'),
            // },
            output: {
                entryFileNames: "js/[name]-[hash].js", // If you need a specific file name, comment out
                chunkFileNames: "js/[name]-[hash].js", // these lines and uncomment the bottom ones
                // entryFileNames: chunk => {
                //   if (chunk.name === 'main') {
                //     return 'js/main.min.js';
                //   }
                //   return 'js/main.min.js';
                // },
                assetFileNames: (assetInfo) => {
                    const info = assetInfo.name.split(".");
                    const extType = info[info.length - 1];
                    if (
                        /\.(png|jpe?g|gif|svg|webp|webm|mp3)$/.test(
                            assetInfo.name,
                        )
                    ) {
                        return `media/[name]-[hash].${extType}`;
                    }
                    if (/\.(css)$/.test(assetInfo.name)) {
                        return `css/[name]-[hash].${extType}`;
                    }
                    if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name)) {
                        return `fonts/[name]-[hash].${extType}`;
                    }
                    return `[name]-[hash].${extType}`;
                },
            },
        },
    },
};
