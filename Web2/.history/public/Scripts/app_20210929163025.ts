/* custom js goes here */

// IIFE - Immediately Invoked Function Expression (AKA an anonymous self-executing function)

(function(){

    function Start()
    {
        console.log("App Started...");
    }

    window.addEventListener("load", Start);

})();