const models = {
  userModel: require("./nosql/users"),
  tracksModel: require("./nosql/tracks"),
  storageModel: require("./nosql/storage"),
};

models.export = models;
