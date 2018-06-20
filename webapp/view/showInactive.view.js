sap.ui.jsview("sapui5.dashboardDashBoardTest.view.showInactive", {

	getControllerName: function() {

		return "sapui5.dashboardDashBoardTest.controller.showInactive";
	},

	createContent: function(oController) {
		
		var list = new sap.m.List({
			id: "groupenInactiveListId"
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
		
		list.bindItems("/1/group", itemTemplate);
		oPage.addContent(list);

		var app = new sap.m.App("");
			app.addPage(oPage);
			return app;
	
	}

});