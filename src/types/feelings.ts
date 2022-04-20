export type Feeling = {
  status: number;
  match: boolean;
  likes_remaining: number;
  rate_limited_until: number;
};
export type Criterias = {
  minPics?: number | 0;
  hasBio?: boolean;
  hasJob?: boolean;
};
export type AutoLike = {
  availableProfileAmount: number;
  likesRemaining: number;
};
export type HasCriterias = {
  hasAllCriterias: boolean;
  reasonPassed: string;
};
