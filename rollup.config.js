const path = require("path");
const postcss = require("rollup-plugin-postcss");
const postcssImport = require("postcss-import");
const postcssUrl = require("postcss-url");

module.exports = (args) => {
    const defaultConfig = args.configDefaultConfig;
    const production = Boolean(args.configProduction);

    const outDir = path.join(__dirname, "dist/tmp/widgets");
    const outWidgetFile = "incentro/countryswitch/CountrySwitch";
    const toCssFile = path.join(outDir, `${outWidgetFile}.css`);

    defaultConfig.forEach((cfg, index) => {
        const postcssIndex = cfg.plugins.findIndex(p => p && p.name === "postcss");
        if (postcssIndex !== -1) {
            if (index === 0 || index === 1) {
                const outputFormat = index === 0 ? "amd" : "es";
                
                cfg.plugins[postcssIndex] = postcss({
                    extensions: [".css", ".sass", ".scss"],
                    extract: outputFormat === "amd",
                    inject: false,
                    minimize: production,
                    plugins: [
                        postcssImport(),
                        postcssUrl({ url: "inline" })
                    ],
                    sourceMap: !production ? "inline" : false,
                    use: {
                        sass: {
                            silenceDeprecations: ["legacy-js-api"]
                        }
                    },
                    to: toCssFile
                });
                console.log(`Replaced postcss plugin for Config ${index} (outputFormat: ${outputFormat}) with inline-assets configuration.`);
            }
        }
    });

    return defaultConfig;
};
