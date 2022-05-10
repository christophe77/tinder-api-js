# tinder-api

Working may 2022 - Only facebook auth.

## 1.0.7 breaking changes

Auth process is now done using your facebook account, you don't have to get the token by yourself.

## Available commands

### Auth

Only with facebook for the moment.

    const facebookCredentials = {
        email: "your.email@gmail.com",
        password: "your.password",
    };
    const login = await tinderApi.auth.withFacebook(facebookCredentials);

Auth is mandatory before any action.

### Recommandation

    const recommandations = await tinderApi.recommandation.getRecommandations();

Returns those types :

    {
        status: number;
        results: [
            {
                group_matched: boolean;
                badges: [{
                    type: string;
                }];
                teasers: [{
                    type: string;
                    string: string;
                }];
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
                jobs: [{ title: { name: string } }];
                schools: [{ name: string }];
                name: string;
                ping_time: string;
                last_activity_date: string;
                photos: [
                    {
                        id: string;
                        main: boolean;
                        fileName: string;
                        extension: string;
                        processedFiles: [
                            {
                                width: number;
                                height: number;
                                url: string;
                            }
                        ];
                        url: string;
                        crop?: string;
                        ydistance_percent: number;
                        yoffset_percent: number;
                        xoffset_percent: number;
                        xdistance_percent: number;
                    }
                ];
                birth_date_info: string;
                spotify_theme_track: {
                    id: string;
                    name: string;
                    album: {
                        id: string;
                        name: string;
                        images: [
                            {
                                height: number;
                                width: number;
                                url: string;
                            }
                        ];
                    };
                    artists: [{ id: string; name: string }];
                    preview_url: string;
                    uri: string;
                };
                is_traveling: boolean;
                show_gender_on_profile: boolean;
                hide_age: boolean;
                hide_distance: boolean;
            }
        ];
    };

### Feeling

Like : tinderApi.feeling.like(userId)

     const like = await tinderApi.feeling.like("8547852255");

Pass : tinderApi.feeling.pass(userId)

     const pass = await tinderApi.feeling.pass("8547852255");

#### TODO

Facebook user_id and long_lived_token are stored in a json file using yajdb.<br />
I want to check token validity before getting a new one which is a long process with Puppeteer.<br />
