import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
  type User {
    id: ID
    userName: String
  }
  type Tweet {
    id: ID
    text: String
    author: User
  }
  type Query {
    allTweets: [Tweet]
    tweet(id: ID): Tweet
  }
  type Mutation {
    postTweet(text: String, userId: ID): Tweet
  }
`

const server = new ApolloServer({ typeDefs })

server.listen().then(({ url }) => {
  console.log(`Server is running at ${url}`)
})
