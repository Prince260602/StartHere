document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.getElementById('quote');
    const newQuoteButton = document.getElementById('new-quote');

    async function fetchQuote() {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            quoteElement.textContent = `"${data.content}" — ${data.author}`;
        } catch (error) {
            quoteElement.textContent = 'An error occurred while fetching the quote. Please try again later.';
            console.error(error);
        }
    }

    newQuoteButton.addEventListener('click', fetchQuote);

    // Fetch a quote on initial load
    fetchQuote();
});
