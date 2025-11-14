import path from "path";

export default ({env}) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    proxy: true,
    // url:  env('PUBLIC_URL', 'https://milesmediation.azurewebsites.net'),
    url: env('PUBLIC_URL', ''),
    app: {
        keys: env.array('APP_KEYS'),
    },
    dirs: {
        public: path.join(__dirname, '..', '..', 'public'),
    },
});
