// Funzioni di utilità
function prenotaOra() {
    const telefono = '3312174673';
    const messaggio = 'Ciao, vorrei prenotare un tavolo per stasera al Drinking Pub 2024!';
    const urlWhatsApp = `https://wa.me/39${telefono}?text=${encodeURIComponent(messaggio)}`;
    window.open(urlWhatsApp, '_blank');
}

function vediMappa() {
    const indirizzo = 'Via Lavino, 181/C, 40050 Calderino BO';
    const urlMaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(indirizzo)}`;
    window.open(urlMaps, '_blank');
}

function apriNavigatore() {
    const indirizzo = 'Via Lavino, 181/C, 40050 Calderino BO';
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.open(`geo:0,0?q=${encodeURIComponent(indirizzo)}`);
    } else {
        vediMappa();
    }
}

// Gestione Orari
function aggiornaStatoApertura() {
    const now = new Date();
    const currentHour = now.getHours();
    const isOpen = currentHour >= 18 || currentHour < 2;
    
    const elementoStato = document.getElementById('stato-apertura');
    
    if (elementoStato) {
        if (isOpen) {
            elementoStato.innerHTML = '<strong>🔴 APERTO ORA</strong> - Chiudiamo alle 02:00';
            elementoStato.className = 'status-open';
        } else {
            elementoStato.innerHTML = '<strong>⏳ CHIUSO</strong> - Apriamo alle 18:00';
            elementoStato.className = 'status-closed';
        }
    }
}

// Inizializzazione
document.addEventListener('DOMContentLoaded', function() {
    aggiornaStatoApertura();
    setInterval(aggiornaStatoApertura, 60000); // Aggiorna ogni minuto
});

// Social Sharing
function condividiFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function condividiInstagram() {
    alert('Condividi la nostra pagina sui tuoi story! Tagga @drinkingpub2024');
}

function condividiWhatsApp() {
    const text = encodeURIComponent('Scopri il Drinking Pub 2024! 🍹 Ottimi cocktail, mozzarella fantastica e musica dal vivo!');
    const url = encodeURIComponent(window.location.href);
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
}

console.log('Drinking Pub 2024 - Benvenuti! 🍹');
