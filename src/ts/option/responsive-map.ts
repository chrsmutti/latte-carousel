module latte {

    /**
     * Responsive options map.
     *
     * @export
     * @class ResponsiveMap
     */
    export class ResponsiveMap {
        [breakpoint: string]: Options;

        /**
         * Creates an instance of ResponsiveMap.
         * @param {ResponsiveMap} [map] Map to copy properties.
         * @param {Options} [globalOptions] Options to use as default.
         * @memberof ResponsiveMap
         */
        constructor(map?: ResponsiveMap, globalOptions?: Options) {
            if (map == null) {
                return;
            }

            // Instantiate options keeping global properties.
            for (const breakpoint in map) {
                if (map.hasOwnProperty(breakpoint)) {
                    const responsiveOptions = new Options((map as any)[breakpoint]);

                    // Copy from global options
                    if (globalOptions != null) {
                        for (const prop in globalOptions) {
                            if (globalOptions.hasOwnProperty(prop)
                                && prop !== "responsive"
                                && (map as any)[breakpoint][prop] == null) {
                                (responsiveOptions as any)[prop] = (globalOptions as any)[prop];
                            }
                        }
                    }

                    (this as any)[breakpoint] = responsiveOptions;
                }
            }
        }
    }
}
