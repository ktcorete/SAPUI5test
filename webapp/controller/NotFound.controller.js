sap.ui.define([
	"com/test02/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.test02.controller.NotFound", {

			onInit: function () {
				this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed, this);
			},

			_onNotFoundDisplayed : function () {
					this.getModel("appView").setProperty("/layout", "OneColumn");
			}
		});
	}
);