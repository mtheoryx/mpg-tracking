const { gql } = require('apollo-server');

const typeDefs = gql`
  type Mpg {
    date: String!
    odometer: Int!
    fuel: Float!
    cost: Float!
    location: String
  }

  type Query {
    mpg(odometer: Int!): Mpg
    allMpgs: [Mpg!]!
  }

  type Mutation {
    createMpg(
      date: String!
      odometer: Int!
      fuel: Float!
      cost: Float!
      location: String
    ): Mpg!
    deleteMpg(odometer: Int!): Mpg!
    updateMpg(
      date: String
      odometer: Int
      fuel: Float
      cost: Float
      location: String
    ): Mpg!
  }
`;

module.exports = typeDefs;
