var data1 = require("data");

var create = function(){
	var db = Ti.Database.open("Dbase.sqlite");
	db.execute("CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY, name TEXT, number INTEGER)");
	//db.execute("INSERT INTO test (name, number) VALUES (?,?,?)", name, number);
	db.close();
};

// var update = function(){
	// var db = Ti.Database.open("Dbase.db");
	// db.execute("")
// };

var del = function(){
	var dBase = Ti.Database.open("DBase.db");
	dBase.execute("DELETE FROM dTable SET name=? number=? WHERE id=?");
	dBase.close();
};

exports.create = create;
exports.del = del;
//exports.update = update;
