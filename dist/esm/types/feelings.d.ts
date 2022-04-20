export declare type Feeling = {
    status: number;
    match: boolean;
    likes_remaining: number;
    rate_limited_until: number;
};
export declare type Criterias = {
    minPics?: number | 0;
    hasBio?: boolean;
    hasJob?: boolean;
};
export declare type AutoLike = {
    availableProfileAmount: number;
    likesRemaining: number;
};
export declare type HasCriterias = {
    hasAllCriterias: boolean;
    reasonPassed: string;
};
