//Create Appshell
    const _n_cache = 'cache-v1';
    self.addEventListener("install", (event) =>{
        console.log("INSTALL");
    const _files = [
        'index.html',
        'style.css',
        'main.js',
        'app.js'
    ];

    const _openCache = async () =>{
        const _appShellStorage = await caches.open(_n_cache);
        return _appShellStorage.addAll(_files);
    };
    
    event.waitUntil(_openCache());
    
});
self.addEventListener('fetch', event => {
        event.respondWith(fetch(event.request));
    })
