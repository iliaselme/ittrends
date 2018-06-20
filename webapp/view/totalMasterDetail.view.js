sap.ui.jsview("sapui5.dashboardDashBoardTest.view.totalMasterDetail", {

	getControllerName: function() {

		return "sapui5.dashboardDashBoardTest.controller.totalMasterDetail";
	},

	createContent: function(oController) {
		var app = new sap.m.App({});

		var page = new sap.m.Page({
			id: "masteroPage",
			showNavButton: true,
			navButtonTap: [oController.eventTile, oController]
		});

		var list = new sap.m.List({
			id: "sListId"
		});

		var itemTemplate = new sap.m.StandardListItem({
			title: "{name}",
			description: "{aantal} - {percentage}%",
			type: "Navigation",
			press: function(evt) {
				oController.listItemPress(evt);
			}
		});

		list.bindItems("/", itemTemplate);
		page.addContent(list);

	
		app.addPage(page);
		
		return app;
	}

});