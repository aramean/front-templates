require('front.xhr');
require('front.popup');
require('front.nav');
require('front.drag');

function onLoad() {

    if (!isLocalDev()) {
        setBaseUrl("front");
        setFrontBaseUrl("front");
    };

	console.log("Running application");
}