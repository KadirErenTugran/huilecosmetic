import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },

  {
    name: 'user1',
    email: 'user1@email.com',
    password: bcrypt.hashSync('kadirbey', 10),
    isAdmin: false,
  },

  {
    name: 'user3',
    email: 'user3@email.com',
    password: bcrypt.hashSync('selami', 10),
    isAdmin: false,
  },
  {
    name: 'user4',
    email: 'user4@email.com',
    password: bcrypt.hashSync('selami12', 10),
    isAdmin: false,
  },
  {
    name: 'user5',
    email: 'user5@email.com',
    password: bcrypt.hashSync('selami13', 10),
    isAdmin: false,
  },
];

export default users;
