function shout(string) {
    return string.toUpperCase();
  }
//Whisper next
  function whisper(string) {
    return string.toLowerCase();
  }
  // Console log?
  function logShout(string) {
    console.log(shout(string))
  }
//Whisper log?
function logWhisper(string) {
    console.log(whisper(string))
  }

  // Roommate dealings
  function sayHiToHeadphonedRoommate(string) {
    // Check if the string is in lowercase
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    }


  // Check if the string is in uppercase
  if (string === string.toUpperCase()) {
    return "YES INDEED!";
  }
  // Dinner invite
  if (string === "Let's have dinner together!")
    return "I would love to!"
  // Any other cases
  return "Okay!";
}


  /// Exports
  module.exports = {shout, whisper, logShout, logWhisper}

