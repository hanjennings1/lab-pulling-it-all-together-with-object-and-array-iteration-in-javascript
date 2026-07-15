function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

// #2.1 Retrieve Player Info - numPointsScored(playerName)
function numPointsScored(playerName) {          // call the requested function
  const game = gameObject();                    // set-up the data we need; check in gameObject for:
  const homePlayers = game.home.players;            // checking thru the home players for the name
  const awayPlayers = game.away.players;            // checking thru away players for name match

  if (homePlayers[playerName]) {               // if the player's name is in homePlayers, 
    return homePlayers[playerName].points;      // return the # of points scored
  } else if (awayPlayers[playerName]) {        // if the player's name is NOT in home, check the awayPlayers
    return awayPlayers[playerName].points;      // and reurn the # of points scored
  }
}

// #2.2 Retrieve Player Info - shoeSize(playerName)
// basically same thing but different stat:
function shoeSize(playerName) {          // call the requested function
  const game = gameObject();                    // set-up the data we need; check in gameObject for:
  const homePlayers = game.home.players;            // checking thru the home players for the name
  const awayPlayers = game.away.players;            // checking thru away players for name match

  if (homePlayers[playerName]) {               // if the player's name is in homePlayers, 
    return homePlayers[playerName].shoe;      // return the shoe size
  } else if (awayPlayers[playerName]) {        // if the player's name is NOT in home, check the awayPlayers
    return awayPlayers[playerName].shoe;      // and reurn the shoe size
  }
}

// #2.3 Retrieve Team Info - teamColors(teamName)
function teamColors(teamName) {
    const game = gameObject ();             // this time, we only need the outer object, not all the data inside that

    if (game.home.teamName === teamName) {       //dot.function on left side walks thru the nested objects
        return game.home.colors;
    } else if (game.away.teamName === teamName){
        return game.away.colors;
    }
}

// #2.4 Retrieve Team Info - teamNames() -> returns array of both team names
function teamNames () {
    const game = gameObject ();                         // grants access to the game data
    return [game.home.teamName, game.away.teamName]     // sends back array listing both teams
}

// #2.5 Retrieve Player Number - playerNumbers(teamName) --> numbers of ALL players for whole team
function playerNumbers(teamName) {
    const game = gameObject ();
    let players;                               // empty variable that holds whatever team is called's players

    if (game.home.teamName === teamName) {               // if teamName is exactly same as the home team..
        players = game.home.players;                        // grab the object holding the home team's players 
        } else if (game.away.teamName === teamName) {   // if not the home to it's the away team
             players = game.away.players;                   // grab the object holding away team's players
        }
    // we now hold variable 'players' hold all players names/stats, but we need to extract only the player numbers
        return Object.values(players).map(player => player.number)
        // this removes the names leaving just stats (right)
        // and uses .map to grab only the 'number' out of the 'player' variable/array
}

// #2.6 Retrieve Player Stats - playerStats(playerName)
function playerStats(playerName) {
    const game = gameObject();
    const homePlayers = game.home.players;
    const awayPlayers = game.away.players;

     if (homePlayers[playerName]) {
        return homePlayers[playerName];
     } else if (awayPlayers[playerName]) {
         return awayPlayers[playerName];
     }
}

// #2.7 Advanced Challenge: bigShoeRebounds()
function bigShoeRebounds () {
    const game = gameObject ();
    const homePlayers = game.home.players;       
    const awayPlayers = game.away.players;      
    const allPlayers = [];
        for (let name in homePlayers) {
                allPlayers.push(homePlayers[name]);
        }
        for (let name in awayPlayers) {
                allPlayers.push(awayPlayers[name]);
        }

  let biggestShoe = allPlayers[0];

  for (let i = 1; i < allPlayers.length; i++) {
    if (allPlayers[i].shoe > biggestShoe.shoe) {
      biggestShoe = allPlayers[i];
    }
  }

  return biggestShoe.rebounds;
}

// BONUS #3 playerWithLongestName
function playerWithLongestName () {
    const game = gameObject ();
    const homePlayers = game.home.players;
    const awayPlayers = game.away.players;

    let longestName = "";                            // start with empty string; "" length is 0, so first real name checked will beat it

    for (let name in homePlayers) {                   // loop through each player NAME (the keys) in homePlayers
        if (name.length > longestName.length) {          // is this name longer than our current record-holder?
            longestName = name;                              // if so, update longestName to this one
        }
    }

    for (let name in awayPlayers) {                   // repeat same check for awayPlayers
        if (name.length > longestName.length) {
            longestName = name;
        }
    }

    return longestName;                               // after checking everyone, return whichever name was longest
}

// SUPER BONUS --> doesLongNameStealATon(): Returns true if the player with the longest name has the most steals.
function doesLongNameStealATon() {
    const game = gameObject();
    const homePlayers = game.home.players;
    const awayPlayers = game.away.players;

    const allPlayers = [];                      // array same as 'bigShoeRebounds'
    for (let name in homePlayers) {
        allPlayers.push(homePlayers[name]);
    }
    for (let name in awayPlayers) {
        allPlayers.push(awayPlayers[name]);
    }

    let mostSteals = allPlayers[0];                         // assumes first player has the most steals, to start
    for (let i = 1; i < allPlayers.length; i++) {           // loop through the rest of allPlayers, starting at index 1
        if (allPlayers[i].steals > mostSteals.steals) {     // if current player has more steals than our current record-holder..
            mostSteals = allPlayers[i];                         // ..update mostSteals to be this player instead
        }
    }
    
    // after the loop, mostSteals holds whichever player object has the highest 'steals' value
    const longestNamePlayer = playerWithLongestName();      // reuse existing function to get name of player w/ longest name (a string)

    return playerStats(longestNamePlayer).steals === mostSteals.steals;
    // reuse playerStats() to look up that player's full stats, grab .steals off it,
        // then compare it to mostSteals.steals -- returns true/false
}