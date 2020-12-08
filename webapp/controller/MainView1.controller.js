sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
], function (Controller, JSONModel, Fragment) {
	"use strict";

	return Controller.extend("home.kpmg.Exercise2.controller.MainView1", {
		onInit: function () {
			 // set data model on view
         var oData = {
            recipient : {
               name : "Martin"
            }
         };
         var oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
         var productsModel = this.getView().getModel('productsModel');
      },
     onOpenDialog : function () {
			var oView = this.getView();

			// create dialog lazily
			if (!this.pDialog) {
				this.pDialog = Fragment.load({
					id: oView.getId(),
					name: "home.kpmg.Exercise2.view.HelloDialog",
					controller: this
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					return oDialog;
				});
			} 
			this.pDialog.then(function(oDialog) {
				oDialog.open();
			});
		},
		onCloseDialog : function () {
			// note: We don't need to chain to the pDialog promise, since this event-handler
			// is only called from within the loaded dialog itself.
			this.byId("helloDialog").close();
		}
	});
});