document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const heroImage = document.querySelector('.hero-image');

    // Function to get URL parameter
    function getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Get the 'id' parameter, decode it, and set it as the hero image source
    const encodedId = getUrlParameter('id');
    console.log(encodedId)

    if (encodedId) {
        try {
            const decodedId = atob(encodedId);
            heroImage.src = decodedId;
        } catch (e) {
            console.error('Invalid base64 string:', e);
        }
    }

    noButton.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - noButton.clientWidth);
        const y = Math.random() * (window.innerHeight - noButton.clientHeight);
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    yesButton.addEventListener('click', () => {
        document.body.innerHTML = `
            <div class="hero">
                <h1>Thank you Pookie</h1>
                <img src="cutebear2.gif" alt="Thank You">
            </div>
        `;
    });
}); 
