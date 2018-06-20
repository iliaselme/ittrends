sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("sapui5.dashboardDashBoardTest.controller.companyCodeMasterDetail", {
		eventTile: function() {
			// rol is session variable, check if rol is user then navigate to user screen, else go to admin screen 
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			if (sessionStorage.getItem("rol") == "user") {
				oRouter.navTo("first");
			} else if (sessionStorage.getItem("rol") == "admin") {
				oRouter.navTo("firstAdmin");
			}
		},

		onFilterInvoices: function(oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("\docId", FilterOperator.Contains, sQuery)); //filter on docId 
			}
			// filter binding
			var oList = sap.ui.getCore().byId("companyCodesListId");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},

		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel();
			$.ajax({
				url: "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/perCompanyCode",
				dataType: 'json',
				success: function(data, textStatus, jqXHR) {
					oModel.setData(data);
					jqXHR.setRequestHeader("Access-Control-Allow-Origin", "*");//CORS allows web applications on one domain to make cross domain AJAX requests to another domain
				}

			});
			this.getView().setModel(oModel);
		},
		backTriggered: function() {
			var app = sap.ui.getCore().byId("App");
			app.backToPage("companyCodeMasteroPage");
		},

		listItemPress: function(evt) {
			var context = evt.getSource().getBindingContext();
			var name = context.getProperty("name");
			// name is the companycode 
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("companyCodeSubCategory");

			var oSelData = "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/oneCompanyCode?" + name;
			// getting json model from the specific companycode
			var oSelModel = new sap.ui.model.json.JSONModel(oSelData);
			//this.getView().setModel(oSelModel, "groepModel");
			this.getOwnerComponent().setModel(oSelModel, "groupCompanyCodeModel");
			// global model for accessibility
		}
	});
});