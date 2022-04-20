type ProcessedFiles = {
  width: number;
  height: number;
  url: string;
};
type Photo = {
  id: string;
  main: boolean;
  fileName: string;
  extension: string;
  processedFiles: ProcessedFiles[];
  url: string;
  crop?: string;
  ydistance_percent: number;
  yoffset_percent: number;
  xoffset_percent: number;
  xdistance_percent: number;
};
export type Result = {
  group_matched: boolean;
  badges: {
    type: string;
  }[];
  teasers: {
    type: string;
    string: string;
  }[];
  distance_mi: number;
  content_hash: string;
  common_like_count: number;
  common_friend_count: number;
  common_likes: [];
  common_friends: [];
  connection_count: number;
  _id: string;
  bio: string;
  birth_date: string;
  gender: number;
  jobs: { title: { name: string } }[];
  schools: { name: string }[];
  name: string;
  ping_time: string;
  last_activity_date: string;
  photos: Photo[];
  birth_date_info: string;
  spotify_theme_track: {
    id: string;
    name: string;
    album: {
      id: string;
      name: string;
      images: {
        height: number;
        width: number;
        url: string;
      }[];
    };
    artists: { id: string; name: string }[];
    preview_url: string;
    uri: string;
  };
  is_traveling: boolean;
  show_gender_on_profile: boolean;
  hide_age: boolean;
  hide_distance: boolean;
};
export type Recommandations = {
  status: number;
  results: Result[];
};
