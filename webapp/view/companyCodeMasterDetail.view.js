sap.ui.jsview("sapui5.dashboardDashBoardTest.view.companyCodeMasterDetail", {

	getControllerName: function() {

		return "sapui5.dashboardDashBoardTest.controller.companyCodeMasterDetail";
	},

	createContent: function(oController) {
		var app = new sap.m.App({});
		var page = new sap.m.Page({
			id: "companyCodeMasteroPage",
			showNavButton: true,
			navButtonTap: [oController.eventTile, oController]
		});

		var list = new sap.m.List({
			id: "companyCodesListId"
		});

		var itemTemplate = new sap.m.StandardListItem({
			title: "{name}",
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