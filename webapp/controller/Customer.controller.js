sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("at.clouddna.training00.zhoui5.controller.Customer", {
            onInit: function () {

            },

            onSavePressed: function(){
                /*
                let oInputCustomerId = this.getView().byId("edit_input_customerid");
                let sCustomerId = oInputCustomerId.getValue();
                */

                let oView = this.getView();
                let oModel = oView.getModel();
                let oData = oModel.getData();

                MessageBox.success(JSON.stringify(oData), {
                    title: "Speichervorgang",                                    // default
                    onClose: null,                                       // default
                    styleClass: "",                                      // default
                    actions: sap.m.MessageBox.Action.OK,                 // default
                    emphasizedAction: sap.m.MessageBox.Action.OK,        // default
                    initialFocus: null,                                  // default
                    textDirection: sap.ui.core.TextDirection.Inherit     // default
                });
            },

            genderFormatter: function (sKey) {

                let oView = this.getView();
                let oI18nModel = oView.getModel("i18n");
                let oResourceBundle = oI18nModel.getResourceBundle();
                let sText = oResourceBundle.getText(sKey);
                return sText;

                /*
                switch(sGender){
                    case "female":
                        return oResourceBundle.getText("female");
                    case "male":
                        return oResourceBundle.getText("male");
                    case "divers":
                        return "divers";
                    default:
                        return "?";
                }
                */
                /*
                if(sGender === "female"){
                    return oResourceBundle.getText("female");
                }else if(){
                    return oResourceBundle.getText("male");
                }
                */
            },

            /*
            getLegaleAgeText: function(iAge){
                if(iAge >= 18){
                    return "Yes";
                }else{
                    return "No";
                }
            },

            getLegaleAgeState: function(iAge){
                if(iAge >= 18){
                    return "Success";
                }else{
                    return "Error";
                }
            }
            */
        });
    });
