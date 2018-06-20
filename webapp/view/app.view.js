sap.ui.jsview("sapui5.dashboardDashBoardTest.view.app", {

	getControllerName: function() {
		return "sapui5.dashboardDashBoardTest.controller.app";
	},

	createContent: function(oController) {
		
	var app = new sap.m.App("app");
	
	return app;
		
		
	}

});