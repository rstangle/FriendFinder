// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
// API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  // WHY IS THIS /API/FRIENDS AND NOT /API/SURVEY?  
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  //CONFUSED BY THIS. I SORT OF FOLLOW THE LOGIC, BUT THE RES.JSON(TRUE); LOOSES ME.  WHY IS THIS HERE? 
  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware

      friends.push(req.body);
      // console.log(friends); // Which screen do I use to check this?  browser? node? localhost?

      //COMPARE USER ANSWERS TO ARRAY OF CHOICES
      // COMPARE THE DIFFERENCE BETWEEN CURRENT USER'S SCORES AGAINST PREVIOUS USERS SCORES PER INDEX.
      // ADD THE DIFFERENCES TO CALCULATE totalDifference
      // USE ABSOLUTE VALUE

      // function (I DON'T KNOW HOW TO DO THIS) {
      		// friends.
      // }


      
      res.json(true);
  });

};


// TRIAL CODE THAT DIDN'T WORK BUT MAY NEED TO ALTER TO GET TO WORK SO DON'T WANT TO DELETE IT JUST YET.
    // for(var i=0; i<newFriend.scores.length;i++) newFriend.scores[i] = parseInt(newFriend.scores[i], 10);