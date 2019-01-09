exports.getUser = function (req, res) {
  var db = req.db;
  var collection = db.get('users');
  var userToFind = req.params.username.toUpperCase();
  collection.find({
    'username': userToFind
  }, function (e, docs) {
    res.json(docs);
  });
}

exports.getAllUsers = function (req, res) {
  var db = req.db;
  var collection = db.get('users');
  collection.find({}, {}, function (e, docs) {
    res.json(docs);
  });
}