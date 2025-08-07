let getDesignTokes = (mode) => ({
    palette: {
        // @ts-ignore
        mode,
        ...(mode === "light"
            ? {
                // palette values for light mode
                myColor: {
                    main: "#647488",
                    hov: "#4dabf5",
                }
            }
            : {
                // palette values for dark mode
                myColor: {
                    main: "#00e676",
                    hov: "#14a37f",
                }
            }),
    },
});

export default getDesignTokes;