sap.ui.jsview("sapui5.dashboardDashBoardTest.view.firstAdmin", {

	getControllerName: function() {

		return "sapui5.dashboardDashBoardTest.controller.firstAdmin";
	},

	createContent: function(oController) {

		//tile 1 per group
		var oGroupT = new sap.m.StandardTile({
			title: "Per Group",
			icon: "sap-icon://group",
			press: [oController.eventTileTotal, oController]
		});

		var oGroup = new sap.m.CustomTile({
			content: [
				oGroupT
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

		var oGraphInvoice = new sap.m.CustomTile({
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


		//tile 6 -- update groups
		var oUpdateGroupsT = new sap.m.StandardTile({
			title: "Update groups",
			icon: "sap-icon://group-2",
			press: [oController.eventTileGroups, oController]
		});

		var oUpdateGroups = new sap.m.CustomTile({
			content: [
				oUpdateGroupsT
			]
		});

		var oTileContainer = new sap.m.TileContainer({
			height: "100%",
			tiles: [
				oGroup, oGraphInvoice,oSearchInvoice,oVendorInvoice, oUpdateGroups

			]
		});
		var oPage = new sap.m.Page({
			title: "DASHBOARD",
			headerContent: [
				new sap.m.Label({
						text:"last sync {/syncTime}"
				}),
				new sap.m.Button({
					width: "40px",
					icon: "sap-icon://synchronize",
					press: [oController.sync, oController]
				}),
				new sap.m.Button({
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