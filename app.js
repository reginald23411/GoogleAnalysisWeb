// The drop sown list
// Select the toggle button element
const toggleBtn = document.querySelector('.toggle_btn')
// Select the icon inside the toggle button
const toggleBtnIcon = document.querySelector('.toggle_btn i')
// Select the dropdown menu element
const dropdownMenu = document.querySelector('.dropdown_menu')

// Set the onclick event for the toggle button
toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle('open')
}


// The YouTube pop up windows
function customizeWindowEvent(content, videoSrc, videoWidth, videoHeight) {
    var popup_window = document.getElementById("window-container");
    var window_content = document.querySelector(".window-content");
    var terms_list = document.querySelector(".terms-list");
    var recipes_list = document.querySelector(".recipes-list");
    var recipe_imgs = document.querySelectorAll(".recipe-img");

    // Create an iframe HTML string with the provided width, height, and video source
    var iframeHtml = '<iframe width="' + videoWidth + '" height="' + videoHeight + '" src="' + videoSrc + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

    // Set the content of the window 
    window_content.innerHTML = content + iframeHtml;
    // Show the popup window
    popup_window.style.display = "block";
    // Hide the terms list and disable the recipes list
    terms_list.classList.add("hide-links");
    recipes_list.classList.add("disable-links");

    // Add the 'darkened' class to all the recipe images
    // Hide the img of recipe
    recipe_imgs.forEach(function (img) {
        img.classList.add("darkened");
    });

    // Set the onclick for the window to close the popup
    window.onclick = function close(e) {
        if (e.target == popup_window) {
            popup_window.style.display = "none";
            terms_list.classList.remove("hide-links");
            recipes_list.classList.remove("disable-links");

            // Remove the 'darkened' class from all the recipe images
            // Recover the orginal recipe option
            recipe_imgs.forEach(function (img) {
                img.classList.remove("darkened");
            });

            // Stop the video when setting the iframe src to an empty
            var iframe = window_content.querySelector("iframe");
            iframe.setAttribute("src", "");
        }
    }


}

// The subscription form
function displayPrompt() {

    var emailInput = document.querySelector('.mail');

    // Check if the email input field is not empty
    if (emailInput.value.trim() !== '') {
        // Display the prompt if the input box include value
        alert("Thank you for your subscribe!");
    } else {
        // Display an error message if the email box is empty
        alert("Please enter your email address.");
    }
}