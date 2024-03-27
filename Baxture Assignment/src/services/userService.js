const { v4: uuidv4 } = require('uuid');

let users = [];

exports.getAllUsers = async () => {
  return users;
};

exports.getUserById = async (userId) => {
  const user = users.find(u => u.id === userId);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

exports.createUser = async (userData) => {
  const newUser = {
    id: uuidv4(),
    ...userData
  };
  users.push(newUser);
  return newUser;
};

exports.updateUser = async (userId, userData) => {
  let updatedUser;
  users = users.map(user => {
    if (user.id === userId) {
      updatedUser = { ...user, ...userData };
      return updatedUser;
    }
    return user;
  });
  if (!updatedUser) {
    throw new Error('User not found');
  }
  return updatedUser;
};

exports.deleteUser = async (userId) => {
  const initialLength = users.length;
  users = users.filter(user => user.id !== userId);
  if (users.length === initialLength) {
    throw new Error('User not found');
  }
};
