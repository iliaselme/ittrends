sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("sapui5.dashboardDashBoardTest.controller.vendorInformation", {
			eventTile: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			if (sessionStorage.getItem("rol") == "user") {
				oRouter.navTo("first");
			} else if (sessionStorage.getItem("rol") == "admin") {
				oRouter.navTo("firstAdmin");
			}
			var model = this.getView().getModel("selModel");
			model.setData(null); //clear data from fields when coming back
		},

		onFilterInvoices: function(oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("name", FilterOperator.Contains, sQuery));
			}
			// filter binding
			var oList = sap.ui.getCore().byId("sListIdVendors");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},

		onInit: function() {

			var oModel = new sap.ui.model.json.JSONModel();
			$.ajax({
				url: "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/vendor",
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
			var docId = context.getProperty("docId");
			//docId saved to search specific json from this docId in webapi 
			var oSelData = "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/oneVendor?" + docId;
			var oSpecificVendor = "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/specificVendor?" + docId; // global model for when the users clicks on the href to have the invoices of one vendor, this will be used in the specificVendor view.
			var oSelModel = new sap.ui.model.json.JSONModel(oSelData);
			var oSpecificModel = new sap.ui.model.json.JSONModel(oSpecificVendor);
			this.getView().setModel(oSelModel, "selModel");
			this.getOwnerComponent().setModel(oSpecificModel, "specificVendor");
			
			// selModel will be used in the view for databinding and show the details from the clicked docid 

		}
	});
});