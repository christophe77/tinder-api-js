declare const tinderApi: {
    auth: {
        withFacebook: (credentials: import("./types/auth").Credentials) => Promise<import("./types/auth").AuthFacebook>;
    };
    feeling: {
        like: (userId: string) => Promise<import("./types/feelings").Feeling>;
        pass: (userId: string) => Promise<import("./types/feelings").Feeling>;
    };
    recommandation: {
        getRecommandations: () => Promise<import("./types/recommandations").Recommandations>;
    };
};
export default tinderApi;
