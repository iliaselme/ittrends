sap.ui.jsview("sapui5.dashboardDashBoardTest.view.login", {

	getControllerName: function() {

		return "sapui5.dashboardDashBoardTest.controller.login";
	},

	createContent: function(oController) {
		var box = new sap.m.FlexBox({
			alignItems: sap.m.FlexAlignItems.Stretch,
			items: [
				new sap.m.Label({
					id: "l_invisible",
					text: "",
					visible: true,
					design: sap.m.LabelDesign.Bold
				}),
				new sap.m.Label({
					text: "Login",
					design: sap.m.LabelDesign.Bold
				}),
				new sap.m.Input({
					id: "username_1",
					placeholder: "username"
				}),
				new sap.m.Input({
					id: "password_1",
					type: sap.m.InputType.Password,
					placeholder: "password"
				}),
				new sap.m.Button({
					text: "Login",
					press: [oController.sendForm, oController]
				})
			],
			direction: "Column"
		}).setAlignItems("Center").setWidth("100%");

		return box;

	}

});