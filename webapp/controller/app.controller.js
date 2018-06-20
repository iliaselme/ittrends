sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	// for navigation - rootview
	return Controller.extend("sapui5.dashboardDashBoardTest.controller.app", {

			onInit: function() {
				this.modelServices();
			},

			modelServices: function() {
				this.intervalHandle = setInterval(function() {
						//No need to create and assign a new model each time. Just load the data. 
						$.ajax({
							url: "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/ODataHandler",
							type: 'GET',
							success: function(data, textStatus, jqXHR) {
								jqXHR.setRequestHeader("Access-Control-Allow-Origin", "*"); //CORS allows web applications on one domain to make cross domain AJAX requests to another domain
							}
						});
						$.ajax({
							url: "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/lastSync",
							dataType: 'json',
							success: function(data, textStatus, jqXHR) {
								oModel.setData(data);
								jqXHR.setRequestHeader("Access-Control-Allow-Origin", "*"); //CORS allows web applications on one domain to make cross domain AJAX requests to another domain
							}

						});
						this.intervalHandle = setInterval(function() {
								window.location.reload();
							}
						, 6000); //after 6 seconds refresh page

				}, 600000); // sync data every 10 min and lastSync saves the new time of syncing

		},
		onExit: function() {
			// You should stop the interval on exit. 
			// You should also stop the interval if you navigate out of your view and start it again when you navigate back. 
			if (this.intervalHandle)
				clearInterval(this.intervalHandle);
		}
	});

});