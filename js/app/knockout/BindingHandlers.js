/**
 * Created with JetBrains WebStorm.
 * User: u225660
 * Date: 5/16/13
 * Time: 4:47 PM
 * To change this template use File | Settings | File Templates.
 */
define(["lib/knockout", 'lib/knockout.validation'], function(ko){
    "use strict";
    var VALUE = 'value',
        HIGHLIGHT_PARENT = 'highlightParent';

    function highlightParent(element, valueAccessor){


    }
    ko.bindingHandlers.highlightParent = {
        update: function(element, valueAccessor, allBindingsAccessor){
            var config = ko.validation.utils.getConfigOptions(element),
                selector = config.parentContainer,
                cssClass =config.errorElementClass,
                theContainer = $(element).parents(selector),
                newValueAccessor  = function(){
                    var css = {};
                    css[cssClass] = !allBindingsAccessor().value.isValid();
                    return css;
                };
            ko.bindingHandlers.css.update(theContainer[0], newValueAccessor);
        }
    };
    // override for KO's default 'value' binding
    (function () {
        var update = ko.bindingHandlers[ VALUE].update;

        ko.bindingHandlers[VALUE].update = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

            update(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);

            return ko.bindingHandlers[ HIGHLIGHT_PARENT].update(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
        };
    } ());

});