sap.ui.jsview("sapui5.dashboardDashBoardTest.view.searchPage", {

	getControllerName: function() {

		return "sapui5.dashboardDashBoardTest.controller.searchPage";
	},

	createContent: function(oController) {

		var l_date = new sap.m.Title({
			width: "100%",
			text: "Select Archive date: "
		});
		var datePicker = new sap.m.DatePicker({
			width: "30%",
			id: "datepicker"
		});
		var oItemSelectTemplate1 = new sap.ui.core.Item({
             text : "{name}"

         });

		var l_company = new sap.m.Title({
			width: "100%",
			text: "Per Company:"
		});

		var s_company = new sap.m.Select({
			width: "30%",
			id: "selCompany",
			items: {
				template: oItemSelectTemplate1
				
			},
			forceSelection: false
		});
		s_company.bindItems("/",oItemSelectTemplate1);

		var b_search = new sap.m.Button({
			text: "Search",
			width: "20%",
			id: "b_search",
			press: [oController.search, oController]
		});
		
		var box = new sap.m.VBox({
        items: [
          l_date, datePicker, l_company, s_company, b_search
        ]
     });

		var oPage = new sap.m.Page({
			showNavButton: true,
			navButtonTap: [oController.eventTile, oController],
			title: "Search",
			content: [
			box
			]
		});

		var app = new sap.m.App("");
		app.addPage(oPage);
		return app;

	}

});