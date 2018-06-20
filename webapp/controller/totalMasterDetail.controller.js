sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("sapui5.dashboardDashBoardTest.controller.totalMasterDetail", {
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
				aFilter.push(new Filter("\docId", FilterOperator.Contains, sQuery));
			}
			// filter binding
			var oList = sap.ui.getCore().byId("sListId");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},

		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel();
			$.ajax({
				url: "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/perGroup",
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
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("category");
			var oSelData = "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/oneGroup?" + name;

			var oSelModel = new sap.ui.model.json.JSONModel(oSelData);
			//this.getView().setModel(oSelModel, "groepModel");
			this.getOwnerComponent().setModel(oSelModel, "groupModel");
			// global model for accessibility
		}
	});
});