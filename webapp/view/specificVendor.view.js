sap.ui.jsview("sapui5.dashboardDashBoardTest.view.specificVendor", {

	getControllerName: function() {

		return "sapui5.dashboardDashBoardTest.controller.specificVendor";
	},

	createContent: function(oController) {
		var app = new sap.m.SplitApp({});

		var inputPage = new sap.m.Page({
			id: "masterSubSpecificVendorPage",
			showNavButton: true,
			navButtonTap: [oController.eventTile, oController]
		});

		var list = new sap.m.List({
			id: "sListIdSpecificVendors"
		});

		var itemTemplate = new sap.m.StandardListItem({
			title: "{specificVendor>docId}",
			info: "{specificVendor>rmwwr} {specificVendor>waers} ",
			description: "{specificVendor>archiveDate}",
			type: "Active",
			press: function(evt) {
				oController.listItemPress(evt);
			}
		});

		list.bindItems("specificVendor>/", itemTemplate);

		var input = new sap.m.SearchField({
			placeholder: "Search By document id",
			width: "100%",
			search: [oController.onFilterInvoices, oController]
		});
		inputPage.addContent(input);
		inputPage.addContent(list);

		var resultPage = new sap.m.Page({
			title: "Details",
			navButtonText: "Back",
			showNavButton: "{device>/isPhone}"
		});

		app.addMasterPage(inputPage);
		app.addDetailPage(resultPage);

		var details = new sap.ui.layout.form.SimpleForm({
			layout: "ResponsiveGridLayout",
			editable: true,
			content: [
				new sap.ui.layout.HorizontalLayout({
					allowWrapping: true,
					content: [new sap.m.Label({
							text: "Document ID"
						}),
						new sap.m.Text({
							text: "{selModel>/docId}"
						}),
						new sap.m.Label({
							text: "Document Type"
						}),
						new sap.m.Text({
							text: "{selModel>/docType}"
						}),
						new sap.m.Label({
							text: "Status"
						}),
						new sap.m.Text({
							text: "{selModel>/status}"
						}),
						new sap.m.Label({
							text: "Process Type"
						}),
						new sap.m.Text({
							text: "{selModel>/currProcType}"
						}),
						new sap.m.Label({
							text: "Company code"
						}),
						new sap.m.Text({
							text: "{selModel>/bukrs}"
						}),
						new sap.m.Label({
							text: "Accounting Document Number"
						}),
						new sap.m.Text({
							text: "{selModel>/belnr}"
						}),
						new sap.m.Label({
							text: "Fiscal Year"
						}),
						new sap.m.Text({
							text: "{selModel>/gjahr}"
						}),
						new sap.m.Label({
							text: "Document Date in Document"
						}),
						new sap.m.Text({
							text: "{selModel>/bldat}"
						}), new sap.m.Label({
							text: "Posting Date in the Document"
						}),
						new sap.m.Text({
							text: "{selModel>/budat}"
						}),
						new sap.m.Label({
							text: "Reference Document Number"
						}),
						new sap.m.Text({
							text: "{selModel>/xblnr}"
						}),
						new sap.m.Label({
							text: "Gross invoice amount in document currency"
						}),
						new sap.m.Text({
							text: "{selModel>/rmwwr}"
						}),
						new sap.m.Label({
							text: "Currency Key"
						}),
						new sap.m.Text({
							text: "{selModel>/waers}"
						}),
						new sap.m.Label({
							text: "Account Number of Vendor or Creditor"
						}),
						new sap.m.Text({
							text: "{selModel>/lifnr}"
						}),
						new sap.m.Label({
							text: "Name 1"
						}),
						new sap.m.Text({
							text: "{selModel>/vendName}"
						}),
						new sap.m.Label({
							text: "Name 2"
						}),
						new sap.m.Text({
							text: "{selModel>/vendName2}"
						})
					]
				}),
				new sap.ui.layout.HorizontalLayout({
					allowWrapping: true,
					content: [
						new sap.m.Label({
							text: "Purchasing Document Number"
						}),
						new sap.m.Text({
							text: "{selModel>/ebeln}"
						}),
						new sap.m.Label({
							text: "Credit Memo Indicator"
						}),
						new sap.m.Text({
							text: "{selModel>/creditMemo}"
						}),
						new sap.m.Label({
							text: "Net amount"
						}),
						new sap.m.Text({
							text: "{selModel>/netAmount}"
						}),
						new sap.m.Label({
							text: "Gross amount"
						}),
						new sap.m.Text({
							text: "{selModel>/grossAmount}"
						}),
						new sap.m.Label({
							text: "Vat amount"
						}),
						new sap.m.Text({
							text: "{selModel>/vatAmount}"
						}),
						new sap.m.Label({
							text: "Total tax amount"
						}),
						new sap.m.Text({
							text: "{selModel>/totTaxAmount}"
						}),
						new sap.m.Label({
							text: "Freight amount"
						}),
						new sap.m.Text({
							text: "{selModel>/freightAmount}"
						}),
						new sap.m.Label({
							text: "Handling charges"
						}),
						new sap.m.Text({
							text: "{selModel>/handlingCharges}"
						}),
						new sap.m.Label({
							text: "Unallocated exp"
						}),
						new sap.m.Text({
							text: "{selModel>/unAllocatedExp}"
						}),
						new sap.m.Label({
							text: "VAT Registration Number"
						}),
						new sap.m.Text({
							text: "{selModel>/vendorVatNo}"
						}),
						new sap.m.Label({
							text: "Tax number at responsible tax office"
						}),
						new sap.m.Text({
							text: "{selModel>/vendorTaxNo}"
						}),

						new sap.m.Label({
							text: "VAT Registration Number"
						}),
						new sap.m.Text({
							text: "{selModel>/recepientVatNo}"
						}),
						new sap.m.Label({
							text: "Fiscal Representative VAT Number"
						}),
						new sap.m.Text({
							text: "{selModel>/fiscalRepVatN}"
						}),
						new sap.m.Label({
							text: "Country Key"
						}),
						new sap.m.Text({
							text: "{selModel>/remitLand1}"
						})
					]
				})
			]
		});
		resultPage.addContent(details);

		return app;

	}

});