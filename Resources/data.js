Ti.Database.install("DBase.sqlite", "dbase");

var functions = require("functions");
var data= [];
var tab1;
var win1;
var nameText;
var numberText;
var tab2;
var win2;
var button;
var but2; 
var namTxt;
var numTxt;
var upd;

var back = function(){
	//console.log(data);
	tabGroup.setActiveTab(tab1);
	
};

var create = function(){
	var db = Ti.Database.open("dbase");
	db.execute("INSERT INTO dTable (name, number) VALUES (?,?)", namTxt.value, numTxt.value);
	var rowID = db.lastInsertRowId;
	tabGroup.setActiveTab(tab1);
	db.close();
	read();
	start();
};


var fun = function(e){
	var object = e.source;
	var win = Ti.UI.createWindow({
		title: object.title,
		backgroundColor: "#fff"
	});
		namTxt = Ti.UI.createTextField({
		borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: 50,
		value: object.title,
		paddingLeft: 10,
		width: "80%",
		height: 60,
		borderColor: "#C0C0C0"
	});
		numTxt = Ti.UI.createTextField({
		borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: 130,
		value: object.number,
		paddingLeft: 10,
		width: "80%",
		height: 60,
		borderColor: "#C0C0C0"
	});
		upd = Ti.UI.createButton({
		title: "Update",
		height: 50,
		width: "80%",
		bottom: 120,
		borderColor: "#C0C0C0"
	});
	var back = Ti.UI.createButton({
		title: "Back",
		height: 50,
		width: "80%",
		bottom: 50,
		borderColor: "#C0C0C0"
	});
	tabGroup.hide();
	back.addEventListener("click", function(){
		tabGroup.show();
	});
	upd.addEventListener("click", function(){
		var db = Ti.Database.open("dbase");
		db.execute("UPDATE dTable SET name=?, number=? WHERE id=?", namTxt.value, numTxt.value, object.id);
		db.close();
		win.close();
		read();
		tabGroup.show();
	});
	win.add(numTxt, namTxt, back, upd);
	win.open();
};
var read = function(name, number){;
	var db = Ti.Database.open("dbase");
	var rows = db.execute("SELECT id, name, number FROM dTable");
	while(rows.isValidRow()){
		data.push({
			id: rows.fieldByName("id"),
			name: rows.fieldByName("name"),
			hasChild: true,
			num : rows.fieldByName("number")
		});
		rows.next();
	};
	rows.close(); 
	db.close();
};
	
var start = function() {
 		win1 = Titanium.UI.createWindow({  
	    title:'Contacts',
	    backgroundColor:'#fff',
	});
		tab1 = Titanium.UI.createTab({  
    	icon:'KS_nav_views.png',
    	title:'Contacts',
	    window:win1
 	});

	for(i=0; i < data.length; i++){
		var rowz = Ti.UI.createTableViewRow({
			id: data[i].id,
			title: data[i].name,
			number: data[i].num,
			hasChild: true
		});
		tblSection.add(rowz);
	};


	tabGroup.addTab(tab1);
	win1.add(tableView);
	tabGroup.open();
	tableView.addEventListener("click", fun);
};

var setUp = function(){	
		win2 = Titanium.UI.createWindow({  
	    backgroundColor:'#fff'
	});
		tab2 = Titanium.UI.createTab({  
	    icon:'KS_nav_ui.png',
	    title:'Add',
	    window:win2
	});
		
		nameText = Ti.UI.createTextField({
		borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: 50,
		hintText: "Enter Name Here",
		paddingLeft: 10,
		width: "80%",
		height: 60,
		borderColor: "#C0C0C0"
	}) ;
		numberText = Ti.UI.createTextField({
		borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: 130,
		hintText: "Enter Number Here",
		paddingLeft: 10,
		width: "80%",
		height: 60,
		borderColor: "#C0C0C0"
	}) ;
		button = Ti.UI.createButton({
		title: "Accept",
		height: 50,
		width: "80%",
		bottom: 120,
		borderColor: "#C0C0C0"
	});
		but2 = Ti.UI.createButton({
		title: "Back",
		height: 50,
		width: "80%",
		bottom: 50,
		borderColor: "#C0C0C0"
	});
	
	button.addEventListener("click", create);
	but2.addEventListener("click", back);
	win2.add(numberText, nameText, button, but2);
	tabGroup.addTab(tab2);	
	
};	

exports.upd = upd;
exports.numTxt = numTxt;
exports.namTxt = namTxt;
exports.numberText = numberText;
exports.nameText = nameText;
exports.setUp = setUp;
exports.start = start;
exports.data = data;
exports.read = read;
