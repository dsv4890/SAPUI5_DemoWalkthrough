sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/synconic/practics/SAPUI5_Walkthrough/model/models",
	"sap/ui/model/json/JSONModel"
], function(UIComponent, Device, models,JSONModel) {
	"use strict";

	return UIComponent.extend("com.synconic.practics.SAPUI5_Walkthrough.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init : function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// set data model
			var oData = {
				recipient : {
					name : "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
		}
	});
});