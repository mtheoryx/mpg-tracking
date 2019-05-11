const resolvers = {
  Query: {
    async allMpgs(root, args, { models }) {
      return models.Mpg.findAll();
    },
    async mpg(root, { odometer }, { models }) {
      return models.Mpg.findOne({
        where: {
          odometer: odometer
        }
      });
    }
  },
  Mutation: {
    async createMpg(
      root,
      { date, odometer, fuel, cost, location },
      { models }
    ) {
      return models.Mpg.create({
        date,
        odometer,
        fuel,
        cost,
        location
      });
    },
    async updateMpg(root, args, { models }) {
      return models.Mpg.findOne({
        where: {
          odometer: args.odometer
        }
      }).then(mpg => mpg.update({ ...args }));
    },
    async deleteMpg(root, { odometer }, { models }) {
      return models.Mpg.findOne({
        where: {
          odometer: odometer
        }
      }).then(mpg => mpg.destroy({ force: true }));
    }
  }
};

module.exports = resolvers;
