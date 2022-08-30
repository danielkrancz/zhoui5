sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("at.clouddna.training00.zhoui5.controller.Customer", {
            onInit: function () {

            },

            genderFormatter: function (sGender) {

                let oView = this.getView();
                let oI18nModel = oView.getModel("i18n");
                let oResourceBundle = oI18nModel.getResourceBundle();

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
 
                /*
                if(sGender === "female"){
                    return oResourceBundle.getText("female");
                }else if(){
                    return oResourceBundle.getText("male");
                }
                */
            }
        });
    });
