sap.ui.jsview("sapui5.dashboardDashBoardTest.view.vendorInformation", {

	getControllerName: function() {

		return "sapui5.dashboardDashBoardTest.controller.vendorInformation";
	},

	createContent: function(oController) {
			var app = new sap.m.SplitApp({});

		var inputPage = new sap.m.Page({
			id: "masterSubVendorPage",
			showNavButton: true,
			navButtonTap: [oController.eventTile, oController]
		});

		var list = new sap.m.List({
			id: "sListIdVendors"
		});

		var itemTemplate = new sap.m.StandardListItem({
			title: "{name}",
			type: "Active",
			press: function(evt) {
				oController.listItemPress(evt);
			}
		});

		list.bindItems("/", itemTemplate);
		

		var input = new sap.m.SearchField({
			placeholder: "Search By name",
			width: "100%",
			search: [oController.onFilterInvoices, oController]
		});
		inputPage.addContent(input);
		inputPage.addContent(list);

		var resultPage = new sap.m.Page({
			title: "Details",
			navButtonText: "Back",
			showNavButton: "{device>/isPhone}",
			id: "resultSubCategory"
		});

		app.addMasterPage(inputPage);
		app.addDetailPage(resultPage);

		var lijst = new sap.ui.layout.form.SimpleForm({
			layout: "ResponsiveGridLayout",
			editable: true,
			content: [
				new sap.m.Label({
					text: "Name"
				}),
				new sap.m.Text({
					text: "{selModel>/name}"
				}),
				new sap.m.Label({
					text: "Total Gross invoice amount in document currency"
				}),
				new sap.m.Text({
					text: "{selModel>/totalRmwwr}"
				}),
				new sap.m.Label({
					text: "Amount of Invoices"
				}),
				new sap.m.Text({
					text: "{selModel>/amountInvoices}"
				}),
				new sap.m.Label({
					text: "Average Gross invoice amount in document currency"
				}),
				new sap.m.Text({
					text: "{selModel>/avgRmwwr}"
				}),
				new sap.m.Label({
					text: "Country Key"
				}),
				new sap.m.Text({
					text: "{selModel>/remitLand}"
				}),
				new sap.m.Label({
					text: ""
				}),
				new sap.m.Link({
					href: "https://webidetesting3628728-p2000155541trial.dispatcher.hanatrial.ondemand.com/webapp/index.html?hc_orionpath=%2Fp2000155541trial%24P2000155541-OrionContent%2FDashBoardTest&origional-url=index.html&sap-ui-appCacheBuster=..%2F&sap-ui-xx-componentPreload=off#/specificVendor",
					text: "invoices of {selModel>/name}",
					target: "_self"
				})
			]
		});
		resultPage.addContent(lijst);

		return app;
		
	}

});