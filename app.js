document.getElementById('btn-click').addEventListener('click', () => {
  document.getElementById('msg').textContent = 'Complimenti! Lo script funziona correttamente 🎉';
});
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker registrato con successo:', reg.scope))
      .catch(err => console.error('Registrazione Service Worker fallita:', err));
  });
}