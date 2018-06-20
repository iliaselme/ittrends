sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sapui5.dashboardDashBoardTest.controller.createStatus", {
	
	createStatus: function() {
			var status = sap.ui.getCore().byId("i_statusName").getValue();
			var description = sap.ui.getCore().byId("i_statusDescription").getValue();
			var endState = sap.ui.getCore().byId("c_endstate").getSelected();
			
			if (status == "") {
				alert("input field must be field to create a new group");
			} else {
				var pushData = {

					"name": status,
					"description": description,
					"endstate": endState

				};
				//json to send to web api to insert group into database
				var data = JSON.stringify(pushData);
				var xhr = new XMLHttpRequest();
				xhr.open("POST", "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/newStatus", true);
				xhr.setRequestHeader("Content-Type", "text/plain");
				xhr.setRequestHeader("Access-Control-Allow-Origin", "*"); // CORS allows web applications on one domain to make cross domain AJAX requests to another domain
				xhr.send(data);
				//window.location.reload();
			}

			sap.ui.getCore().byId("i_statusName").setValue(""); // set value of input to empty after create 
			sap.ui.getCore().byId("i_statusDescription").setValue(""); // set value of input to empty after create 
			sap.ui.getCore().byId("c_endstate").setSelected(false); // set value of input to empty after create 
		}
	});


});