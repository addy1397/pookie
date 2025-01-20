document.addEventListener('DOMContentLoaded', () => {
    const defaultId = 'Pookie';
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const paymentButton = document.getElementById('paymentButton'); // Ensure paymentButton is referenced
    const greeting = document.getElementById('greeting'); // Ensure greeting is referenced

    // Function to get URL parameter
    function getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Get the 'id' parameter, decode it, and set it as the hero image source
    const encodedId = getUrlParameter('id');
    let decodedId = defaultId; 
    if (encodedId) {
        try {
            decodedId = atob(encodedId);
            greeting.innerHTML = `Hey ${decodedId}!!`;
        } catch (e) {
            console.error('Name does not exist:', e);
        }
    }

    noButton.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - noButton.clientWidth);
        const y = Math.random() * (window.innerHeight - noButton.clientHeight);
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    noButton.addEventListener('touchstart', () => {
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
        if (decodedId === defaultId) {
            document.body.innerHTML += `
                <button id="paymentButton" class="payment-button">💖</button>
            `;
            const newPaymentButton = document.getElementById('paymentButton');
            newPaymentButton.setAttribute('title', 'Make this page yours');
            newPaymentButton.addEventListener('click', () => {
                window.open('https://rzp.io/rzp/crWAP3y5', '_blank');
            });
        }
    });

    if (decodedId === defaultId) {
        paymentButton.setAttribute('title', 'Make this page yours');
        paymentButton.addEventListener('click', () => {
            window.open('https://rzp.io/rzp/crWAP3y5', '_blank');
        });
    } else {
        paymentButton.style.display = 'none';
    }
});
