sap.ui.jsview("sapui5.dashboardDashBoardTest.view.first", {

	getControllerName: function() {

		return "sapui5.dashboardDashBoardTest.controller.first";
	},

	createContent: function(oController) {
		
	//tile 0 general
	var oGeneralT = new sap.m.StandardTile({
			title: "Overview",
			icon: "sap-icon://hint",
			number: "{general>/amount}"
		});

		var oGeneral = new sap.m.CustomTile({
			content: [
				oGeneralT
			]
		});
		//----------------------------------------------------------------------------------------------------------
		


		//tile 1 per group
		var oInvoiceT = new sap.m.StandardTile({
			title: "Per Group",
			icon: "sap-icon://group",
			press: [oController.eventTileTotal, oController]
		});

		var oInvoice = new sap.m.CustomTile({
			content: [
				oInvoiceT
			]
		});
		//----------------------------------------------------------------------------------------------------------
		//tile 2 -- Per Company Code
		
		var oCompanyCodeT = new sap.m.StandardTile({
			icon: "sap-icon://building",
			title: "Per Company Code",
			press: [oController.eventTileCompanyCode, oController]
		});

		var oCompanyCode = new sap.m.CustomTile({
			content: [
			oCompanyCodeT
			]
		});

		//----------------------------------------------------------------------------------------------------------
		//tile 3 --- graphs
			var oGraphT = new sap.m.StandardTile({
			title: "Graphs",
			icon: "sap-icon://bar-chart",
			press: [oController.eventTileGraph, oController]
		});

		var oInProcessInvoice = new sap.m.CustomTile({
			content: [
				oGraphT
			]
		});
		
		//tile 4 --- search date
		var oSearchT = new sap.m.StandardTile({
			title: "Search per archive date",
			icon: "sap-icon://search",
			press: [oController.eventTileSearch, oController]
		});

		var oSearchInvoice = new sap.m.CustomTile({
			content: [
				oSearchT
			]
		});
	
		//tile 5 --- search per vendor
		var oVendorT = new sap.m.StandardTile({
			title: "Search per vendor",
			icon: "sap-icon://customer",
			press: [oController.eventTileVendor, oController]
		});

		var oVendorInvoice = new sap.m.CustomTile({
			content: [
				oVendorT
			]
		});

		var oTileContainer = new sap.m.TileContainer({
			height: "100%",
			tiles: [
			oGeneral,oInvoice, oInProcessInvoice, oSearchInvoice,oVendorInvoice

			]
		});
		var oPage = new sap.m.Page({
			title: "DASHBOARD",
			headerContent: [
				new sap.m.Label({
						text:"last sync {lastSync>/syncTime}"
				}),
				new sap.m.Button({
					width: "40px",
					icon: "sap-icon://synchronize",
					press: [oController.sync, oController]
				}),
				new sap.m.Button({
					width: "100px",
					text: "disconnect",
					type: "Reject",
					press: [oController.disconnect, oController]
				})
			],
			content: [
				oTileContainer
			]
		});

		var app = new sap.m.App("");
		app.addPage(oPage);
		return app;

	}

});