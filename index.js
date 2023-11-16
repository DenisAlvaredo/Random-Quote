function getRandomQuote() {
    const ulElement = document.getElementById('tags');

    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote-text').textContent = `"${data.content}"`;
            document.getElementById('quote-author').textContent = `${data.author}`;
            ulElement.textContent = '';
            data.tags.forEach(tag => {
                const liElement = document.createElement('li');
                liElement.textContent = tag;
                ulElement.appendChild(liElement);
            });
            console.log(data)
        })
    .catch(error => {
        console.error(error);
    });
}

function copyToClipboard() {
    const textToCopy = document.getElementById('quote-text').innerText;

    const inputTemp = document.createElement('textarea');
    inputTemp.value = textToCopy;

    document.body.appendChild(inputTemp);

    inputTemp.select();
    document.execCommand('copy');

    document.body.removeChild(inputTemp);

    alert('¡Text copied to clipboard!');
}

document.addEventListener('DOMContentLoaded', () => {
    getRandomQuote();
});