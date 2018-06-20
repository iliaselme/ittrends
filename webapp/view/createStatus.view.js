sap.ui.jsview("sapui5.dashboardDashBoardTest.view.createStatus", {

	getControllerName: function() {

		return "sapui5.dashboardDashBoardTest.controller.createStatus";
	},

	createContent: function(oController) {
		
		var l_statusName = new sap.m.Title({
			text: "Status name ",
			width: "100%"
		});
		var i_statusName = new sap.m.Input({
			width:"30%",
			id:"i_statusName"
		});
		var l_statusDescription = new sap.m.Title({
			text: "Status description ",
			width: "100%"
		});
		var i_statusDescription = new sap.m.TextArea({
			width:"30%",
			id:"i_statusDescription"
		});
		
		var space = new sap.m.Label({
			width: "100%"
		});
		
		var checkBox = new sap.m.CheckBox({
			id: "c_endstate",
			text: "Endstate"
		});
		
		var button = new sap.m.Button({
			text: "create",
			width: "30%",
			id: "b_createStatus",
			press: [oController.createStatus, oController]
		});

		var oPage = new sap.m.Page({
			showNavButton: true,
			navButtonTap: [oController.eventTile, oController],
			title: "Create new status",
			content: [
				l_statusName,i_statusName,l_statusDescription,i_statusDescription,checkBox,space,button]
		});
		var app = new sap.m.App("");
		app.addPage(oPage);
		return app;

	}

});