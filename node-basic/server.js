const express=require('express')
const {gql,GraphQLClient}=require ('graphql-request');
// const querys = require('../graphql/city-search')
const app=express()
app.use(express.json())     

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


app.get('/swapi', function(req,res){
    client.request( query)
                 .then((data) =>res.send(data))
                 .catch((err)=>console.log(err))
    
})

app.listen(5000,()=>{
    console.log('server is running now ')
})