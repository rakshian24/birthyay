import User from "./database/models/User.js";

const resolvers = {
  Query: {
    getUsers: async () => {
      const users = await User.find();
      return users;
    },
    getUser: async (root, args) => {
      const user = await User.findById(args.id);
      return user;
    }
  },
  
  Mutation: {
    addUser: async (root, args) => {
      const { firstName, lastName, email, dob } = args;
      const newUser = new User({
        firstName,
        lastName,
        email,
        dob
      });

      await newUser.save();
      return newUser;
    },
    deleteUser: async (root, args) => {
      await User.findByIdAndDelete(args.id);
      return "User deleted successfully.";
    },
    updateUser: async (root, args) => {
      const { id, firstName, lastName, email, dob } = args;
      const updatedUser = {};

      if (firstName !== undefined) {
        updatedUser.firstName = firstName
      }
      if (lastName !== undefined) {
        updatedUser.lastName = lastName
      }
      if (email !== undefined) {
        updatedUser.email = email
      }
      if (dob !== undefined) {
        updatedUser.dob = dob
      }
      const user = await User.findByIdAndUpdate(id, updatedUser, { new: true });

      return user;
    },
  }
};

export default resolvers;