const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z'.*" },
        controls: {
            matches: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};