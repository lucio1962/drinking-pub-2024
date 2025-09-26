// Funzioni di utilità - VERSIONE DEMO SENZA TELEFONO
function prenotaDemo() {
    alert('🚧 Sito in fase di sviluppo!\nIl servizio di prenotazione sarà disponibile a breve.');
}

function vediMappaDemo() {
    const indirizzo = 'Via Lavino, 181/C, 40050 Calderino BO';
    const urlMaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(indirizzo)}`;
    window.open(urlMaps, '_blank');
}

function ordinaTavolozzaDemo(nomeTavolozza) {
    alert(`🍹 Tavolozza "${nomeTavolozza}" selezionata!\n🚧 Funzione di ordinazione in sviluppo.`);
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
    setInterval(aggiornaStatoApertura, 60000);
});

// Social Sharing
function condividiFacebook() {
    alert('📱 Condivisione Facebook - Funzione in sviluppo');
}

function condividiInstagram() {
    alert('📸 Condivisione Instagram - Funzione in sviluppo');
}

function condividiWhatsApp() {
    alert('💬 Condivisione WhatsApp - Funzione in sviluppo');
}

// Gestione Auth (demo)
function handleAuth(action) {
    if (action === 'login') {
        alert('🔐 Accesso - Funzione in sviluppo');
    } else if (action === 'register') {
        alert('📝 Registrazione - Funzione in sviluppo');
    }
}

// Aggiungi event listener per i bottoni auth
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    
    if (loginBtn) loginBtn.addEventListener('click', () => handleAuth('login'));
    if (registerBtn) registerBtn.addEventListener('click', () => handleAuth('register'));
});

console.log('Drinking Pub 2024 - Sito Demo 🚧');
