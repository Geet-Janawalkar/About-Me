// JavaScript code for the website

// Example of adding interactivity
document.addEventListener('DOMContentLoaded', function() {
    var paragraphs = document.querySelectorAll('p');
    
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].addEventListener('click', function() {
            this.style.color = 'red';
        });
    }
});
