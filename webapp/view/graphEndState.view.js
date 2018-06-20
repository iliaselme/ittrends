sap.ui.jsview("sapui5.dashboardDashBoardTest.view.graphEndState", {

	getControllerName: function() {
		return "sapui5.dashboardDashBoardTest.controller.graphEndState";
	},

	createContent: function(oController) {

		var vizFrame = new sap.viz.ui5.controls.VizFrame({
			id: "idColumn",
			vizType: "stacked_column",
			width: "100%",
			height: "100%"
		});

		var vizFrame2 = new sap.viz.ui5.controls.VizFrame({
			id: "idColumn2",
			vizType: "stacked_bar",
			width: "100%",
			height: "100%"
		});

		var page = new sap.m.Page({
			showNavButton: true,
			navButtonTap: [oController.eventTile, oController],
			content: [
				vizFrame, vizFrame2
			]
		});

		return page;

	}

});