document.addEventListener("DOMContentLoaded", function () {
    // Function to toggle dark mode
    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
    }

    // Get the dark mode button
    var darkModeButton = document.querySelector(".darkmode");

    // Attach click event listener to the dark mode button
    darkModeButton.addEventListener("click", toggleDarkMode);
});