const API_KEY = 'NcC2Ed7gqkc1hbzRGf5S44vdD1mUy3KxOe7XpaYX';
const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const imageElement = document.getElementById('image');
    imageElement.src = data.hdurl;
    imageElement.alt = data.title;
  })
  .catch(error => {
    console.error(error);
  });