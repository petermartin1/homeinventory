define(['lib/knockout', 'app/model/BaseFormModel', 'app/util/util', 'app/util/Field'], function (ko, BaseFormModel, util, Field) {
    "use strict";

    function AddItemFormModel() {
        var self = this;
        self.name = ko.observable().extend({pattern: '^([\\w ]+)$'});
        self.quantity = ko.observable().extend({digit: true, min:1, max: 99999});
        self.datePurchased = ko.observable().extend({date: true});
        self.description = ko.observable();
        self.cost = ko.observable().extend({digit:true, min: 1, max: 999999999});
        AddItemFormModel.prototype.baseConstructor.call(self,
            new Field('name', "Name is required and must be a mix of letters, number and spaces", true),
            new Field('quantity', "Quantity is required and must be a number between 1 and 99999", true),
            new Field('datePurchased', "Date is required and must be a valid date", true),
            new Field('description', "Description is required", true),
            new Field('cost', "Cost is required and must be a number between 1 and 999999999", true));

    }
    util.extend(AddItemFormModel, BaseFormModel);
    AddItemFormModel.prototype.submit = function(){
         console.log("Added item " + this);
    };

    return AddItemFormModel;
});