sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("sapui5.dashboardDashBoardTest.controller.totalSubCategory", {
		eventTile: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("total");
			var model = this.getView().getModel("selModel");
			model.setData(null); //clear data from fields when coming back
		},

		onFilterInvoices: function(oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("\docId", FilterOperator.Contains, sQuery));
			}
			// filter binding
			var oList = sap.ui.getCore().byId("sListIdSubCategory");
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
			var context = evt.getSource().getBindingContext("groupModel");
			var docId = context.getProperty("docId");
			//docId saved to search specific json from this docId in webapi 
			var oSelData = "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/detail?" + docId;

			var oSelModel = new sap.ui.model.json.JSONModel(oSelData);
			this.getView().setModel(oSelModel, "selModel");
			// selModel will be used in the view for databinding and show the details from the clicked docid 

		}
	});
});