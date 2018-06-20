sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sapui5.dashboardDashBoardTest.controller.searchPage", {
		eventTile: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			if (sessionStorage.getItem("rol") == "user") {
				oRouter.navTo("first");
			} else if (sessionStorage.getItem("rol") == "admin") {
				oRouter.navTo("firstAdmin");
			}
		},
		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel();
			$.ajax({
				url: "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/perCompanyCode",
				dataType: 'json',
				success: function(data, textStatus, jqXHR) {
					oModel.setData(data);
					jqXHR.setRequestHeader("Access-Control-Allow-Origin", "*"); //CORS allows web applications on one domain to make cross domain AJAX requests to another domain
				}
			});
			this.getView().setModel(oModel);
		},
		search: function() {
			var company = sap.ui.getCore().byId("selCompany").getSelectedItem();
			var date = sap.ui.getCore().byId("datepicker").getValue();
			if (company === null) {
				var tempCompany = "";
			} else if (company !== null) {
				var tempCompany = company.getText();
			}
			if (date === null) {
				var tempDate = "";
			} else if (date !== null) {
				var tempDate = date;
			}
		
			var oSearchedData = "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/search?date=" + tempDate + "&company=" +
				tempCompany;
			// getting json model from the searching screen
			var oSearchedModel = new sap.ui.model.json.JSONModel(oSearchedData);
			this.getOwnerComponent().setModel(oSearchedModel, "groupCompanyCodeModel");
			// global model for accessibility	
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("companyCodeSubCategory");

		}

	});

});