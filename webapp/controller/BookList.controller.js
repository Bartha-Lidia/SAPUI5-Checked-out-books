sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/odata/v2/ODataModel'
], function (Controller, ODataModel) {
    "use strict";

    return Controller.extend("org.ubb.books.controller.BookList", {
        onInit: function () {
            let oModel, oView;

            oModel = new ODataModel("/sap/opu/odata/SAP/Z801_LIBRARY2_LIBA_SRV/", {
                json: true,
                defaultCountMode: "Inline",
            });
            oView = this.getView();
            oView.setModel(oModel);
        },

        onBeforeExport: function (oEvt) {
            const mExcelSettings = oEvt.getParameter("exportSettings");
            mExcelSettings.worker = false;
        },
    });
});
