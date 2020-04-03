function viewmodel()
{
    var self = this;
    self.messages = ko.observableArray([]);
    self.lookup_other_messages = ko.computed(function()
    {
        var dictionary = {};
        ko.utils.arrayForEach(self.messages(), function(item) {
            dictionary[item.text()] = item;
        });
        return dictionary;

    });
    self
        .messages
        .push
            (
                new model_message({text: "hello", dictionary: self.lookup_other_messages})
            );

    self
        .messages
        .push
            (
                new model_message({text: "hello world", dictionary: self.lookup_other_messages})
            );

    self
        .messages
        .push
            (
                new model_message({text: "world", dictionary: self.lookup_other_messages})
            );

   
};