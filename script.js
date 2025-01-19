document.addEventListener('DOMContentLoaded', () => {
    const defaultId = 'Pookie';
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
    decodedId = defaultId; 
    if (encodedId) {
        try {
            decodedId = atob(encodedId)
            greeting.innerHTML = `Hey ${decodedId}!!`
        }
        catch (e) {
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
                <h1>Thank you ${decodedId}</h1>
                <img src="cutebear2.gif" alt="Thank You">
            </div>
        `;
    });

    if (decodedId == defaultId) {
        const paymentButton = document.getElementById('paymentButton');
        paymentButton.setAttribute('title', 'Make this page yours');
        paymentButton.addEventListener('click', () => {
            window.open('https://rzp.io/rzp/crWAP3y5', '_blank');
        });
    }
}); 
