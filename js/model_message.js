function model_message(data)
{
    var self = this;

    self.text = ko.observable(data.text);
    self.dictionary = data.dictionary;
    self.textSplitted = ko.computed(function(){
        var test = self.text().split(" ");
        var result = ko.utils.arrayMap(test, function(item)
            {
                var found = self.dictionary()[item];
                return {
                    word: item,
                    exists: typeof(found) !== 'undefined' && self.text() !== item
                };
            }
        );
        return result;
    });

};