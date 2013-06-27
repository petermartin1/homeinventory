/**
 * Created with JetBrains WebStorm.
 * User: u225660
 * Date: 5/20/13
 * Time: 12:56 PM
 * To change this template use File | Settings | File Templates.
 */
define(["lib/knockout", "app/model/BaseFormModel", "app/util/util", "app/util/Field", "app/util/Constants", "lib/amplify"], function(ko, BaseFormModel, util, Field, Constants, amplify){
    "use strict";
    function LoginFormModel(){
        var self = this;
        self.userId = ko.observable().extend({pattern: /^\w{5,}$/});
        self.password = ko.observable().extend({pattern: /^\w{6,}$/});
        LoginFormModel.prototype.baseConstructor.call(self,
            new Field("userId", "User ID must be a minimum of five alphanumeric characters", true),
            new Field("password", "Password must be a minimum of six alphanumeric characters", true));
    }
    util.extend(LoginFormModel, BaseFormModel);
    LoginFormModel.prototype.submit = function(){
        amplify.publish(Constants.LOGIN_SUCCESS);
    };
    return LoginFormModel;
});