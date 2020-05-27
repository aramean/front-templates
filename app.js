require('https://aramean.github.io/front/ui/lib/front.xhr');
require('https://aramean.github.io/front/ui/lib/front.popup');
require('https://aramean.github.io/front/ui/lib/front.nav');
require('https://aramean.github.io/front/ui/lib/front.drag.js');

function onLoad() {
    
    setFrontLib("https://aramean.github.io/front");

    if (!isLocalDev()) {
        setBaseDir("front")
    };

	console.log("Running application");
}