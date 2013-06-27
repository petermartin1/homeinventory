/**
 * Created with JetBrains WebStorm.
 * User: u225660
 * Date: 5/15/13
 * Time: 4:34 PM
 * To change this template use File | Settings | File Templates.
 */
define(["lib/knockout", "lib/amplify", "app/util/Constants"], function(ko, amplify, Constants){
    "use strict";
    function PageController(){
        var self = this;
        self.header = ko.observable("headers/Login");
        self.mainContent = ko.observable("LoginForm");

        amplify.subscribe(Constants.LOGIN_SUCCESS, function(){
            self.mainContent("AddItemForm");
            self.header("headers/AddItem");
        });
    }
    return PageController;
});