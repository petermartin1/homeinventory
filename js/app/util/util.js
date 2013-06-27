/**
 * Created with JetBrains WebStorm.
 * User: u225660
 * Date: 5/30/13
 * Time: 1:40 PM
 * To change this template use File | Settings | File Templates.
 */
define(function(){
    "use strict";
    return {
        extend : function(child, parent){
            child.prototype = Object.create(parent.prototype);
            child.prototype.constructor = child;
            child.prototype.baseConstructor = parent;
        }
    };
});