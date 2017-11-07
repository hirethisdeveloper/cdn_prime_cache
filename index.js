var r      = require('requestify');
var now    = require('performance-now');

var urls           = [
    // pages
    "https://www.knifecenter.com",
    "https://www.knifecenter.com/",
    "https://www.knifecenter.com/index.html",
    "https://www.knifecenter.com/knives.html",
    "https://www.knifecenter.com/products.html",
    "https://www.knifecenter.com/shop/kitchen-knives",
    "https://www.knifecenter.com/shop/shave-center",
    "https://www.knifecenter.com/multitools.html",
    "https://www.knifecenter.com/shop/flashlight-deals",
    "https://www.knifecenter.com/shop/sword-center",
    "https://www.knifecenter.com/shop/sharpening",
    "https://www.knifecenter.com/shop/survival",
    "https://www.knifecenter.com/knifecenter/security/",
    "https://www.knifecenter.com/knifecenter/benchmade-knives/",
    "https://www.knifecenter.com/knifecenter/boker/",
    "https://www.knifecenter.com/knifecenter/buck/",
    "https://www.knifecenter.com/knifecenter/case/",
    "https://www.knifecenter.com/brand/146/Chris-Reeve-Knives",
    "https://www.knifecenter.com/knifecenter/coldsteel/",
    "https://www.knifecenter.com/knifecenter/crk/",
    "https://www.knifecenter.com/knifecenter/emerson/",
    "https://www.knifecenter.com/knifecenter/ratknives/",
    "https://www.knifecenter.com/knifecenter/gerber/",
    "https://www.knifecenter.com/knifecenter/kbar/",
    "https://www.knifecenter.com/knifecenter/kershaw/",
    "https://www.knifecenter.com/knifecenter/leatherman/",
    "https://www.knifecenter.com/brand/159/Microtech-Knives",
    "https://www.knifecenter.com/knifecenter/ontario/",
    "https://www.knifecenter.com/knifecenter/schrade/",
    "https://www.knifecenter.com/knifecenter/sog/",
    "https://www.knifecenter.com/knifecenter/spyderco-knives/",
    "https://www.knifecenter.com/knifecenter/sak/",
    "https://www.knifecenter.com/brand/102/Zero-Tolerance-Knives",
    "https://www.knifecenter.com/knifecenter/specials/?utm_source=website&utm_medium=hompage-mini-banners&utm_campaign=newdeptmini",
    "https://www.knifecenter.com/listing/new-arrivals?sortType=dateDe&utm_source=website&utm_medium=hompage-mini-banners&utm_campaign=newdeptmini",
    "https://www.knifecenter.com/shop/american-made-items?utm_source=website&utm_medium=hompage-mini-banners&utm_campaign=newdeptmini",
    "https://www.knifecenter.com/shop/custom-and-semi-custom-knives-from-knifeCenter?utm_source=website&utm_medium=hompage-mini-banners&utm_campaign=newdeptmini",
    "https://www.knifecenter.com/knifecenter/index/foldersm.html?utm_source=website&utm_medium=newdepartmentlinks&utm_campaign=folding",
    "https://www.knifecenter.com/knifecenter/index/specops.html?utm_source=website&utm_medium=newdepartmentlinks&utm_campaign=combat",
    "https://www.knifecenter.com/knifecenter/index/hunt.html?utm_source=website&utm_medium=newdepartmentlinks&utm_campaign=fixed",
    "https://www.knifecenter.com/shop/special-deals?utm_source=website&utm_medium=newdepartmentlinks&utm_campaign=specials",
    "https://www.knifecenter.com/listing/knife-and-gear-accessories?utm_source=website&utm_medium=newdepartmentlinks&utm_campaign=accessories",
    "https://www.knifecenter.com/shop/automatic%20knives?utm_source=website&utm_medium=newdepartmentlinks&utm_campaign=automatics",
    "https://www.knifecenter.com/listing/axes-and-hatchets?utm_source=website&utm_medium=newdepartmentlinks&utm_campaign=tomahawks",
    "https://www.knifecenter.com/shop/tactical-gear?utm_source=website&utm_medium=newdepartmentlinks&utm_campaign=tactical-gear",
    "https://www.knifecenter.com/listing/security-batons?utm_source=website&utm_medium=newdepartmentlinks&utm_campaign=batons",
    "https://www.knifecenter.com/shop/butterfly-knives?utm_source=website&utm_medium=newdepartmentlinks&utm_campaign=butterfly",
    "https://www.knifecenter.com/shop/karambit-knives?utm_source=website&utm_medium=newdepartmentlinks&utm_campaign=karambits",
    "https://www.knifecenter.com/listing/machetes?utm_source=website&utm_medium=newdepartmentlinks&utm_campaign=machetes",
    "https://www.knifecenter.com/knifecenter/scissor/?utm_source=website&utm_medium=newdepartmentlinks&utm_campaign=scissors",
    "https://www.knifecenter.com/knifecenter/pens/?utm_source=website&utm_medium=newdepartmentlinks&utm_campaign=pens",
    "https://www.knifecenter.com/listing/throwing-knives-and-hatchets?utm_source=website&utm_medium=newdepartmentlinks&utm_campaign=throwers",
    "https://www.knifecenter.com/shop/new-items",
    "https://www.knifecenter.com/kc_new/store_store.html?ttl=Specials&onsale=t&instock=t",
    "https://www.knifecenter.com/kc_new/store_store.html?instock=t&&&sortType=mostreviewed&",
    "https://www.knifecenter.com/listing/knifecenter-exclusives?utm_source=website&utm_medium=exclusives&utm_campaign=KnifeCenter+Exclusives&kcno=123",
    "https://www.knifecenter.com/free-shipping.html",

    // js
    "https://static.knifecenter.com/assets/handlebars-v4.0.5.js",
    "https://static.knifecenter.com/js/bs2/custom_modernizr_header.js",
    "https://static.knifecenter.com/js/jquery-smartsuggest/jquery.smartsuggest.js",
    "https://static.knifecenter.com/js/bs2/cart-dropdown/cart-containers.js",
    "https://static.knifecenter.com/js/bs2/header.js",
    "https://static.knifecenter.com/js/quotes.js",
    "https://static.knifecenter.com/js/superfish/js/superfish.js",
    "https://static.knifecenter.com/js/hoverIntentMinified6.js",
    "https://static.knifecenter.com/bootstrap/js/bootstrap.min.js",
    "https://static.knifecenter.com/js/jquery.cookie.js",
    "https://static.knifecenter.com/js/underscore-min.js",
    "https://static.knifecenter.com/min/b=js&f=compressed.js,socialite.js,royalslider/jquery.royalslider.min.js",
    "https://static.knifecenter.com/js/_country_sliders.js",

    // css
    "https://static.knifecenter.com/min/g=css&f=/styles/royalslider/royalslider.css,/styles/royalslider/default/rs-default.css,/styles/frontpage-responsive.css,/styles/responsive.css",
    "https://static.knifecenter.com/styles/style-holiday1.css",
    "https://static.knifecenter.com/styles/zz-home-dpts-icons-styles.css",
    "https://static.knifecenter.com/styles/zz-home-dpts-icons-styles-queries.css",
    "https://static.knifecenter.com/styles/designerscss.css",
    "https://static.knifecenter.com/styles/style-holiday.css",
    "https://static.knifecenter.com/styles/responsive2015a.css",
    "https://static.knifecenter.com/styles/bs2/header.css",
    "https://www.knifecenter.com/kc_new/inc/new_header/cart-dropdown/styles/cart-dropdown.css",
    "https://static.knifecenter.com/styles/bs2/add-to-cart-modal/cart-modal.css",
    "https://www.knifecenter.com/assets/home-page-17.css",
    "https://www.knifecenter.com/kc_new/inc/newsletter-popup.css",
    "https://static.knifecenter.com/styles/bs2/cart-dropdown/knifecenter-fan-logo.css?1",
    "https://static.knifecenter.com/min/g=css&f=/styles/brands.css,/styles/compressed.css,/styles/responsive.css",
    "https://static.knifecenter.com/styles/departmentcarouselcss.css",
    "https://static.knifecenter.com/styles/departmentcarouselcss-queries.css",
    "https://static.knifecenter.com/tooltipster-master/css/tooltipster.css",
    "https://static.knifecenter.com/tooltipster-master/css/themes/tooltipster-shadow.css",
    "https://static.knifecenter.com/min/g=css&f=/styles/responsive.css,/styles/global-styles.css",
    "https://www.knifecenter.com/kc_new/inc/zz-listings-ver1.css",
    "https://www.knifecenter.com/kc_new/inc/zz-listings-ver1-queries.css",
    "https://www.knifecenter.com/kc_new/inc/zz-listings-3col.css",
    "https://static.knifecenter.com/styles/designerscss.css",
    "https://static.knifecenter.com/styles/vidipop.css"
];

var getUrl = function (idx, url) {
    var t0 = now();
    r.get(url).then(
        function (response) {
            var t1              = now();
            var time_difference = (parseFloat(t1) - parseFloat(t0)).toFixed(2);
            var status          = response.headers['cf-cache-status'];
            if ( status === undefined ) status = "UNCACHED";
            console.log("Status: " + status + " - " + response.code + " - " + time_difference + "ms -- " + url);
        }
    )
};

for ( var i = 0, o = urls.length; i < o; i++ ) {
    getUrl(i, urls[i]);
}