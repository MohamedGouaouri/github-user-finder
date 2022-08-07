// query {
//     repositoryOwner(login: "MohamedGouaouri") {
//         login
//     ... on User {
//             bio
//
//         }
//     }
// }

import {gql} from "@apollo/client";

export const LOAD_USER_INFO = gql`
    query ($user:String = "MohamedGouaouri") {
        user(login: $user){
            login
            name
            bio
            avatarUrl
            followers {
                totalCount
            }
            following{
                totalCount
            }
            repositories{
                totalCount
            }
            location
            twitterUsername
            company
            websiteUrl
        }
    }
`