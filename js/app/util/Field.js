define(function(){
    "use strict";
    function Field(name, message, required){
        var self = this;
        self.name = name;
        self.message = message;
        self.required = required;
    }
    return Field;
});