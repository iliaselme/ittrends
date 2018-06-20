sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sapui5.dashboardDashBoardTest.controller.first", {
		onInit: function(oEvent) {
			var oModel = new sap.ui.model.json.JSONModel();
			$.ajax({
				url: "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/lastSync",
				dataType: 'json',
				success: function(data, textStatus, jqXHR) {
					oModel.setData(data);
					jqXHR.setRequestHeader("Access-Control-Allow-Origin", "*"); //CORS allows web applications on one domain to make cross domain AJAX requests to another domain
				}

			});
			this.getView().setModel(oModel,"lastSync");
			
			var oModelGeneral = new sap.ui.model.json.JSONModel();
			$.ajax({
				url: "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/general",
				dataType: 'json',
				success: function(data, textStatus, jqXHR) {
					oModelGeneral.setData(data);
					jqXHR.setRequestHeader("Access-Control-Allow-Origin", "*"); //CORS allows web applications on one domain to make cross domain AJAX requests to another domain
				}

			});
			this.getView().setModel(oModelGeneral,"general");
		},
		eventTileCompanyCode: function(oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("companyCodeMaster");
		},
		eventTileGraph: function(oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("graph");
		},
		eventTileTotal: function(oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("total");
		},
		eventTileSearch: function(oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("search");
		},
		eventTileVendor: function(oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("vendor");
		},
		disconnect: function(oEvent) {
			sessionStorage.removeItem("rol"); // remove rol sessionVariable
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("login");
		},
		sync: function(oEvent) {

			$.ajax({
				url: "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/ODataHandler",
				type: 'GET',
				success: function(data, textStatus, jqXHR) {
					jqXHR.setRequestHeader("Access-Control-Allow-Origin", "*"); //CORS allows web applications on one domain to make cross domain AJAX requests to another domain
				}
			});
			this.intervalHandle = setInterval(function() {
				window.location.reload();
			}, 6000); //after 6 seconds refresh page

		}

	});

});