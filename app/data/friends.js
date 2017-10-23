// ===============================================================================
// DATA
// Below data will hold all of the friends.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    "name": "Ryan S.",
    "photo": "https://drive.google.com/open?id=0ByaawHGX1NDfek1tYWdySTJmdEE",
    "scores": [3, 3, 1, 2, 1, 2, 4, 3, 1, 2],
  },
  {
    "name": "Mark S.",
    "photo": "https://instagram.ftpa1-1.fna.fbcdn.net/t51.2885-19/10731526_788370824554808_522872068_a.jpg",
    "scores": [4, 3, 2, 3, 4, 2, 4, 2, 2, 4],
  },
  {
    "name": "Kendra K.",
    "photo": "https://drive.google.com/open?id=14BTtkQIvHO1jcOr7ELPAWcZpfkWaeTEEDg",
    "scores": [2, 2, 3, 4, 1, 4, 3, 5, 4, 2],
  },
  {
    "name": "Jump Rope Girl",
    "photo": "https://drive.google.com/open?id=0ByaawHGX1NDfTEEwRmxoWWx6eEk",
    "scores": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  },

];



// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
