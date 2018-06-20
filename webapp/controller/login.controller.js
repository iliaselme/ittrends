sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sapui5.dashboardDashBoardTest.controller.login", {
		sendForm: function(oEvent) {
			var oModel = new sap.ui.model.json.JSONModel();
			var username = sap.ui.getCore().byId("username_1");
			var password = sap.ui.getCore().byId("password_1");
			$.ajax({
				url: "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/login?username=" + username.getValue() +
					"&password=" + password.getValue(),
				dataType: 'json',
				success: function(data, textStatus, jqXHR) {
					oModel.setData(data);
					jqXHR.setRequestHeader("Access-Control-Allow-Origin", "*");//CORS allows web applications on one domain to make cross domain AJAX requests to another domain
					if(data != null){ // if data is not null it means the username doesn't exist
					if (data.correct == "true") { // if field correct is true it means the username and password is correct
						if(data.active == "true"){ // if active is true it means login is still active 
							if(data.rol == "true"){ // if rol is true it means he is admin
								sap.ui.core.UIComponent.getRouterFor(this).navTo("firstAdmin");
								sessionStorage.setItem("rol", "admin"); 
							}else if (data.rol == "false"){  // it means he is normal user not admin
								sap.ui.core.UIComponent.getRouterFor(this).navTo("first");
								sessionStorage.setItem("rol", "user");
							}
						}else if(data.active == "false"){ // if active is false it means the account is not active in database
							alert("Account is disabled, take contact with the administrator.")
						}
					} else if (data.correct == "false") { // if json field correct is false it means the password is not correct. 
						alert("Password is not correct. Try Again")
					}}else{
						alert("Username doesn't exist");
					}
				},context: this
			});
		}
	});

});