sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, JSONModel, Fragment) {
        "use strict";

        return Controller.extend("at.clouddna.training00.zhoui5.controller.Customer", {

            _fragmentList: {},

            //Lebenszyklusmethoden der View:
            onInit: function () {
                let oModel = new JSONModel({
                    editmode: false
                });

                this.getView().setModel(oModel, "editModel");

                this._showCustomerFragment("DisplayCustomer");
            },

            _showCustomerFragment: function(sFragmentName){
                let oPage = this.getView().byId("page");

                //1. leeren wir den aktuellen Content
                oPage.removeAllContent();
                
                //2. Überprüfen wir, ob das Fragment schonmal geladen worden ist
                if(this._fragmentList[sFragmentName]){
                    //4. Fragment in die Page einfügen
                    oPage.insertContent(this._fragmentList[sFragmentName]);
                }else{
                    //3. das Fragment laden

                    let oPromise = Fragment.load({
                        id: this.getView().createId(sFragmentName),
                        name: "at.clouddna.training00.zhoui5.view.fragment." + sFragmentName,
                        controller: this
                    });
                    

                    oPromise.then(
                        function(oFragment){
                            //4. Fragment für später abspeichern (in die Klassenvariable _fragmentList)
                            this._fragmentList[sFragmentName] = oFragment;
                            
                            //5. Fragment in die Page einfügen
                            oPage.insertContent(oFragment);
                        }.bind(this)
                    );

                }
            },

            onEditPressed: function(){
                this._toggleEdit(true);
            },

            onCancelPressed: function(){
                this._toggleEdit(false);
            },

            _toggleEdit: function(bEditMode){
                let oEditModel = this.getView().getModel("editModel");

                oEditModel.setProperty("/editmode", bEditMode);

                this._showCustomerFragment(bEditMode ? "ChangeCustomer" : "DisplayCustomer");
            },
            
            /*
            onExit: function () {},
            onBeforeRendering: function () {},
            onAfterRendering: function () {},
            */

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

                this._toggleEdit(false);
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
