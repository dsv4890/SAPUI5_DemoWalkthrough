sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"com/synconic/practics/SAPUI5_Walkthrough/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("com.synconic.practics.SAPUI5_Walkthrough.controller.InvoiceList", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.synconic.practics.SAPUI5_Walkthrough.view.InvoiceList
		 */
		    formatter: formatter,
			onInit: function() {
				var oViewModel = new JSONModel({
					currency: "EUR"
				});
				this.getView().setModel(oViewModel, "view");
			},
			onFilterInvoices : function (oEvent) {
	
				// build filter array
				var aFilter = [];
				var sQuery = oEvent.getParameter("query");
				if (sQuery) {
					aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
				}
	
				// filter binding
				var oList = this.byId("invoiceList");
				var oBinding = oList.getBinding("items");
				oBinding.filter(aFilter);
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.synconic.practics.SAPUI5_Walkthrough.view.InvoiceList
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.synconic.practics.SAPUI5_Walkthrough.view.InvoiceList
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.synconic.practics.SAPUI5_Walkthrough.view.InvoiceList
		 */
		//	onExit: function() {
		//
		//	}

	});

});