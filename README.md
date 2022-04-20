# tinder-api

Working April 2022 - Only facebook auth.<br />
Get your facebook id here : https://lookup-id.com/<br />
Get facebook header here :<br />

    https://www.facebook.com/dialog/oauth?client_id=464891386855067&redirect_uri=https://www.facebook.com/connect/login_success.html&scope=basic_info,email,public_profile,user_about_me,user_activities,user_birthday,user_education_history,user_friends,user_interests,user_likes,user_location,user_photos,user_relationship_details&response_type=token

## Available commands

### Auth

Only with facebook for the moment.

    const facebookAuth = {
        token:
            "EAAGm0PX4ZCpsBADOYsqssNBjtHFqADsOpjbZAfNgl7JkIjFwPlgvL2nj3oUqcCtWce1cLSAJHgG4d6m5hEeMlvbdOPFItD1YBik7cZByptBC6ZC5ovCI2IpsI3ZCBXZC5YztZCRcaqRZB1qcj8xWdceDjzHQI66Lkfcn20OP4qNdDlNjVeUP7e",
        facebook_id: "1020365714402091",
    };
    const login = await tinderApi.auth.withFacebook(facebookAuth);

Auth is mandatory before any action.

### Recommandation

    const recommandations = await tinderApi.recommandation.getRecommandations();

Returns those types :

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
    type Result = {
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
    type Recommandations = {
        status: number;
        results: Result[];
    };

### Feeling

     const like = await tinderApi.feeling.like("8547852255");
     const pass = await tinderApi.feeling.pass("8547852255");
