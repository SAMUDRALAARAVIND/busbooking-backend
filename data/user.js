const bcrypt = require("bcryptjs");
const users = [
  {
    fullName: "Alice Johnson",
    gender: "F",
    dob: new Date(1990, 5, 15).getTime(), // DOB in epoch time
    email: "alice.johnson@example.com",
    contactNumber: "1234567890",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    fullName: "Bob Smith",
    gender: "M",
    dob: new Date(1985, 11, 20).getTime(), // DOB in epoch time
    email: "bob.smith@example.com",
    contactNumber: "0987654321",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    fullName: "Clara Brown",
    gender: "F",
    dob: new Date(1992, 8, 30).getTime(), // DOB in epoch time
    email: "clara.brown@example.com",
    contactNumber: "1122334455",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    fullName: "David Green",
    gender: "M",
    dob: new Date(1988, 2, 10).getTime(), // DOB in epoch time
    email: "david.green@example.com",
    contactNumber: "2233445566",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    fullName: "Emma White",
    gender: "F",
    dob: new Date(1995, 0, 5).getTime(), // DOB in epoch time
    email: "emma.white@example.com",
    contactNumber: "3344556677",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
