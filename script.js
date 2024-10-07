document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
    alert('Thank you for your submission, ' + document.getElementById('name').value + '!');
});
