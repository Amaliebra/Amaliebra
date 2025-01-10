const fetch = require('node-fetch');
const fs = require('fs');

async function fetchDogPictures() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        const imageUrl = data.message;
        const markdownImage = `<img src="${imageUrl}" alt="dog" width="20"/>`;
        const readme = fs.readFileSync('README.md', 'utf8');

        const updatedReadme = readme.replace(/<img\s+src=".*?"\s+alt="dog"\s+width="20"\s*\/?>/i, markdownImage);

        fs.writeFileSync('README.md', updatedReadme);
        console.log('README.md updated with a new dog picture!');
    } catch(error) {
        console.error('Error fetching dog image :(', error);
    }
}

fetchDogPictures()