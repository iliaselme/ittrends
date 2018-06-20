sap.ui.jsview("sapui5.dashboardDashBoardTest.view.updateStatusPerGroup", {

	getControllerName: function() {

		return "sapui5.dashboardDashBoardTest.controller.updateStatusPerGroup";
	},

	createContent: function(oController) {

		var toggle = new sap.m.Switch({
			id: "toggle",
			state: "{groupModel>/active}",
			change: [oController.changeActive, oController]
		});

		var oPage = new sap.m.Page({
			id: "page",
			showNavButton: true,
			navButtonTap: [oController.eventTile, oController],
			title: "{groupModel>/name}"
		});

		var tableGroupStatus = new sap.ui.table.Table({
			id: "table",
			title: "Details",
			visibleRowCount: 73,
			selectionChange: [oController.onSelectionChange, oController]

		});
		var oControl = new sap.ui.commons.TextView({
			id: "listItem",
			text: "{groupModel>\id}"
		});
		tableGroupStatus.addColumn(new sap.ui.table.Column({
			id: "status",
			width: "70px",
			label: new sap.ui.commons.Label({
				text: "Status"
			}),
			template: oControl
		}));

		var oControl = new sap.ui.commons.TextView({
			text: "{groupModel>\description}"
		});
		tableGroupStatus.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({
				text: "Description"
			}),
			template: oControl
		}));
		
		var oControl = new sap.ui.commons.CheckBox({
			checked: '{groupModel>\active}'
		});
		tableGroupStatus.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({
				text: "active"
			}),
			template: oControl
		}));
		
		var input = new sap.m.Input({
			width:"30%",
			id:"i_update",
			text: "create",
			placeholder: "new group name"
		});
		
		var buttonUpdate = new sap.m.Button({
			text: "update",
			width: "20%",
			id: "b_update",
			press: [oController.updateGroupName, oController]
		});
		var createStatus = new sap.m.Button({
			text: "create new status",
			width: "20%",
			id: "b_createStatus",
			press: [oController.createStatus, oController]
		});
		
		var button = new sap.m.Button({
    	 text: 'Update active Status',
    	 press : [oController.updateActiveStatus, oController]
        });
        
		
		tableGroupStatus.bindRows("groupModel>/items");
		oPage.addContent(toggle);
		oPage.addContent(button);
		oPage.addContent(input);
		oPage.addContent(buttonUpdate);
		oPage.addContent(createStatus);
		oPage.addContent(tableGroupStatus);
		

		var app = new sap.m.App("");
		app.addPage(oPage);
		return app;

	}

});