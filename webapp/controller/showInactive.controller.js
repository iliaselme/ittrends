sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sapui5.dashboardDashBoardTest.controller.showInactive", {
		eventTile: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("group");
		},
		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel();
			$.ajax({
				url: "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/newGroup",
				dataType: 'json',
				success: function(data, textStatus, jqXHR) {
					oModel.setData(data);
					jqXHR.setRequestHeader("Access-Control-Allow-Origin", "*");//CORS allows web applications on one domain to make cross domain AJAX requests to another domain
				}
			});
			this.getView().setModel(oModel);

		},
		listItemPress: function(evt) {
			var context = evt.getSource().getBindingContext();
			var name = context.getProperty("name");
			// name is the groupsname
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("updateStatus");

			var url = "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/statusPerGroup?" + name;

			var oGroepModel = new sap.ui.model.json.JSONModel(url);
			//this.getView().setModel(oSelModel, "groepModel");
			this.getOwnerComponent().setModel(oGroepModel, "groupModel");
			// global model for accessibility
		
		}
	});

});