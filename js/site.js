function helloFromLoad()
{
    console.log("hello world");

    var vm = new viewmodel();
    ko.applyBindings(vm);

};