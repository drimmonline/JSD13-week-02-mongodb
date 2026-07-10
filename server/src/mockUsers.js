const users = [
  {
    _id: "668cb1a2e4b0f5a1a1a1a1a1",
    account_type: "customer",
    username: "thomas_dev",
    password: "$2b$10$EixZaYVK1VGbM16ie1...",
    login_status: false,
    profile: {
      name: "Thomas",
      lastname: "Fez",
      DoB: { $date: "2000-07-09T00:00:00Z" },
      address: "123/45 Sukhumvit Rd, Bangkok, Thailand",
      email: "thomas.dev@gmail.com",
      phone_number: "0931234561",
      image: "https://storage.googleapis.com/mybucket/avatar1.jpg",
    },
  },
  {
    _id: "668cb1a2e4b0f5a1a1a1a1a4",
    account_type: "customer",
    username: "jane_smith",
    password: "$2b$10$KixYaYVK1VGbM16ie2...",
    login_status: true,
    profile: {
      name: "Jane",
      lastname: "Smith",
      DoB: { $date: "1998-03-15T00:00:00Z" },
      address: "456/78 Ratchada Rd, Bangkok, Thailand",
      email: "jane.smith@gmail.com",
      phone_number: "0931234562",
      image: "https://storage.googleapis.com/mybucket/avatar2.jpg",
    },
  },
  {
    _id: "668cb1a2e4b0f5a1a1a1a1a3",
    account_type: "admin",
    username: "bob_wilson",
    password: "$2b$10$LixYaYVK1VGbM16ie3...",
    login_status: false,
    profile: {
      name: "Bob",
      lastname: "Wilson",
      DoB: { $date: "1995-11-22T00:00:00Z" },
      address: "789/12 Silom Rd, Bangkok, Thailand",
      email: "bob.wilson@gmail.com",
      phone_number: "0931234563",
      image: "https://storage.googleapis.com/mybucket/avatar3.jpg",
    },
  },
];

export default users;
