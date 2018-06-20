sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("sapui5.dashboardDashBoardTest.controller.specificVendor", {
		eventTile: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("first");
			var model = this.getView().getModel("selModel");
			model.setData(null); //clear data from fields when coming back
		},

		onFilterInvoices: function(oEvent) {
			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("docId", FilterOperator.Contains, sQuery));
			}
			// filter binding
			var oList = sap.ui.getCore().byId("sListIdSpecificVendors");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},

		listItemPress: function(evt) {
			var context = evt.getSource().getBindingContext("specificVendor");
			console.log(context)
			var docId = context.getProperty("docId");
			//docId saved to search specific json from this docId in webapi 
			var oSelData = "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/detail?" + docId;
			var oSelModel = new sap.ui.model.json.JSONModel(oSelData);
			this.getView().setModel(oSelModel, "selModel");
			// selModel will be used in the view for databinding and show the details from the clicked docid 

		}
	});
});