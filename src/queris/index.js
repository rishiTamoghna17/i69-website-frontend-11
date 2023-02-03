import gql from "graphql-tag"
import { client } from "../ApolloClient/client"


const loginWithFetch = async (data) => {
    try {
        const respose = await client.mutate({
            mutation: gql`mutation socialAuth(
                $accessToken: String!
                $accessVerifier: String = ""
                $provider: String!
              ) {
                socialAuth(
                  accessToken: $accessToken, accessVerifier: $accessVerifier,provider:$provider
                ) {
                    email
                    isNew
                    id
                    token
                    username
                }
              }`,
            variables: { ...data },
        })
        return respose
    } catch (error) {
        alert(error)
    }
}

export { loginWithFetch }