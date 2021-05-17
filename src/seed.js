// NOTE: replace 'NvPY9M9MzFTARQ6M816YAzDJxZ72' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
  const users = [
    {
      userId: "R46Vyr8A5KQcymb28dhZua144yy1",
      username: "theGodfather",
      fullName: "Mario Puzo",
      emailAddress: "the.user@gmail.com",
      following: ["2", "3", "4", "5", "6", "7"],
      followers: ["2", "3", "4", "5", "6", "7"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "raphael",
      fullName: "Raff Urbano",
      emailAddress: "raphael@sanzio.com",
      following: ["R46Vyr8A5KQcymb28dhZua144yy1","3"],
      followers: ["R46Vyr8A5KQcymb28dhZua144yy1"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "dali",
      fullName: "Maar Dalí",
      emailAddress: "mrdali@hotmail.com",
      following: ["R46Vyr8A5KQcymb28dhZua144yy1"],
      followers: ["R46Vyr8A5KQcymb28dhZua144yy1", "2"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "orwell",
      fullName: "George Jeeb",
      emailAddress: "george.of.the.jungle@yahoo.com",
      following: ["R46Vyr8A5KQcymb28dhZua144yy1"],
      followers: ["R46Vyr8A5KQcymb28dhZua144yy1"],
      dateCreated: Date.now(),
    },
    {
      userId: "5",
      username: "jD",
      fullName: "Jack Daniels",
      emailAddress: "thegentleman@aol.com",
      following: [],
      followers: ["R46Vyr8A5KQcymb28dhZua144yy1"],
      dateCreated: Date.now(),
    },
    {
      userId: "6",
      username: "jane",
      fullName: "Jane Doe",
      emailAddress: "the.doe@ymail.com",
      following: [],
      followers: ["R46Vyr8A5KQcymb28dhZua144yy1"],
      dateCreated: Date.now(),
    },
    {
      userId: "7",
      username: "jill",
      fullName: "jill Doe",
      emailAddress: "the.jill@ymail.com",
      following: [],
      followers: ["R46Vyr8A5KQcymb28dhZua144yy1"],
      dateCreated: Date.now(),
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection("users").add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection("photos")
      .add({
        photoId: i,
        userId: "2",
        imageSrc: `/images/users/raphael/${i}.jpg`,
        caption: "The Dragon",
        likes: [],
        comments: [
          {
            displayName: "dali",
            comment: "Who is up for a heist ?!",
          },
          {
            displayName: "orwell",
            comment: "Damn!!",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
      });
  }
}
