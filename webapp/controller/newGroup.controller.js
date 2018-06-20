sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sapui5.dashboardDashBoardTest.controller.newGroup", {
		eventTile: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("firstAdmin"); // go back to admin page
		},
		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel();
			$.ajax({
				url: "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/newGroup", // all active and inactive groups 
				dataType: 'json',
				success: function(data, textStatus, jqXHR) {
					oModel.setData(data);
					jqXHR.setRequestHeader("Access-Control-Allow-Origin", "*");//CORS allows web applications on one domain to make cross domain AJAX requests to another domain
				}
			});
			this.getView().setModel(oModel);

		},

		create: function() {
			var newGroup = sap.ui.getCore().byId("i_input").getValue();
			if (newGroup == "") {
				alert("input field must be field to create a new group");
			} else {
				var pushData = {

					"group": newGroup

				};
				//json to send to web api to insert group into database
				var data = JSON.stringify(pushData);
				var xhr = new XMLHttpRequest();
				xhr.open("POST", "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/newGroup", true);
				xhr.setRequestHeader("Content-Type", "text/plain");
				xhr.setRequestHeader("Access-Control-Allow-Origin", "*"); // CORS allows web applications on one domain to make cross domain AJAX requests to another domain
				xhr.send(data);
				//window.location.reload();
			}

			sap.ui.getCore().byId("i_input").setValue(""); // set value of input to empty after create 
		},
		listItemPress: function(evt) {
			var context = evt.getSource().getBindingContext();
			var name = context.getProperty("name");
			// name is the groupsname
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("updateStatus"); // go to page where you can update groups and groupstatus

			var url = "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/statusPerGroup?" + name;

			var oGroupModel = new sap.ui.model.json.JSONModel(url);
			this.getOwnerComponent().setModel(oGroupModel, "groupModel");
			// global model for accessibility
		
		},
		goToInactive: function(evt){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("inactive"); // go to groups that are inactive
		}
	});

});