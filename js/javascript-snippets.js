// snippets for Morpheus JavaScript snippets plugin - temporary test location
console.log("JavaScript Snippets plugin is installed");

// wrap all our snippets so that we have the DOM available to read/manipulate
document.addEventListener("DOMContentLoaded", function(event){

    // get the current page & prefix
    let path = window.location.pathname.split("/");
    let page = path.pop();
    let prefix =  path.pop();
    let pagePrefixed = prefix + "/" + page;

    // only on allowed pages
    if (pagePrefixed == "provisioning/instances") {
        document.body.addEventListener("click", (event) => {
            let nameF = document.getElementById("name");
            if (nameF != null) {
                nameF.addEventListener("blur", (event) => {
                    nameF.value = nameF.value.trim()
                });
            }
        });
    }
});
