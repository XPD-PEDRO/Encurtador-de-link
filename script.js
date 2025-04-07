function shortenUrl() {
    const longUrl = document.getElementById('longUrl').value;
    if (!longUrl) return alert("Por favor, insira um URL!");
    
    const shortCode = Math.random().toString(36).substring(2, 8);
    
    localStorage.setItem(shortCode, longUrl); 
    
    const shortenedUrl = `${window.location.href.split('#')[0]}#${shortCode}`;
    document.getElementById('shortenedLink').innerHTML = 
    `Seu link: <a href="${shortenedUrl}" target="_blank">${shortenedUrl}</a>`;
    } 
    
    window.onload = function() {
    const hash = window.location.hash.substring(1); 
    if (hash) {
    const originalUrl = localStorage.getItem(hash);
    
    if (originalUrl) {
        window.location.href = originalUrl;
    } 
    
    else {
    alert("Link não encontrado!");
    }
    }
    };