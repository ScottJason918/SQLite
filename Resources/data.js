Ti.Database.install("DBase.sqlite", "table");
var data= [];

var fun = function(e){
	var object = JSON.stringify(e.source);
	//var name = e.source.name;
	console.log(object);
};

var read = function() {
 	var win2 = Titanium.UI.createWindow({  
	    title:'Contacts',
	    backgroundColor:'#fff',
	});
	var tab2 = Titanium.UI.createTab({  
    	icon:'KS_nav_views.png',
    	title:'Contacts',
	    window:win2
 	});

	var db = Ti.Database.open("table");
	var rows = db.execute("SELECT name, id, number FROM table");
	while(rows.isValidRow()){
		var id = rows.fieldByName("id");
		var name = rows.fieldByName("name");
		var number = rows.fieldByName("number");
		data.push({
			id: id,
			name: name,
			hasChild: true,
			num : number
		});
		rows.next();
	}

	for(i=0; i < data.length; i++){
		var rowz = Ti.UI.createTableViewRow({
			id: data[i].id,
			title: data[i].name,
			number: data[i].num,
			hasChild: true
		});
		tblSection.add(rowz);
	};

	rows.close(); 
	db.close();
	tabGroup.addTab(tab2);
	win2.add(tableView);
	tabGroup.open();
	tableView.addEventListener("click", fun);
};
var setUp = function(){	
	var win2 = Titanium.UI.createWindow({  
	    title:'Add',
	    backgroundColor:'#fff'
	});
	var tab2 = Titanium.UI.createTab({  
	    icon:'KS_nav_ui.png',
	    title:'Add',
	    window:win2
	});
		
	var nameText = Ti.UI.createTextField({
		borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: 50,
		hintText: "Enter Name Here",
		paddingLeft: 10,
		width: "80%",
		height: 60,
		borderColor: "#C0C0C0"
	}) ;
	var nickText = Ti.UI.createTextField({
		borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: 120,
		hintText: "Enter Nick Name Here",
		paddingLeft: 10,
		width: "80%",
		height: 60,
		borderColor: "#C0C0C0"
	}) ;

	var numberText = Ti.UI.createTextField({
		borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: 190,
		hintText: "Enter Number Here",
		paddingLeft: 10,
		width: "80%",
		height: 60,
		borderColor: "#C0C0C0"
	}) ;
	var button = Ti.UI.createButton({
		title: "Accept",
		height: 50,
		width: "80%",
		bottom: 50,
		borderColor: "#C0C0C0"
	});
	//button.addEventListener("click", functions.update);
	win2.add(numberText, nameText, nickText, button);
	tabGroup.addTab(tab2);	
	
};	



exports.setUp = setUp;
// exports.create = create;
exports.read = read;
exports.data = data;

