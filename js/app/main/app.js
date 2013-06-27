/**
 * Created with JetBrains WebStorm.
 * User: u225660
 * Date: 5/15/13
 * Time: 4:07 PM
 * To change this template use File | Settings | File Templates.
 */
requirejs.config({
    baseUrl: '/js',
    paths: {
        'sugar': 'lib/sugar',
        'countdown': 'lib/countdown'
    },
    shim: {
        'lib/amplify': {
            deps: ['jquery'],
            exports: 'amplify'
        },
        'lib/moment': {
            exports: 'moment'
        },
        'sugar': {
            exports: 'sugar'
        }
    },
    modules: [
        {
            name: "app/main/app",
            exclude: ["jquery"]
        }
    ]
});
require(['lib/knockout', 'app/model/AddItemFormModel', "app/model/LoginFormModel", "app/model/PageController",
        'lib/infuser', 'lib/koExternalTemplateEngine', 'lib/knockout.validation', 'app/knockout/BindingHandlers', 'sugar'],
    function (ko, AddItemFormModel, LoginFormModel, PageController, infuser) {
        "use strict";
        //infuser.defaults.templateSuffix = ".tmpl.html";
        infuser.defaults.templateUrl = "/templates/";
        var main = {
            addItemFormModel: new AddItemFormModel(),
            pageController: new PageController(),
            loginFormModel: new LoginFormModel()
        };
        ko.validation.init({ errorClass: 'error', parentContainer: 'div.control-group', insertMessages: false  });
        ko.applyBindings(main);
    }
);