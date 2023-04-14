const butInstall = document.getElementById('buttonInstall');

// look at activity 25 for ref !!
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    // sets property to event object
    // deferredPrompt assigned to window object as global property
    butInstall.classList.toggle('hidden', false);
    // removes hidden class from buttonInstall -> visible to user
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const prompt = window.deferredPrompt;

    if (!prompt){
        return;
    }
    // checks if falsy, if falsy returns and nothing happens

    prompt.prompt();
    // shows prompt 
    // if truthy, prompt() method called

    window.deferredPrompt = null;
    // reset deferredPrompt
    // keeps prompt from installing multiple times

    butInstall.classList.toggle('hidden', true);
    // hides install button if install initiated after prompt() called
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
    // keeps prompt from installing multiple times
});
