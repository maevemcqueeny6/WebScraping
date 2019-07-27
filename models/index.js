// Exporting an object containing all of our models


// Enables us to reference a single directory instead of both Article.js and Note.js in the models folder
module.exports = {
  Article: require("./Article"),
  Note: require("./Note")
};
