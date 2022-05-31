const generateData = () => {
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
            const adviceNumber = document.querySelector('#adviceNumber');
            const adviceQuote = document.querySelector('.advice__quote');
            adviceNumber.textContent = data.slip.id;
            adviceQuote.textContent = data.slip.advice;
        })
        .catch(error => console.log(error));
};


const generateButton = document.querySelector('.advice__button');
generateButton.addEventListener('click', generateData);