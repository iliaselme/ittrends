sap.ui.jsview("sapui5.dashboardDashBoardTest.view.newGroup", {

	getControllerName: function() {

		return "sapui5.dashboardDashBoardTest.controller.newGroup";
	},

	createContent: function(oController) {
		
		var list = new sap.m.List({
			id: "groupenListId"
		});
		var itemTemplate = new sap.m.StandardListItem({
			title: "{name}",
			type: "DetailAndActive",
			press: function(evt) {
				oController.listItemPress(evt);
			}
		});
		
		var oPage = new sap.m.Page({
			showNavButton: true,
			navButtonTap: [oController.eventTile, oController],
			title: "Modify Groups"
		});
		var input = new sap.m.Input({
			width:"30%",
			id:"i_input",
			text: "create",
			placeholder: "new group"
		});
		
		var buttonCreate = new sap.m.Button({
			text: "create",
			width: "40%",
			id: "b_create",
			press: [oController.create, oController]
		});
		
		var goToInactive = new sap.m.Button({
			text: "Inactive groups",
			press: [oController.goToInactive, oController]
		});
		
		list.bindItems("/0/group", itemTemplate);
		oPage.addContent(list);
		oPage.addContent(input);
		oPage.addContent(buttonCreate);
		oPage.addContent(goToInactive);

		var app = new sap.m.App("");
			app.addPage(oPage);
			return app;
	
	}

});