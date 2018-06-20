sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sapui5.dashboardDashBoardTest.controller.graphEndState", {
	
		eventTile: function() {
			// rol is session variable, check if rol is user then navigate to user screen, else go to admin screen 
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			if(sessionStorage.getItem("rol") == "user"){
				oRouter.navTo("first");	
			}
			else if(sessionStorage.getItem("rol") == "admin"){
				oRouter.navTo("firstAdmin");	
			}
		},
		onInit: function() {
			var oVizFrame = sap.ui.getCore().byId("idColumn");

			var oModel = new sap.ui.model.json.JSONModel();
			$.ajax({
				url: "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/graphEndState",
				dataType: 'json',
				success: function(data, textStatus, jqXHR) {
					oModel.setData(data);
					jqXHR.setRequestHeader("Access-Control-Allow-Origin", "*");//CORS allows web applications on one domain to make cross domain AJAX requests to another domain
				}

			});
			this.getView().setModel(oModel);

			//set viz properties
			oVizFrame.setVizProperties({
				plotArea: {
					colorPalette: d3.scale.category20().range(),
					dataLabel: {
						showTotal: true
					}
				},
				tooltip: {
					visible: true
				},
				title: {
					text: "Count of doc id - Endstate"
				}
			});

			var oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions: [{
					name: 'Archivedate',
					value: '{archiveDate}'
				}],
				measures: [{
					name: 'X',
					value: '{amountTrue}'
				}, {
					name: 'O',
					value: '{amountFalse}'
				}],

				data: {
					path: "/"
				}

			});

			oVizFrame.setDataset(oDataset);
			oVizFrame.setModel(oModel);

			var oFeedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					"uid": "valueAxis",
					"type": "Measure",
					"values": ["X"]
				}),
				oFeedValueAxis1 = new sap.viz.ui5.controls.common.feeds.FeedItem({
					"uid": "valueAxis",
					"type": "Measure",
					"values": ["O"]
				}),
				oFeedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					"uid": "categoryAxis",
					"type": "Dimension",
					"values": ["Archivedate"]
				});

			oVizFrame.addFeed(oFeedValueAxis);
			oVizFrame.addFeed(oFeedValueAxis1);
			oVizFrame.addFeed(oFeedCategoryAxis);

			var oVizFrame2 = sap.ui.getCore().byId("idColumn2");

			var oModel2 = new sap.ui.model.json.JSONModel();
			$.ajax({
				url: "https://invoicep2000155541trial.hanatrial.ondemand.com/testDynamicSap/graphAmountDocPerCoCd_Group",
				dataType: 'json',
				success: function(data, textStatus, jqXHR) {
					oModel2.setData(data);
					jqXHR.setRequestHeader("Access-Control-Allow-Origin", "*");//CORS allows web applications on one domain to make cross domain AJAX requests to another domain
				}
			});
			this.getView().setModel(oModel2, "docPerCoCd");

			//set viz properties
			oVizFrame2.setVizProperties({
				plotArea: {
					colorPalette: d3.scale.category20().range(),
					dataLabel: {
						showTotal: true
					}
				},
				tooltip: {
					visible: true
				},
				title: {
					text: "Document status per company"
				}
			});

			var oDataset2 = new sap.viz.ui5.data.FlattenedDataset({
				dimensions: [{
					name: 'company',
					value: '{coCd}'
				}],
				measures: [{
					name: 'groep1',
					value: '{groep1}'
				}, {
					name: 'groep2',
					value: '{groep2}'
				}, {
					name: 'groep3',
					value: '{groep3}'
				}, {
					name: 'groep4',
					value: '{groep4}'
				}, {
					name: 'groep5',
					value: '{groep5}'
				}, {
					name: 'groep6',
					value: '{groep6}'
				}, {
					name: 'groep7',
					value: '{groep7}'
				}],

				data: {
					path: "docPerCoCd>/"
				}

			});

			oVizFrame2.setDataset(oDataset2);
			oVizFrame2.setModel(oModel2);

			var oFeedValueAxis3 = new sap.viz.ui5.controls.common.feeds.FeedItem({
					"uid": "valueAxis",
					"type": "Measure",
					"values": ["groep1"]
				}),
				oFeedValueAxis4 = new sap.viz.ui5.controls.common.feeds.FeedItem({
					"uid": "valueAxis",
					"type": "Measure",
					"values": ["groep2"]
				}),
				oFeedValueAxis5 = new sap.viz.ui5.controls.common.feeds.FeedItem({
					"uid": "valueAxis",
					"type": "Measure",
					"values": ["groep3"]
				}),
				oFeedValueAxis6 = new sap.viz.ui5.controls.common.feeds.FeedItem({
					"uid": "valueAxis",
					"type": "Measure",
					"values": ["groep4"]
				}),
				oFeedValueAxis7 = new sap.viz.ui5.controls.common.feeds.FeedItem({
					"uid": "valueAxis",
					"type": "Measure",
					"values": ["groep5"]
				}),
				oFeedValueAxis8 = new sap.viz.ui5.controls.common.feeds.FeedItem({
					"uid": "valueAxis",
					"type": "Measure",
					"values": ["groep6"]
				}),
				oFeedValueAxis9 = new sap.viz.ui5.controls.common.feeds.FeedItem({
					"uid": "valueAxis",
					"type": "Measure",
					"values": ["groep7"]
				}),
				oFeedCategoryAxis1 = new sap.viz.ui5.controls.common.feeds.FeedItem({
					"uid": "categoryAxis",
					"type": "Dimension",
					"values": ["company"]
				});

			oVizFrame2.addFeed(oFeedValueAxis3);
			oVizFrame2.addFeed(oFeedValueAxis4);
			oVizFrame2.addFeed(oFeedValueAxis5);
			oVizFrame2.addFeed(oFeedValueAxis6);
			oVizFrame2.addFeed(oFeedValueAxis7);
			oVizFrame2.addFeed(oFeedValueAxis8);
			oVizFrame2.addFeed(oFeedValueAxis9);
			oVizFrame2.addFeed(oFeedCategoryAxis1);

		}

	});

});