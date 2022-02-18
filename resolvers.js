const User = require('./models/User.model');

const resolvers = {
  Query: {

    getAllUsers: async () => {
      return await User.find();
    },

    getUser: async (_parent, {email, password}, _context, _info) => {
         return await User.findOne({email, password});
    },

    getUserInfo: async (_parent, {id}, _context, _info) => {
         return await User.findById(id);
    }
  },

  Mutation: {
    createUser: async (parent, args, context, info) => {
      const { name, email, password, mobile,country } = args.user;
      const user = new User({ name, email, password, mobile, country });
      await user.save();
      return user;
    },

    verifyUser: async (parent, args, context, info) => {
      const {id} = args;
      const { email, verified}  = args.user;

      const user = await User.findByIdAndUpdate(
        id,
        {verified},
        {new: true}
      );
      return user;
    }
    ,

    loginUser: async (parent, args, context, info) => {
      const {em, pass} = args;
      const { email, password}  = args.user;

      const user = await User.findOne({email, password});
      return user;
    }
    ,

    updateUser: async (parent, args, context, info) => {
      const {id} = args;
      const { name, email, password, mobile, country }  = args.user;
      const updates = []

      if(name !== undefined){
        updates.name = name
      }

      if(email !== undefined){
        updates.email = email
      }

      if(mobile !== undefined){
        updates.mobile = mobile
      }

      if(country !== undefined){
        updates.country = country
      }

      const user = await User.findByIdAndUpdate(
        id,
        updates,
        {new: true}
      );
      return user;
    }
  },
};


module.exports = resolvers;
