var data1 = require("data");
var functions = require("functions");

var tabGroup = Ti.UI.createTabGroup();
var tableView = Ti.UI.createTableView({});
var tblSection = Ti.UI.createTableViewSection({
	headerTitle: "Phone Book"
});
var sections = [tblSection];


functions.create();
data1.read();
data1.setUp();
tableView.setData(sections);
// console.log(sections);
