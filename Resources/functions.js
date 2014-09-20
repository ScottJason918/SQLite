// var create = function(\){
	// var db = Ti.Database.open("dbase");
	// db.execute("INSERT INTO dTable (name, number) VALUES (?,?)", namTxt.value, numTxt.value);
	// var rowID = db.lastInsertRowId;
	// tabGroup.setActiveTab(tab1);
	// db.close();
	// read();
// };

// var update = function(){
	// var db = Ti.Database.open("Dbase.db");
	// db.execute("UPDATE table SET name=?, number=? WHERE id=?", namTxt.value, numTxt.value, object.id);
	// db.close();
// };

var del = function(){
	var dBase = Ti.Database.open("dbase");
	dBase.execute("DELETE FROM dTable SET name=? number=? WHERE id=?");
	dBase.close();
};
// 
// exports.create = create;
// exports.del = del;
//exports.update = update;
