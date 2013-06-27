define(["lib/knockout"], function (ko) {
    "use strict";
    function BaseFormModel() {
        var self = this;
        self.submitted = ko.observable(false);
        self.fieldNames = Array.prototype.slice.call(arguments);
        self.formFields = ko.validatedObservable(this._buildValidationObject());
        self.errors = ko.computed(function () {
            var errors = [];
            self.fieldNames.forEach(function (field) {
                this.checkField(errors, field);
            }, self);
            return errors;
        });
    }

    BaseFormModel.prototype._buildValidationObject = function () {
        var validationObject = {};
        this.fieldNames.forEach(function (fieldName) {
            var thisField = this[fieldName.name];
            console.log(thisField);
            if (fieldName.required) {
                thisField.extend({required: {onlyIf: this.submitted}});
            }
            validationObject[fieldName.name] = thisField;
        }, this);
        return validationObject;
    };
    BaseFormModel.prototype.checkField = function (errors, field) {
        if (!this[field.name].isValid()) {
            errors.push(field.message);
        }
    };
    BaseFormModel.prototype.clearForm = function () {
        this.fieldNames.forEach(function (field) {
            this[field.name](null);
        });
    };

    BaseFormModel.prototype.validateAndSubmit = function () {
        this.submitted(true);
        if (this.formFields.isValid()) {
            this.submit();
        } else {
            console.log("Oops validation errors");
        }

    };
    return BaseFormModel;
});