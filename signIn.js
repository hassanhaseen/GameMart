const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function () {
    // Make an API call when the button is clicked
    fetch('https://api.example.com/data')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('API response:', data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});