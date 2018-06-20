sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sapui5.dashboardDashBoardTest.controller.updateStatusPerGroup", {
		eventTile: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("groups");
		},
		changeActive: function() {
			var toggleStatus = sap.ui.getCore().byId("toggle");
			var page = sap.ui.getCore().byId("page");
			var isActive;
			if (toggleStatus.getState() == true) {
				isActive = "true";
			} else
				isActive = "false"
			var pushData = {
				"group": page.getTitle(), // groupname
				"active": isActive // send togglestatus

			};
			var data = JSON.stringify(pushData);
			var xhr = new XMLHttpRequest();
			xhr.open("POST", "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/statusPerGroup", true);
			xhr.setRequestHeader("Content-Type", "text/plain");
			xhr.setRequestHeader("Access-Control-Allow-Origin", "*");//CORS allows web applications on one domain to make cross domain AJAX requests to another domain
			xhr.send(data);
		},
		updateGroupName: function(evt) {
			var newGroup = sap.ui.getCore().byId("i_update").getValue();
			var page = sap.ui.getCore().byId("page");
			var isActive;
			if (newGroup == "") {
				alert("input field must be filled to update the group name");
			} else {
				var pushData = {

					"group": page.getTitle(), // groupname
					"name": newGroup // send togglestatus

				};
				var data = JSON.stringify(pushData);
				var xhr = new XMLHttpRequest();
				xhr.open("POST", "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/newGroup", true);
				xhr.setRequestHeader("Content-Type", "text/plain");
				xhr.setRequestHeader("Access-Control-Allow-Origin", "*"); //CORS allows web applications on one domain to make cross domain AJAX requests to another domain
				xhr.send(data);
			}
			sap.ui.getCore().byId("page").setTitle(newGroup);
			sap.ui.getCore().byId("i_update").setValue(""); // after update field is empty
		},
		updateActiveStatus: function(evt) {
			var table = sap.ui.getCore().byId("table");
			var page = sap.ui.getCore().byId("page");
			var aSelected = table.getColumns()[2]._aTemplateClones;
			var obj = aSelected[0];
			var active = obj.mProperties.checked;
			var dataArray = [];
			for (var i = 0; i < aSelected.length; i++) { // select all checkboxes state from the table and put the data in an array
				obj = aSelected[i];
				active = obj.mProperties.checked;
					var dataJson = {
					"id": i + 1,
					"active": active,
					"group": page.getTitle()
				};
			dataArray.push(dataJson);
			}
			var json = JSON.stringify(dataArray);
			console.log(json)
			var xhr = new XMLHttpRequest();
				xhr.open("POST", "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/updateStatusPerGroup", true);
				xhr.setRequestHeader("Content-Type", "text/plain");
				xhr.setRequestHeader("Access-Control-Allow-Origin", "*");//CORS allows web applications on one domain to make cross domain AJAX requests to another domain
				xhr.send(json);
			// send json with state of checkbox per status
		},
		createStatus: function(evt){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("createStatus");
		}

	});

});