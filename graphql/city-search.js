const {gql,GraphQLClient}=require ('graphql-request');

     

    const query = gql`
    {
        todo_todo_aggregate(where:{name:{name:{_eq:"Sathish"}}}){
            aggregate{
                Sathish : count
            }
        }
    }
    `
const endpoint='https://oriented-dingo-64.hasura.app/v1/graphql'
const client = new GraphQLClient(endpoint, { headers:
                                                    {
                                                    'x-hasura-admin-secret':'7YNz85O50v1MlcfMqxvKOZOaQ94VusDtCeeSlXXbV1WcERZ53UtWww2UZmkOJ5fB'
                                                    } 
                                            })

     client.request( query)
                 .then((data) =>console.log(data))
                 .catch((err)=>console.log(err))


