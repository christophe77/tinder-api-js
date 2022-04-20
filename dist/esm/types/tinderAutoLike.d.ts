export declare type TinderAutoLikeConfig = {
    facebookAuth: {
        token: string;
        facebook_id: string;
    };
    criterias: {
        hasBio?: boolean;
        hasJob?: boolean;
        minPics?: number;
    };
};
