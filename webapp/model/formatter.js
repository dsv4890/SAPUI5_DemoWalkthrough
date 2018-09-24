sap.ui.define([], function () {
	"use strict";
	return {
		statusText: function (sStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return resourceBundle.getText("New");
				case "B":
					return resourceBundle.getText("In Progress");
				case "C":
					return resourceBundle.getText("Done");
				default:
					return sStatus;
			}
		}
	};
});