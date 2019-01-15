
const User = require('./Model/User') 

const {
    GraphQLList,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLBigInt,
    GraphQLSchema
} = require  ('graphql');

const UserType = new GraphQLObjectType({
    name: "User",
    fields : () => ({
        name: {type: GraphQLString},
        gender: {type: GraphQLString},
        company: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString},
        address: {type: GraphQLString}
    })    
})

// Root Querry
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        user:{
            type: UserType,
            args:{
                name:{type:GraphQLString}
            },
            resolve(parentValue, args){
                return User.find({name: args.name })
                .then(user => user[0])
            }
        }
    }
})

//Exports
module.exports= new GraphQLSchema({
    query: RootQuery
});

