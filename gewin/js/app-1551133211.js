
// ===== Variables


// News Load More
var nfIsLoading = false;
var nfMoreData = true;
var nfPage = 1;


var speed = '.2';
var transition_speed = '200';
var transition_easing = 'Sine.easeOut';

var bp_wrapper_width = '2200'; // including padding
var bp_widescreen = '2000';
var bp_lg_laptop = '1800';
var bp_laptop = '1440';
var bp_sm_laptop = '1280';
var bp_tablet = '1200';
var bp_tablet_landscape = '1024';
var bp_cmsMobile = '991';
var bp_tablet_portrait = '768';
var bp_lg_mobile = '600';
var bp_mobile = '480';
var bp_sm_mobile = '320';


var tooltip_shortlist_add = 'Add to Shortlist';
var tooltip_shortlist_remove = 'Remove from Shortlist';

var arrow_left = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path data-name="butt color" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M18 10H2"/><path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1.5" d="M6.33 14.47L2 10l4.33-4.47"/></svg>';
var arrow_right = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M2.15 9.47h16"/><path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1.5" d="M13.82 4.99l4.33 4.48-4.33 4.47"/></svg>';
var arrow_simple_left = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M15.7 2.6L8.3 10l7.4 7.4-2.3 2.3L3.7 10 13.4.3z"/></svg>';
var arrow_simple_right = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M3.7 17.4l7.4-7.4-7.4-7.4L6 .3l9.7 9.7L6 19.7z"/></svg>';


var close_icon = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M16.5 3.5l-13 13M16.5 16.5l-13-13"/></svg>';
var star_icon = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10.6 1.78l2.27 4.59a.66.66 0 0 0 .5.36l5.07.74a.66.66 0 0 1 .36 1.13l-3.67 3.57a.66.66 0 0 0-.19.59l.87 5a.66.66 0 0 1-1 .7l-4.53-2.38a.66.66 0 0 0-.62 0l-4.5 2.43a.66.66 0 0 1-1-.7l.87-5a.66.66 0 0 0-.19-.59L1.2 8.6a.66.66 0 0 1 .37-1.13l5.07-.74a.66.66 0 0 0 .5-.36L9.4 1.78a.66.66 0 0 1 1.2 0z" fill="" stroke="currentcolor" stroke-miterlimit="10" stroke-width="1.06"/></svg>';
var shortlist_star_icon = '<svg class="icon shortlist-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10.6 1.78l2.27 4.59a.66.66 0 0 0 .5.36l5.07.74a.66.66 0 0 1 .36 1.13l-3.67 3.57a.66.66 0 0 0-.19.59l.87 5a.66.66 0 0 1-1 .7l-4.53-2.38a.66.66 0 0 0-.62 0l-4.5 2.43a.66.66 0 0 1-1-.7l.87-5a.66.66 0 0 0-.19-.59L1.2 8.6a.66.66 0 0 1 .37-1.13l5.07-.74a.66.66 0 0 0 .5-.36L9.4 1.78a.66.66 0 0 1 1.2 0z" fill="" stroke="currentcolor" stroke-miterlimit="10" stroke-width="1.06"/></svg>';
var phone_icon = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 3.47c-1.43 2.15.28 6.67 4.07 10.46s8.31 5.5 10.46 4.07a.79.79 0 0 0 .22-.15l1.45-1.45a1.23 1.23 0 0 0-.12-1.73l-2.59-2.59a1.23 1.23 0 0 0-1.72-.08l-1.68 1.68a.53.53 0 0 1-.67 0 20.26 20.26 0 0 1-2.76-2.32 20.26 20.26 0 0 1-2.33-2.77.53.53 0 0 1 0-.67L8 6.23a1.23 1.23 0 0 0-.12-1.73L5.33 1.92A1.23 1.23 0 0 0 3.6 1.8L2.15 3.25a.79.79 0 0 0-.15.22z" fill="" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.1"/></svg>';


var storageSupported = (typeof Storage !== "undefined") ? true: false;



// ===== Debouncing function from John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/

(function($,sr){
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);

              timeout = null;
          }

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  };
  // smartresize
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');




function addCookieConsentPopup() {
  // === Cookie Consent
  window.cookieconsent.initialise({
    container: null, // body
    'cookie': {
      'expiryDays': 365,
    },
    'window': '<div role="dialog" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window cc-citrine {{classes}}">{{children}}</div>',
    'content': {
      'message': 'This website <a href="http://cookiesandyou.com" target="_blank">uses cookies</a> to ensure you get the best experience on our website '
    },
    'showLink': false,
    'palette': {
      'popup': {
        'background': '#4B3929'
      },
      'button': {
        'background': '#ffffff'
      }
    },
    onPopupOpen: function() {
    },
    onInitialise: function(status) {
    }
  });
}


// ===== CMS Format
function formatCmsComponents() {
}


function resizeIframe(iframe) {

  iframe
    .data('iframeRatio', iframe.height() / iframe.width())
    .removeAttr('height')
    .removeAttr('width')
    .css('margin','0 auto');

  if ( iframe.length < 1 ) { return; }

  var container = iframe.parent('.video-container');

  var containerHeight = container.height();
  var newWidth = container.width();

  // // Resize video according to its aspect ratio
  var newHeight = newWidth * iframe.data('iframeRatio');


  // // if video taller than window
  if ( newHeight > containerHeight ) {
    newHeight = containerHeight;
    newWidth = newHeight / iframe.data('iframeRatio');
  }

  iframe
    .width(newWidth)
    .height(newHeight)
    // .css({
    //   'opacity': 1,
    //   'visibility': 'visible'
    // })
    ;
    iframe.removeClass('is-hidden');
};

function getScrollBarWidth () {
  var inner = document.createElement('p');
  inner.style.width = "100%";
  inner.style.height = "200px";

  var outer = document.createElement('div');
  outer.style.position = "absolute";
  outer.style.top = "0px";
  outer.style.left = "0px";
  outer.style.visibility = "hidden";
  outer.style.width = "200px";
  outer.style.height = "150px";
  outer.style.overflow = "hidden";
  outer.appendChild (inner);

  document.body.appendChild (outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;
  if (w1 == w2) w2 = outer.clientWidth;

  document.body.removeChild (outer);

  return (w1 - w2);
};

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

!function(a){a.Bideo=function(){this.opt=null,this.videoEl=null,this.approxLoadingRate=null,this._resize=null,this._progress=null,this.startTime=null,this.init=function(b){this.opt=b=b||{};var c=this;c._resize=c.resize.bind(this),c.videoEl=b.videoEl,c.videoEl.addEventListener("loadedmetadata",c._resize,!1),c.videoEl.addEventListener("canplay",function(){c.opt.onLoad&&c.opt.onLoad(),c.videoEl.play()}),c.opt.resize&&a.addEventListener("resize",c._resize,!1),this.startTime=(new Date).getTime(),this.opt.src.forEach(function(a,b,d){var e,f,g=document.createElement("source");for(e in a)a.hasOwnProperty(e)&&(f=a[e],g.setAttribute(e,f));c.videoEl.appendChild(g)})},this.resize=function(){var b=this.videoEl.videoWidth,c=this.videoEl.videoHeight,d=(b/c).toFixed(2),e=this.opt.container,f=a.getComputedStyle(e),g=parseInt(f.getPropertyValue("width")),h=parseInt(f.getPropertyValue("height"));if("border-box"!==f.getPropertyValue("box-sizing")){var i=f.getPropertyValue("padding-top"),j=f.getPropertyValue("padding-bottom"),k=f.getPropertyValue("padding-left"),l=f.getPropertyValue("padding-right");i=parseInt(i),j=parseInt(j),k=parseInt(k),l=parseInt(l),g+=k+l,h+=i+j}var m=g/b,n=h/c;if(m>n)var o=g,p=Math.ceil(o/d);else var p=h,o=Math.ceil(p*d);this.videoEl.style.width=o+"px",this.videoEl.style.height=p+"px"}}}(window);

var Froogaloop = (function(){
    // Define a local copy of Froogaloop
    function Froogaloop(iframe) {
        // The Froogaloop object is actually just the init constructor
        return new Froogaloop.fn.init(iframe);
    }

    var eventCallbacks = {},
        hasWindowEvent = false,
        isReady = false,
        slice = Array.prototype.slice,
        playerDomain = '';

    Froogaloop.fn = Froogaloop.prototype = {
        element: null,

        init: function(iframe) {
            if (typeof iframe === "string") {
                iframe = document.getElementById(iframe);
            }

            this.element = iframe;

            // Register message event listeners
            playerDomain = getDomainFromUrl(this.element.getAttribute('src'));

            return this;
        },

        /*
         * Calls a function to act upon the player.
         *
         * @param {string} method The name of the Javascript API method to call. Eg: 'play'.
         * @param {Array|Function} valueOrCallback params Array of parameters to pass when calling an API method
         *                                or callback function when the method returns a value.
         */
        api: function(method, valueOrCallback) {
            if (!this.element || !method) {
                return false;
            }

            var self = this,
                element = self.element,
                target_id = element.id !== '' ? element.id : null,
                params = !isFunction(valueOrCallback) ? valueOrCallback : null,
                callback = isFunction(valueOrCallback) ? valueOrCallback : null;

            // Store the callback for get functions
            if (callback) {
                storeCallback(method, callback, target_id);
            }

            postMessage(method, params, element);
            return self;
        },

        /*
         * Registers an event listener and a callback function that gets called when the event fires.
         *
         * @param eventName (String): Name of the event to listen for.
         * @param callback (Function): Function that should be called when the event fires.
         */
        addEvent: function(eventName, callback) {
            if (!this.element) {
                return false;
            }

            var self = this,
                element = self.element,
                target_id = element.id !== '' ? element.id : null;


            storeCallback(eventName, callback, target_id);

            // The ready event is not registered via postMessage. It fires regardless.
            if (eventName != 'ready') {
                postMessage('addEventListener', eventName, element);
            }
            else if (eventName == 'ready' && isReady) {
                callback.call(null, target_id);
            }

            return self;
        },

        /*
         * Unregisters an event listener that gets called when the event fires.
         *
         * @param eventName (String): Name of the event to stop listening for.
         */
        removeEvent: function(eventName) {
            if (!this.element) {
                return false;
            }

            var self = this,
                element = self.element,
                target_id = element.id !== '' ? element.id : null,
                removed = removeCallback(eventName, target_id);

            // The ready event is not registered
            if (eventName != 'ready' && removed) {
                postMessage('removeEventListener', eventName, element);
            }
        }
    };

    /**
     * Handles posting a message to the parent window.
     *
     * @param method (String): name of the method to call inside the player. For api calls
     * this is the name of the api method (api_play or api_pause) while for events this method
     * is api_addEventListener.
     * @param params (Object or Array): List of parameters to submit to the method. Can be either
     * a single param or an array list of parameters.
     * @param target (HTMLElement): Target iframe to post the message to.
     */
    function postMessage(method, params, target) {
        if (!target.contentWindow.postMessage) {
            return false;
        }
        var url = target.getAttribute('src').split('?')[0],
            data = JSON.stringify({
                method: method,
                value: params
            });

        if (url.substr(0, 2) === '//') {
            url = window.location.protocol + url;
        }

        target.contentWindow.postMessage(data, url);
    }

    /**
     * Event that fires whenever the window receives a message from its parent
     * via window.postMessage.
     */
    function onMessageReceived(event) {
        var data, method;

        try {
            data = JSON.parse(event.data);
            method = data.event || data.method;
        }
        catch(e)  {
            //fail silently... like a ninja!
        }

        if (method == 'ready' && !isReady) {
            isReady = true;
        }

        // Handles messages from moogaloop only
        if (event.origin != playerDomain) {
            return false;
        }

        var value = data.value,
            eventData = data.data,
            target_id = target_id === '' ? null : data.player_id,

            callback = getCallback(method, target_id),
            params = [];

        if (!callback) {
            return false;
        }

        if (value !== undefined) {
            params.push(value);
        }

        if (eventData) {
            params.push(eventData);
        }

        if (target_id) {
            params.push(target_id);
        }

        return params.length > 0 ? callback.apply(null, params) : callback.call();
    }


    /**
     * Stores submitted callbacks for each iframe being tracked and each
     * event for that iframe.
     *
     * @param eventName (String): Name of the event. Eg. api_onPlay
     * @param callback (Function): Function that should get executed when the
     * event is fired.
     * @param target_id (String) [Optional]: If handling more than one iframe then
     * it stores the different callbacks for different iframes based on the iframe's
     * id.
     */
    function storeCallback(eventName, callback, target_id) {
        if (target_id) {
            if (!eventCallbacks[target_id]) {
                eventCallbacks[target_id] = {};
            }
            eventCallbacks[target_id][eventName] = callback;
        }
        else {
            eventCallbacks[eventName] = callback;
        }
    }

    /**
     * Retrieves stored callbacks.
     */
    function getCallback(eventName, target_id) {
        if (target_id) {
            return eventCallbacks[target_id][eventName];
        }
        else {
            return eventCallbacks[eventName];
        }
    }

    function removeCallback(eventName, target_id) {
        if (target_id && eventCallbacks[target_id]) {
            if (!eventCallbacks[target_id][eventName]) {
                return false;
            }
            eventCallbacks[target_id][eventName] = null;
        }
        else {
            if (!eventCallbacks[eventName]) {
                return false;
            }
            eventCallbacks[eventName] = null;
        }

        return true;
    }

    /**
     * Returns a domain's root domain.
     * Eg. returns http://vimeo.com when http://vimeo.com/channels is sbumitted
     *
     * @param url (String): Url to test against.
     * @return url (String): Root domain of submitted url
     */
    function getDomainFromUrl(url) {
        if (url.substr(0, 2) === '//') {
            url = window.location.protocol + url;
        }

        var url_pieces = url.split('/'),
            domain_str = '';

        for(var i = 0, length = url_pieces.length; i < length; i++) {
            if(i<3) {domain_str += url_pieces[i];}
            else {break;}
            if(i<2) {domain_str += '/';}
        }

        return domain_str;
    }

    function isFunction(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    }

    function isArray(obj) {
        return toString.call(obj) === '[object Array]';
    }

    // Give the init function the Froogaloop prototype for later instantiation
    Froogaloop.fn.init.prototype = Froogaloop.fn;

    // Listens for the message event.
    // W3C
    if (window.addEventListener) {
        window.addEventListener('message', onMessageReceived, false);
    }
    // IE
    else {
        window.attachEvent('onmessage', onMessageReceived);
    }

    // Expose froogaloop to the global object
    return (window.Froogaloop = window.$f = Froogaloop);

})();

function animateBannerHeading() {
  var heading = $('#page-heading');
  if ( heading.length ) {
    var tl = new TimelineMax({
      onStart: function() {

      },
    });
    tl.to(heading, '.4', {opacity: 1, y: 0});
  } 
}

function lazyscroll() {
  var lazyImg = $('.lazyscroll');
  if (lazyImg.length > 0 ) {
    lazyImg.each(function() {
      var el = $(this);
      new Waypoint({
        element: el,
        handler: function(){
          var img = this.element;
          var imgUrl = img.attr('data-original');
          img.attr('data-lazy',imgUrl);
          // Manually load first image
          img.css('background-image','url("'+imgUrl+'")'); //replace with background instead
          img.addClass('loaded');
        },
        offset: '200%' // when top of image is 100vh below bottom of viewport
      });
      new Waypoint({
        element: el,
        handler: function(){
          var img = this.element;
          TweenLite.to(
            img, 1.5, {ease: Power4.easeOut, y: 0, opacity: 1, onComplete:function(){
              if (img.parent('.statement-img').length > 0 ) {
                img.parent('.statement-img').addClass('loaded');
              }
            }})
        },
        offset: '75%' // when top of el is 25% from the bottom of the viewport
      });
    })
  }
}

function slideinEls() {
  var els = $('.slide-in');
  if (els.length > 0 ) {
    els.each(function() {
      var el = $(this);
      new Waypoint({
        element: el,
        handler: function(){
          var el = this.element;
          TweenLite.to(
            // el, 1.5, {ease: Power4.easeOut, y: 0, opacity: 1, onComplete:function(){
            el, 1.5, {y: 0, opacity: 1, onComplete:function(){
            // el, 1.5, {ease: Power4.easeOut, y: 0, opacity: 1, onComplete:function(){
              if (el.parent('.statement-img').length > 0 ) {
                el.parent('.statement-img').addClass('loaded');
              }
            }})
        },
        offset: '75%' // when top of el is 25% from the bottom of the viewport
      });
    })
  }
}

function fadeinEls() {
  var els = $('.fade-in');
  if (els.length > 0 ) {
    els.each(function() {
      var el = $(this);
      new Waypoint({
        element: el,
        handler: function(){
          var el = this.element;
          TweenLite.to(
            el, 1.5, {ease: Power4.easeOut, opacity: 1})
        },
        offset: '75%' // when top of el is 25% from the bottom of the viewport
      });
    })
  }
}



var animateComponents = {
	animateParallax: function() {
    // var scrolled = $(window).scrollTop();
    // $('.enquire-section.bg-el').css('top',(0-(scrolled*.5))+'px');
    // no parallax on mobile
    if ( Modernizr.mq("screen and (max-width:" + bp_tablet + "px)") ) { return; }

    var items = $("[data-parallax]"),
    scrollY = window.scrollY;
    parallax(scrollY);
    
    function parallax(e) {
      $(items).each(function() {
        var item = $(this),
        height = item.outerHeight(),
        unit = item.attr("data-parallax");
        (window.outerHeight - height) / 2;
        
        var top = item.offset().top - $(window).scrollTop(),
        offset = top * - unit * .04;
        TweenLite.to(item, 1.5, {
          y: offset
        })
      })
    }

  },

  handleScroll: function(e) {
    e.preventDefault();
    var _this = e.data.obj;

    // Animate on scroll
    _this.animateParallax();
  },
  init: function() {

    var _this = this;

    $(window).on('scroll', {obj: _this}, _this.handleScroll); // passing _this to method

  }, 

  destroy: function() {

  }
}
var backToTop = {

	elId: '#mobile-back-to-top',

	toggleBackToTopDisplay: function(el) {
		var _this = this;
        var buffer = 200; // show 

        if ( $(window).scrollTop() > buffer && Modernizr.mq("screen and (max-width:"+bp_tablet_landscape+"px)") ) {
            if (el.hasClass('off')) {
                el.fadeIn().removeClass('off');
            }
        } else if ( ! el.hasClass('off') ) {
            el.addClass('off').fadeOut();
        }
	},
	init: function () {
		var _this = this;
		_this.el = $(this.elId);

		if (! _this.el ) { return; }

        // if close to top of the page, hide arrow;
        _this.toggleBackToTopDisplay(_this.el);
        $(window).on('scroll', function() {
        	_this.toggleBackToTopDisplay(_this.el);
    	});
        $(window).smartresize(function() {
        	_this.toggleBackToTopDisplay(_this.el);
        });

        // scroll on click
		_this.el.on('click', function() {
            $("html, body").animate({scrollTop: 0}, "200");
            return false;
        });

	},
	destroy: function() {
		var _this = this;
		this.el.off('click');
	}
} 
var collapsable = {
	// breakpoint: bp_cmsMobile+'px',
	breakpoint: bp_tablet_landscape+'px',
	initialized: false,
	collapse: function() {
		var _this = this;
		// show stacker-header
		_this.stackerHeader.addClass('visible');
		// add init class to section
		_this.stackerSection.addClass('collapse-init');
		// collapse sections
		_this.stackerSection.each(function(){
			if ( $(this).data('collapse') == "collapsed") {
				$(this).addClass('collapse');
			} else {
				$(this).addClass('collapse in');
			}
		})
	},

	destroy: function() {
		var _this = this;
		_this.stackerHeader.removeClass('visible');
		_this.stackerSection.css('height','auto');
		_this.stackerSection.removeClass("collapse in");
		_this.stackerSection.removeClass("collapse-init");

		_this.stackerHeader.each(function() {
			if ( $(this).attr('data-collapsed') === 'collapsed') {
				$(this).addClass('collapsed');
			}
		})

		_this.initialized = false;
	},

	init: function() {
		if ( this.initialized ) return;
		
		var _this = this;

		_this.initialized = true;

		_this.stackerSection = $(".stacker-section");
		_this.stackerHeader = $(".stacker-header");

		// on small screen
		//if ( $(window).width() < bootstrap_sm) {
		if ( Modernizr.mq("screen and (max-width:"+_this.breakpoint+")")) {
			_this.collapse();
		}
		// on resize
		$(window).smartresize(function () { 
			// if no initialized, collapse stacker
	    if ( Modernizr.mq("screen and (max-width:"+_this.breakpoint+")") && !_this.stackerSection.hasClass("collapse-init") ) {
				_this.collapse();
			} else if ( !Modernizr.mq("screen and (max-width:"+_this.breakpoint+")") && _this.stackerSection.hasClass("collapse-init")) {
				// if big screen, destroy accordion
				_this.destroy();
			}
	  	})

	}
}
var floorplan = {
    zoomLevel: 1,
    maxZoomOut: 1,
    maxZoomIn: 4,
	zoom: function(zoom) {

		var _this = this;

		if (_this.zoomLevel < _this.maxZoomOut + 0.1) {
		    _this.zoom_out.addClass('disabled');
		    _this.zoom_in.removeClass('disabled');
		} else {
		    _this.zoom_out.removeClass('disabled');
		}

		if (_this.zoomLevel > _this.maxZoomIn - 0.1) {
		    _this.zoom_in.addClass('disabled');
		    _this.zoom_out.removeClass('disabled');
		} else {
		    _this.zoom_in.removeClass('disabled');
		}

		_this.floorplan.css('transform', 'scale(' + zoom + ')');
	},
	zoomEvents: function() {
		var _this = this;

	    // zoom in
	    _this.zoom_in.on('click', function () {
			if (_this.zoomLevel > _this.maxZoomIn - 0.1) {
			    _this.zoomLevel = _this.maxZoomIn;
			} else {
			    _this.zoomLevel += 0.2;
			}
			_this.container.draggable('enable');
			_this.container.css('cursor', 'move');
			_this.zoom(_this.zoomLevel);
	    });

	    // zoom out
	    _this.zoom_out.on('click', function () {
			if (_this.zoomLevel < _this.maxZoomOut + 0.1) {
			    _this.zoomLevel = _this.maxZoomOut;
			} else {
			    _this.zoomLevel -= 0.2;
			}

			// if default zoom, disable draggable and reset cursor
			if (_this.zoomLevel == _this.maxZoomOut) {

			    $(_this.container).css({
					// 'top': '50%',
					// 'left': '50%',
					'top': '',
					'left': '',
					'bottom':'',
					'right':''
			    })
			    _this.container.draggable('disable');
			    _this.container.css('cursor', 'default');
			};

			_this.zoom(_this.zoomLevel);
		});
	},
	openModal: function(file_name, pdf_file_name, heading, subheading) {
		var _this = this;

		var modal = $('.js-templates .floorplan-modal').clone().attr('id','floorplan_modal');
		_this.modal = modal;
		_this.container = _this.modal.find('.floorplan-container .svg_container');

		// add svg
		// _this.container.append('<img src="/img/floorplan/svg/'+file_name+'.svg" alt="floorplan svg" />');
		_this.container.append('<img src="/img/floorplan/svg/'+file_name+'.svg" alt="floorplan" />');
		_this.floorplan = _this.container.find('img');

		// add heading
		// _this.modal.find('.floorplan-info h3').html(heading);
		_this.modal.find('.floorplan-info').append('<h5 class="subheading">' + subheading + '</h5><h3 class="heading">' + heading + '</h3>');

		// add download link
		_this.modal.find('.dl-floorplan a').attr('href','/img/floorplan/pdf/'+pdf_file_name+'.pdf');

		// show modal
		// _this.modal.modal('show');
		_this.modal.modal({
		  backdrop: false
		})
		_this.modal.modal('show');

		// === Draggable
	 	_this.container.draggable();

	 	// === Zoom Actions
	 	_this.zoom_in = _this.modal.find('#zoom_in'),
	 	_this.zoom_out = _this.modal.find('#zoom_out');
	 	_this.zoomEvents();

	 	// === when modal is closed, remove modal
	 	_this.modal.on('hidden.bs.modal', function () {
	 		_this.modal.remove();
	 		_this.modal = null;
	 	});

	},
	init: function() {
		var _this = this;

		return;

		// open floorplan modal on click
    $('.toggle-floorplan-modal').on('click', function() {
    	_this.openModal($(this).data('file-name'), $(this).data('pdf-file-name'), $(this).data('heading'), $(this).data('subheading'));
    });

	},
	destroy: function() {
		var _this = this;

		if ( !_this.modal ) { return; }

		// _this.modal.off('show.bs.modal');
		_this.modal.off('hidden.bs.modal');
		_this.zoom_in.off('click');
		_this.zoom_out.off('click');
	}
};
var forms = {
    // Enquire Form
    initEnquireForm: function() {
        var el = $('.liquid_enquire_form');
        if (el.length < 1) {
            return;
        }

        el.off('submit').on('submit', function(e) {
            var form = $(this);
            var data = form.serialize();
            var btn = form.find('.form-btn');

            if (!form.parsley().isValid()) {
              return;
            }

            $('.form-error-msg').hide();

            // Loader On.
            btn.addClass('loading');

            var request = $.ajax({
                type: "POST",
                url: "/form.php",
                data: data,
                dataType: "JSON"
            });

            request.done(function(result) {
                if (result.success) {
                    // Perform Javascript redirect here to thank you page.
                    window.location.href = "/thank-you.php";
                } else {
                    // Loader Off.
                    btn.removeClass('loading');

                    $('.form-error-msg').show();
                }
            });

            request.fail(function() {
                // Loader Off.
                btn.removeClass('loading');

                $('.form-error-msg').show();
            });
        });
    },
    // Download Brochure Form
    initDlForm: function() {
        var el = $('.liquid_dl_brochure_form');

        if (el.length < 1) {
            return;
        }

        el.off('submit').on('submit', function(e) {
            var form = $(this);
            var data = form.serialize();
            var btn = form.find('.form-btn');

            if (!form.parsley().isValid()) {
              return;
            }

            $('.form-error-msg').hide();

            // Loader On.
            btn.addClass('loading');

            var request = $.ajax({
                type: "POST",
                url: "/brochure.php",
                data: data,
                dataType: "JSON"
            });

            request.done(function(result) {
                if (result.success) {
                    // Perform Javascript redirect here to thank you page.
                    window.location.href = "/thank-you-download.php";
                } else {
                    // Loader Off.
                    btn.removeClass('loading');

                    $('.form-error-msg').show();
                }
            });

            request.fail(function() {
                // Loader Off.
                btn.removeClass('loading');

                $('.form-error-msg').show();
            });
        });
    },
};

var lazyload = {

	addSource: function(img) {
		var _this = this;

		// Mobile Image ( - 991px )
		if ( Modernizr.mq("screen and (max-width:" + bp_cmsMobile + "px)") ) {
			img.each(function () {
				$(this).attr("data-original",  $(this).attr('data-mobileImage'));
			});
		} 
		// Desktop image (992px + )
		else {
			img.each(function () {
				$(this).attr("data-original",  $(this).attr('data-fullImage'));
			});
		}
	},

	load:function(img) {
		var _this = this;

		img.each(function() {
			var img = $(this);
			if ( img.hasClass('loaded') ) { return; }
			if ( Modernizr.mq("screen and (max-width:" + bp_cmsMobile + "px)") && img.hasClass('mobile-hidden') ) { return; }

			// === Load Image
			img.lazyload({
				effect: "fadeIn",
				effectspeed: 500,
				threshold: 200,
				load: function() {
					$(this).removeClass('loading');
					$(this).addClass('loaded');
					if ( $(this).attr('data-lz-class','parent') ) {
						$(this).parent().removeClass('loading');
					}
				}
			});
		})

	},

	init: function() {

		var _this = this;

		// _this.img = $("img.lazyload");
		// _this.bgImg = $("div.lazyload");

		_this.el = $(".lazyload");

		if ( _this.el.length < 1 ) { return; }

		_this.addSource(_this.el);
		_this.load(_this.el);
		$(window).smartresize(function() {
			_this.load(_this.el);
		})

	}
}
var locationMap = {
  mapContainerId: 'location_map_container',
  mapId: 'location_map',
  clusterMaxZoom: 11,
  mapStyleUrl: 'mapbox://styles/liquidmelbourne/cjlvjafwa2k3x2sky68hv6t4q',
  mapKey: 'pk.eyJ1IjoibGlxdWlkbWVsYm91cm5lIiwiYSI6ImNqbXNjNWNrbDAwYmQza21ycXFlMGxtaGEifQ.QiLzI5Qf-YxBQCksU-fQWw',
  createPopup: function (feature) {
    var _this = this;
    var p = feature.properties;
    var g = feature.geometry;

    _this.removePopup();

    var html = '';

    html += '<p class="lead title mb0">'+p.title+'</p>';
    
    var popup = new mapboxgl.Popup({ 
      closeOnClick: false, 
      offset: [0, 0],
      anchor: 'bottom'
    })
    .setLngLat(g.coordinates)
    .setHTML(html)
    .addTo(_this.map);

    popup.on('close',function(){
      _this.removeActiveListing(p.id);
      _this.removeActiveSymbol();
    })

    // _this.map.easeTo({center: _this.coord});
  },
  removePopup: function() {
    if ( this.mapInit == false ) { return; }
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();
  },
  resetFitBounds: function(animate) {
    var _this = this;

    if ( _this.mapInit == false ) { return; }

    var mapPadding = 100;
    var sidebarWidth = parseInt($('#'+_this.mapContainerId).find('.location-list').outerWidth(), 10);
    var mapLeftPadding = sidebarWidth; // sidebar width

    if ( Modernizr.mq("screen and (max-width:"+bp_lg_laptop+"px)") ) {
      mapPadding = 60;
      mapLeftPadding = sidebarWidth; // sidebar width
    }
    if ( Modernizr.mq("screen and (max-width:"+bp_tablet+"px)") ) {
      mapPadding = 40;
      mapLeftPadding = mapPadding; // sidebar width
    }
    if ( Modernizr.mq("screen and (max-width:"+bp_mobile+"px)") ) {
      mapPadding = 20;
      mapLeftPadding = mapPadding; // sidebar width
    }

    _this.offsetX = mapLeftPadding;

    var options = {
      padding: {top: mapPadding, bottom:mapPadding, left: mapLeftPadding, right: mapPadding}
    }
    

    if ( !animate ) {
      options.linear = true;
    }

    if ( !status ) {
      status = null;
    }

    _this.map.fitBounds(_this.mapBbox, options);

  },
  updateMapPosition: function(features) {
    var _this = this;

    // center marker
    _this.mapBbox = new mapboxgl.LngLatBounds();
    _this.mapBbox.extend(_this.coord);

    // pins
    if ( features ) {
      features.forEach(function(f) {
        _this.mapBbox.extend(f.geometry.coordinates);
      });
    }

    _this.resetFitBounds(false);
    _this.map.once('moveend', fitBoundsEnd);

    function fitBoundsEnd() {
      $('#'+_this.mapContainerId).removeClass('loading');
      _this.map.off('moveend', fitBoundsEnd);
    }
    _this.map.on('resize',function(){
      // recenter map (with animation)
      _this.resetFitBounds(true);

    })
  },

  buildListing: function(data) {
    var _this = this;
    // no projects found
    if ( data.features.length < 1 ) {
      _this.sidebar.append('<p>Nothing found</p>');
      _this.sidebar.addClass('empty');
      return; 
    } else {
      _this.sidebar.removeClass('empty');
    }

    var listings = $('<ul id="location_map_listing" class="location_list list-style-none"></ul>').appendTo(_this.sidebar);

    for (i = 0; i < data.features.length; i++) {
      var currentFeature = data.features[i];
      var prop = currentFeature.properties;


      // var item = '<li id="listing-'+ i +'" class="item"></li>';
      var item = '<li id="listing-'+ prop.id +'" class="item"></li>';
      var listing = $(item).appendTo(listings);

      listing.append('<div class="distance">'+prop.distance+'</div><div class="heading">'+prop.title+'</div>');
      listing.attr('data-position',i);

      listing.on('click', function(e) {
        var index = $(this).attr('data-position');

        var feature = data.features[index];
        var lngLat = feature.geometry.coordinates;

        _this.setActiveListing(feature.properties.id);

        // setActiveItem(index);

        // Active marker
        // $('.projects-map-marker.active').removeClass('active');
        // $('.projects-map-marker').eq(index).addClass('active');

        // Update the currentFeature to the item associated with the clicked link
        var clickedListing = data.features[index];
        // Fly to the point associated with the clicked link
        _this.flyToSymbol(clickedListing);

        _this.removeActiveSymbol();
        $('.mapboxgl-popup-close-button').trigger('click');

        
        _this.map.on('move', clickListingMove);
        var z = _this.map.getZoom();
        
        // activate listing when zoom level does not allow clusters
        function clickListingMove(e) {
          var currentZoom = _this.map.getZoom();
          var zoomingIn = currentZoom > z;
          z = currentZoom;

          if ( zoomingIn && Math.floor(currentZoom) > _this.clusterMaxZoom ) {
            _this.setActiveSymbol(feature);
            _this.createPopup(clickedListing);

            _this.map.off('move', clickListingMove);
          }
        }

        // Mobile: scroll to top of map
        if ( Modernizr.mq("screen and (max-width:"+bp_tablet+"px)") ) {
          var top = _this.container.offset().top;
          $('body,html').stop().animate({
            'scrollTop': top - 90 // 90 mobile menu
          }, 200);
        }


      });
     
    }
  },

  flyToSymbol: function(currentFeature) {
    var _this = this;
    // var zoom = _this.clusterMaxZoom + 2; // make sure there is no cluster at this zoom level
    var zoom = _this.clusterMaxZoom + 1; // make sure there is no cluster at this zoom level

    _this.map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: zoom,
      speed: 1.5, //default: 1.2
      offset: [0, 40]
    });
  },

  setActiveSymbol: function(feature) {
    var _this = this;
    var location = _this.geojson.features.filter(function(f) {
      return f.properties.id === feature.properties.id;
    }, feature);

    var location_geojson = {
      "type": "FeatureCollection",
      "features": location
    };

    if ( _this.map.getSource('active_location') ) {
      _this.map.removeSource('active_location');
    }  
    if ( _this.map.getLayer('unclustered-point-active') ) {
      _this.map.removeLayer('unclustered-point-active');
    }

    _this.map.addSource('active_location', {
      type: 'geojson',
      data: location_geojson,
      cluster: true,
      clusterMaxZoom: _this.clusterMaxZoom, // Max zoom to cluster points on
      // clusterMaxZoom: _this.clusterMaxZoom, // Max zoom to cluster points on
      clusterRadius: 60 // Radius of each cluster when clustering points (defaults to 50)
    });

    _this.map.addLayer({
      "id": "unclustered-point-active",
      "type": "symbol",
      "source": "active_location",
      "layout": {
        "icon-image": "pin-active",
        "icon-size": .5,
      }
    });
  },

  removeActiveSymbol: function() {
    var _this = this;
    if ( _this.map.getSource('active_location') ) {
      _this.map.removeSource('active_location');
    }
    if ( _this.map.getLayer('unclustered-point-active') ) {
      _this.map.removeLayer('unclustered-point-active');
    }
  },


  setActiveListing: function(id) {
    var _this = this;
    $('#location_map_listing .item.active').removeClass('active');
    $('#listing-' + id).addClass('active');
  },

  removeActiveListing: function(id) {
    var _this = this;
    $('#listing-' + id).removeClass('active');
  },

  addPins: function() {
    var _this = this;

    _this.map.addSource('locations', {
      type: 'geojson',
      data: _this.geojson,
      cluster: true,
      clusterMaxZoom: _this.clusterMaxZoom, // Max zoom to cluster points on
      clusterRadius: 60 // Radius of each cluster when clustering points (defaults to 50)
    });

    _this.map.addLayer({
      id: "clusters",
      type: "circle",
      source: "locations",
      filter: ["has", "point_count"],
      paint: {
        "circle-color": {
          property: "point_count",
          type: "interval",
          stops: [
            [0, "#CA984D"], //EBC17C (light gold)
            [20, "#CA984D"],
          ]
        },
        "circle-radius": {
          property: "point_count",
          type: "interval",
          stops: [
            [0, 20],
            [20, 30],
          ]
        }
      }
    });
    _this.map.loadImage(_this.mapPin, function(error, image) {
      if (error) throw error;
      _this.map.addImage('pin', image);
   
      _this.map.addLayer({
        "id": "unclustered-point",
        "type": "symbol",
        "source": "locations",
        "layout": {
          "icon-image": "pin",
          "icon-size": .5,
          // "icon-allow-overlap": true,
          // "icon-ignore-placement": true,
          // "text-allow-overlap": true
        }
      });

      _this.map.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "locations",
        filter: ["has", "point_count"],
        paint: {
          "text-color": "#ffffff",
        },
        layout: {
          "text-field": "{point_count_abbreviated}",
          "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
          "text-size": 12,
          "icon-image": ""
        }
      }); 

      _this.updateMapPosition(_this.geojson.features);
    });

    _this.map.loadImage(_this.mapPinActive, function(error, image){
      if (error) throw error;
      _this.map.addImage('pin-active', image);
    });

    // Change the cursor to a pointer when the mouse is over a cluster
    _this.map.on('mouseenter', 'clusters', function () {_this.map.getCanvas().style.cursor = 'pointer';});
    _this.map.on('mouseleave', 'clusters', function () {_this.map.getCanvas().style.cursor = '';});
    
    // Change the cursor to a pointer when the mouse is over a pin
    _this.map.on('mouseenter', 'unclustered-point', function () {_this.map.getCanvas().style.cursor = 'pointer';});
    _this.map.on('mouseleave', 'unclustered-point', function () {_this.map.getCanvas().style.cursor = '';});


    // Click on cluster: zoom in
    // https://github.com/mapbox/supercluster/pull/33 code shared by bdoyle522 on Apr 28 2017
    _this.map.on('click', 'clusters', function (e) {
      
      var lngLat = e.features[0].geometry.coordinates;
      // var currentZoom = parseInt(map.getZoom());

      var superC = supercluster({
        // maxZoom: 21,
        maxZoom: _this.clusterMaxZoom + 1,
        radius: 60
      });

      superC.load(_this.geojson.features);


      // === Get cluster id using getTile instead of getClusters because more accurate.
      var x = e.features[0]._vectorTileFeature._x;
      var y = e.features[0]._vectorTileFeature._y;
      var z = e.features[0]._vectorTileFeature._z;

      var tile = superC.getTile(z, x, y);

      var tileCluster = tile.features.filter(function(f) {
        var isCluster = f.tags.cluster;
        var hasSamePointCount = f.tags.point_count == e.features[0].properties.point_count;
        return isCluster && hasSamePointCount;
      })
      var clusterId = tileCluster[0].tags.cluster_id;
      
    
      // === Zoom in to display unclustered points
      if(clusterId || clusterId === 0) {
        var zoom = superC.getClusterExpansionZoom(clusterId);
        _this.map.flyTo({center: lngLat, zoom: zoom});
      }
    });


    // Click on pin: select item in sidebar
    _this.map.on('click', 'unclustered-point', function(e) {
      
      // active symbol by adding a new point right here with a different image
      var feature = e.features[0];
      var prop = feature.properties;

      var $listing = $('#listing-' + prop.id);

      _this.setActiveSymbol(feature);

      _this.setActiveListing(prop.id);

      // TODO: remove marker on zoom

      // Fly to the point
      _this.flyToSymbol(feature);

      // Close all other popups and display popup for clicked store
      _this.createPopup(feature);


      // Scroll to listing in sidebar

      // get jquery lisiting
      // var $listings = $('.sidebar-content');
      // // get listing top offset
      // var listingOffset = $listing.offset().top;
      // // animate to offset
      // var offset = listingOffset - $listings.offset().top +  $listings.scrollTop();
      // $listings.animate({ scrollTop: offset }, 'slow');
    })

  },
  init: function() {
    var _this = this;

    if ( $('#' + _this.mapId).length < 1 ) { return; }

    _this.geojson = window.geojson;

    _this.container = $('#' + _this.mapContainerId);
    _this.el = $('#' + _this.mapId);
    _this.sidebar = _this.container.find('.location-list');

    _this.coord = [parseFloat(_this.el.attr('data-lng')), parseFloat(_this.el.attr('data-lat'))]; //[lng,lat]
    _this.markerUrl = _this.el.attr('data-marker');

    _this.mapZoom = parseInt(_this.el.attr('data-zoom'));
    _this.maxZoom = parseInt(_this.el.attr('data-zoom-max'));
    _this.minZoom = parseInt(_this.el.attr('data-zoom-min'));

   _this.mapPin = $('#' + _this.mapId).attr('data-pin');
   _this.mapPinActive = $('#' + _this.mapId).attr('data-pin-active');

    mapboxgl.accessToken = _this.mapKey;

    _this.map = new mapboxgl.Map({
      container: _this.mapId,
      style: _this.mapStyleUrl,
      zoom: _this.mapZoom,
      attributionControl: false,
      scrollZoom: false,
      maxZoom: _this.maxZoom,
      minZoom: _this.minZoom,
      center: _this.coord,
    });

    // disable map rotation using right click + drag
    _this.map.dragRotate.disable();
    if ($('html').hasClass('touch')) {
        _this.map.dragPan.disable();
      }

    _this.map.on('load',function(e) {

      // == Create central marker
      
      // create a DOM element for the marker on start
      var el = document.createElement('div');
      el.className = 'marker';

      $(el).append('<img src="'+_this.markerUrl+'" alt="" />');

      // add marker to map
      _this.marker = new mapboxgl.Marker(el, { offset: [0, 0] })
        .setLngLat(_this.coord)
        .addTo(_this.map);


      // == Create layer with locations
      _this.addPins();

      // == Create sidebar listing
      _this.buildListing(_this.geojson);
    

      // == Custom zoom
      var zoomControls = $('#'+_this.mapContainerId).find('.map-zoom-controls .control');
      zoomControls.on('click', function(e) {
        e.preventDefault();

        // Remove active state when click on zoom controls
        // This is because of active symbol displaying on top of clusters when zooming out...
        
        if ( _this.map.getLayer('unclustered-point-active') ) {
          // remove popup, unactive pin and listing
          $('.mapboxgl-popup-close-button').trigger('click');
        }

        var options = {
          offset: [_this.offsetX, 0]
        }

        // zoom in
        if ( $(this).hasClass('zoom-in') ) {
          _this.map.zoomIn();
        } 
        // zoom out
        else if ( $(this).hasClass('zoom-out') ) {
          _this.map.zoomOut();
        }
      })
    })

    $(window).smartresize(function(){
      _this.updateMapPosition(_this.geojson.features);
      _this.removeActiveSymbol();
      _this.removeActiveListing();
      _this.removePopup();
    })

  },
  destroy: function() {

  }
};

// ==== MOBILE MENU



var mobileMenu = {
    // transition events
    transEndEventNames: {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd',
        'transition': 'transitionend'
    },

    show: function() {
        var _this = this;
        _this.overlay.addClass( 'on' );
        _this.body.addClass( 'menu-on' );
        _this.triggerBtn.addClass( 'off' );

        _this.body.css( 'overflow', 'hidden' );
    },

    hide: function() {
        var _this = this;
        _this.overlay.removeClass('on').addClass('off');
        _this.body.removeClass('menu-on').addClass('menu-off');
        _this.triggerBtn.removeClass('off' ).addClass('on' );

        _this.body.css( 'overflow', '' );
        _this.body.css( 'padding-right', '0' );

        // update classes once transition finished
        _this.overlay.on(_this.transEndEventName, function() {
            _this.overlay.removeClass( 'off' );
            _this.body.removeClass( 'menu-off' );
            _this.triggerBtn.removeClass( 'on' );
        })
    },

    handleToggle: function() {
        var _this = this;
        if( _this.overlay.hasClass('on') ) {
            _this.hide();
        }
        else if( !_this.overlay.hasClass( 'off' ) ) {
            _this.show();
        } 
    },

    init: function() {
        var _this = this;

        _this.body = $('body');
        _this.triggerBtn = $( '.trigger-mobile-menu' );
        _this.overlay = $( '#mobile-menu' );
        _this.header = $('#main-header');

        _this.textOn = _this.triggerBtn.attr('data-on');
        _this.textOff = _this.triggerBtn.attr('data-off');

        _this.transEndEventName = _this.transEndEventNames[ Modernizr.prefixed( 'transition' ) ];

        // Toggle mobile menu - clear any previous click handlers
        _this.triggerBtn.off('click').on('click', function(){
            _this.handleToggle();
        } );

        // on resize, close mobile menu on bigger screens
        $(window).smartresize(function () { 
            if ( $(window).width() > 767 && _this.body.hasClass( 'menu-on' ) ) {
                _this.overlay.removeClass( 'on' );
                _this.body.removeClass( 'menu-on' );
                _this.triggerBtn.removeClass( 'off' );
            }
        })
    },

    destroy: function() {
        var _this = this;
        _this.overlay.removeClass( 'on' );
        _this.body.removeClass( 'menu-on' );
        _this.triggerBtn.removeClass( 'off' );
        _this.body.css( 'overflow', '' );
    }
}









var topPanel = {
    enquireId: '#enquire_panel',
    dlId: '#brochure_panel',
    overlay: '#panel_overlay',
    body: $('body'),
    transEndEventNames: {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd',
        'transition': 'transitionend'
    },
    enquireOpened: false,
    dlOpened: false,
    initialized: false,
    panelShadow: '0px 2px 44px 9px rgba(224, 224, 224, 0.5)',
    easing: 'Sine.easeOut', // https://greensock.com/ease-visualizer
    speed: '.3',
    panelSpeed: '.6',
    toggleDl: function() {
        var _this = this;
        if ( _this.dlOpened || _this.dlAnimating ) {
            _this.closeDl();
       } else {
            if (_this.enquireOpened) { 
                _this.closeEnquire(); 
            } 
            _this.openDl();
        }
        //  } else {
        //     _this.openDl();
        // }
    },
    toggleEnquire: function() {
        var _this = this;
        if ( _this.enquireOpened || _this.enquireAnimating ) {
            _this.closeEnquire();
        // } else {
        //     _this.openEnquire();
        // }
        } else {
            if (_this.dlOpened) { 
                _this.closeDl(); 
            }
            _this.openEnquire();
        }
    },
    openEnquire: function() {
        var _this = this;
        if ( _this.enquireOpened ) return;

        // hide mobile menu if open 
        if ( $('body').hasClass('menu-on') ) {
            mobileMenu.hide();
        }

        // animate form icon and text (done in css)
        _this.triggerEnquire.addClass('off');

        // disable scroll
        _this.body.addClass( 'no-scroll' ); 


        var heading = _this.enquirePanel.find('.panel-heading');
        var lead = _this.enquirePanel.find('.col-copy .lead');
        var copy = _this.enquirePanel.find('.col-copy .contained-copy');
        var form = _this.enquirePanel.find('.form-container');


        _this.openEnquireTl = new TimelineMax({
            onStart: function(){
                _this.enquireAnimating = true;
                $(_this.enquirePanel).css('opacity', '1');
                $(_this.overlay).css('visibility', 'visible');
                $(_this.enquirePanel).css('box-shadow', _this.panelShadow);

                $('body').addClass('enquire-on');
            },
            onComplete: function() {
                _this.enquireOpened = true;
                _this.enquireAnimating = false;
            }
        });

        // Set elements to be hidden
        _this.openEnquireTl.set(heading, { opacity: '0', visibility: 'hidden', y: '-30px'}); 
        _this.openEnquireTl.set(lead, { opacity: '0', visibility: 'hidden', y: '-30px'}); 
        _this.openEnquireTl.set(copy, { opacity: '0', visibility: 'hidden', y: '-30px'}); 
        _this.openEnquireTl.set(form, { opacity: '0', visibility: 'hidden', y: '-30px'}); 

        _this.openEnquireTl.set(_this.enquirePanel, {x:"0", y:"-100%"});

        // Fade in 
        // Tablet: Fade form before copy
        if ( Modernizr.mq("screen and (max-width:"+bp_tablet+"px)") ) {
            
        _this.openEnquireTl.to(_this.overlay,  _this.panelSpeed, { opacity: '1' })
            .to(_this.enquirePanel, _this.panelSpeed, { y: '0%', ease: _this.easing }, '0')
            // content elements
            .to(form, _this.speed, { opacity: '1', visibility: 'visible', y: '0', ease: _this.easing })
            .to(heading, _this.speed, { opacity: '1', visibility: 'visible', y: '0', ease: _this.easing })
            .to(lead, _this.speed, { opacity: '1', visibility: 'visible', y: '0', ease: _this.easing })
            .to(copy, _this.speed, { opacity: '1', visibility: 'visible', y: '0', ease: _this.easing });

        } else {

        _this.openEnquireTl.to(_this.overlay,  _this.panelSpeed, { opacity: '1' })
            .to(_this.enquirePanel, _this.panelSpeed, { y: '0%', ease: _this.easing }, '0')
            // content elements
            .to(heading, _this.speed, { opacity: '1', visibility: 'visible', y: '0', ease: _this.easing })
            .to(lead, _this.speed, { opacity: '1', visibility: 'visible', y: '0', ease: _this.easing })
            .to(copy, _this.speed, { opacity: '1', visibility: 'visible', y: '0', ease: _this.easing })
            .to(form, _this.speed, { opacity: '1', visibility: 'visible', y: '0', ease: _this.easing });
        }
    },
    closeEnquire: function() {
        var _this = this;

        // if open form still animating
        if ( _this.openEnquireTl.isActive() ) {
            // pause animation
            _this.openEnquireTl.pause();
            // set the time at wich the animation begins
            // _this.openEnquireTl.startTime();
            _this.enquireOpened = true;
            _this.enquireAnimating = false;
        }

        // animate form icon and text (done in css)
        _this.triggerEnquire.removeClass('off');


        var tl = new TimelineMax({
            onComplete: function() {
                _this.enquireOpened = false;
                // enable scroll
                _this.body.removeClass( 'no-scroll' ); 
                if ( !_this.dlAnimating ) {
                    $(_this.overlay).css('visibility', 'hidden');
                }
                $(_this.enquirePanel).css('opacity', '0');

                this.set(_this.enquirePanel,{clearProps:"transformOrgin,transform"});
                this.set(_this.enquirePanel.find('.panel-content'),{clearProps:"boxShadow"});

                $('body').removeClass('enquire-on');
            }
        });

        // remove shadow
        tl.to(_this.enquirePanel.find('.panel-content'), 0, { boxShadow: 'none' }, '0')

            // fade out content elements
            .to(_this.enquirePanel.find('.panel-heading'), _this.speed, { opacity: '0', ease: _this.easing }, '0')
            .to(_this.enquirePanel.find('.col-copy .lead'), _this.speed, { opacity: '0', ease: _this.easing }, '0')
            .to(_this.enquirePanel.find('.col-copy .contained-copy'), _this.speed, { opacity: '0', ease: _this.easing }, '0')
            .to(_this.enquirePanel.find('.form-container'), _this.speed, { opacity: '0', ease: _this.easing }, '0')

            // slide out panel
            .to(_this.enquirePanel, _this.panelSpeed, { y: '-100%', ease: _this.easing }, '0')
            // hide overlay
            .to(_this.overlay,  _this.panelSpeed, { opacity: '0' }, '0');

    },
    openDl: function() {
        var _this = this;
        if ( _this.dlOpened ) return;

        // hide mobile menu if open 
        if ( $('body').hasClass('menu-on') ) {
            mobileMenu.hide();
        }

        // disable scroll
        _this.body.addClass( 'no-scroll' ); 


        var heading = _this.dlPanel.find('.panel-heading');
        var img = _this.dlPanel.find('.col-left .img-wrapper');
        var lead = _this.dlPanel.find('.lead');
        var form = _this.dlPanel.find('.form-container');
        var close = _this.dlPanel.find('.trigger-brochure');


        _this.openDlTl = new TimelineMax({
            onStart: function(){
                _this.dlAnimating = true;
                $(_this.dlPanel).css('opacity', '1');
                $(_this.overlay).css('visibility', 'visible');
                $(_this.dlPanel).css('box-shadow', _this.panelShadow);

                $('body').addClass('dl-brochure-on');
            },
            onComplete: function() {
                _this.dlOpened = true;
                _this.dlAnimating = false;
            }
        });

        // Set elements to be hidden
        _this.openDlTl.set(heading, { opacity: '0', visibility: 'hidden', y: '-30px'}); 
        _this.openDlTl.set(lead, { opacity: '0', visibility: 'hidden', y: '-30px'}); 
        _this.openDlTl.set(form, { opacity: '0', visibility: 'hidden', y: '-30px'}); 
        _this.openDlTl.set(close, { opacity: '0', visibility: 'hidden'}); 

        _this.openDlTl.set(_this.dlPanel, {x:"0", y:"-100%"});

        if ( !Modernizr.mq("screen and (max-width:"+bp_tablet+"px)") ) {
            _this.openDlTl.set(img, { opacity: '0', visibility: 'hidden', y: '-30px'}); 
        }

        // Fade in 
        // Tablet: Fade form before copy
        if ( Modernizr.mq("screen and (max-width:"+bp_tablet+"px)") ) {
            
        _this.openDlTl.to(_this.overlay,  _this.panelSpeed, { opacity: '1' })
            .to(_this.dlPanel, _this.panelSpeed, { y: '0%', ease: _this.easing }, '0')
            // content elements
            .to(heading, _this.speed, { opacity: '1', visibility: 'visible', y: '0', ease: _this.easing })
            .to(lead, _this.speed, { opacity: '1', visibility: 'visible', y: '0', ease: _this.easing })
            .to(form, _this.speed, { opacity: '1', visibility: 'visible', y: '0', ease: _this.easing })
            .to(close, _this.speed, { opacity: '1', visibility: 'visible', ease: _this.easing });

        } else {

        _this.openDlTl.to(_this.overlay,  _this.panelSpeed, { opacity: '1' })
            .to(_this.dlPanel, _this.panelSpeed, { y: '0%', ease: _this.easing }, '0')
            // content elements
            .to(heading, _this.speed, { opacity: '1', visibility: 'visible', y: '0', ease: _this.easing })
            .to(img, _this.speed, { opacity: '1', visibility: 'visible', y: '0', ease: _this.easing })
            .to(lead, _this.speed, { opacity: '1', visibility: 'visible', y: '0', ease: _this.easing })
            .to(form, _this.speed, { opacity: '1', visibility: 'visible', y: '0', ease: _this.easing })
            .to(close, _this.speed, { opacity: '1', visibility: 'visible', ease: _this.easing });
        }
    },

    closeDl: function() {
        var _this = this;

        // if open form still animating
        if ( _this.openDlTl.isActive() ) {
            // pause animation
            _this.openDlTl.pause();
            // set the time at wich the animation begins
            // _this.openEnquireTl.startTime();
            _this.dlOpened = true;
            _this.dlAnimating = false;
        }


        var tl = new TimelineMax({
            onComplete: function() {
                _this.dlOpened = false;
                // enable scroll
                _this.body.removeClass( 'no-scroll' ); 
                if ( !_this.enquireAnimating ) {
                    $(_this.overlay).css('visibility', 'hidden');
                }
                $(_this.dlPanel).css('opacity', '0');

                this.set(_this.dlPanel,{clearProps:"transformOrgin,transform"});
                this.set(_this.dlPanel.find('.panel-content'),{clearProps:"boxShadow"});

                $('body').removeClass('dl-brochure-on');
            }
        });

        // remove shadow
        tl.to(_this.dlPanel.find('.panel-content'), 0, { boxShadow: 'none' }, '0')

            // fade out content elements
            .to(_this.dlPanel.find('.panel-heading'), _this.speed, { opacity: '0', ease: _this.easing }, '0')
            .to(_this.dlPanel.find('.col-left .img-wrapper'), _this.speed, { opacity: '0', ease: _this.easing }, '0')
            .to(_this.dlPanel.find('.lead'), _this.speed, { opacity: '0', ease: _this.easing }, '0')
            .to(_this.dlPanel.find('.form-container'), _this.speed, { opacity: '0', ease: _this.easing }, '0')
            .to(_this.dlPanel.find('.trigger-brochure'), _this.speed, { opacity: '0', ease: _this.easing }, '0')

            // slide out panel
            .to(_this.dlPanel, _this.panelSpeed, { y: '-100%', ease: _this.easing }, '0')
            // hide overlay
            .to(_this.overlay,  _this.panelSpeed, { opacity: '0' }, '0');

    },
    init: function() {

        var _this = this; 

        _this.initialized = true;

        _this.triggerEnquire = $('#main_enquire_toggle, #mobile_toggle_form');
        _this.triggerDl = $('.trigger-brochure');

        $('.enquire-toggle').off('click').on('click', function(e){
            e.preventDefault();
            _this.triggerEnquire.click();
        });

        _this.enquirePanel = $(_this.enquireId);
        _this.dlPanel = $(_this.dlId);

        // toggle Enquire Panel
        if ( _this.triggerEnquire.length ) {
            _this.triggerEnquire.off('click').on("click", function (e) {
                e.preventDefault();
                $(this).blur(); // remove focus
               _this.toggleEnquire();
           })
        }
        // toggle Download Panel
        if ( _this.triggerDl.length ) {
            _this.triggerDl.off('click').on("click", function (e) {
                e.preventDefault();
                $(this).blur(); // remove focus
               _this.toggleDl();
           })
        }

        // on click on overlay, close panels
        if ( _this.overlay.length ) {
            $(document).on('click', _this.overlay, function(e){
               if ( _this.enquireOpened ) { _this.closeEnquire(); }
               if ( _this.dlOpened ) { _this.closeDl(); }
            })
        }
        
    },
    destroy: function() {
        this.body.removeClass( 'no-scroll' ); 
    }
};


// ======== CONTENT SLIDERS

var contentSlider_instances = [];

var initContentSliders = function() {
  var contentSliders = $('.content-slider-container');

  if ( contentSliders.length ) {
    contentSliders.each(function(index, item){
      contentSlider_instances.push(initContentSlider($(item), index));
    })

  }
}
var destroyContentSliders = function() {
  var instance;
  while (contentSlider_instances.length) {
    instance = contentSlider_instances.shift();
    instance.destroy();
  }
}

var initContentSlider = function (container, index) {

  var contentSlider = {
    initialized: false,

    setActive: function(item) {
      this.navItems.removeClass('active');
      item.addClass('active');
    },

    draw: function(){

      var _this = this;

      // return if already init
      if ( _this.initialized ) return;

      // set first one to be active
      _this.setActive(_this.navItems.eq(0));

      // === EVENTS

      _this.el.on('init', function (slick) {
        _this.container.removeClass('loading');
        _this.container.addClass('initialized');
        _this.container.find('.slider-loader').fadeOut();

        var active = _this.el.find('.slick-active');

      _this.initialized = true;
      });

      // On Slide Change
      _this.el.on('afterChange', function(event, slick, currentSlide, nextSlide){

         // return if apt slider (event fires when slider inside this one changes)
        if ( slick.$slider.hasClass('apt-slider') ) { return; }

        // toggle active class on dots
        var active = _this.navItems.eq(currentSlide);
        _this.setActive(active);

      });
      // Before Slide Changes
      _this.el.on('beforeChange', function(event, slick, currentSlide, nextSlide){

        // return if apt slider (event fires when slider inside this one changes)
        if ( slick.$slider.hasClass('apt-slider') ) { return; }

        // toggle active class on dots
        var active = _this.navItems.eq(nextSlide);
        _this.setActive(active);

        // _this.updateCount(nextSlide);
      });

      // === SLICK CREATE SLIDER
      _this.el.slick(_this.options);

      // === NAVIGATION
      _this.navItems.find('.item').on('click', function(){
        var item = $(this).parent('.nav-item');
        // active class
        _this.setActive(item);
        // go to slide
        _this.el.slick('slickGoTo', item.index());
      })
    },

    destroy: function() {
      var _this = this;
      if ( _this.initialized ) {
        _this.el.slick('unslick');
        _this.container.removeClass('initialized');
        _this.initialized = false;
      }
    },

    reset: function() {
      var _this = this;
      _this.destroy();
      _this.draw();
    },

    buildDesktopMarkup: function() {
      var _this = this;

      _this.container.html(_this.desktopMarkup);

      _this.container.removeClass('has-mobile-layout');

      _this.el = _this.container.find('.slider');
      _this.navItems = _this.container.find('.slider-nav .nav-item');

      _this.draw();

    },

    buildMobileMarkup: function() {
      var _this = this;

      // save dsktop markup
      _this.desktopMarkup = _this.container.html();

      _this.container.html('<div class="panel-group accordion-component" id="content-slider-accordion-'+_this.i+'" role="tablist" aria-multiselectable="true"></div>');

      var panelGroup = $('#content-slider-accordion-'+_this.i);


      _this.slidesItem.each(function(i, item) {
        var item = $(item);
        var panel = $('.content-slider-accordion-template').clone();
        panel.removeClass('content-slider-accordion-template');
        panel.removeAttr('role'); // role is in the template to avoid w3c error
        panelGroup.append(panel);

        var heading = item.attr('data-heading');
        var imgUrl = item.attr('data-img');
        var copyLeft = item.find('.copy-left').html();
        var copyRight = item.find('.copy-right').html();
        var copy = copyLeft;

        var headingId = 'content-slider-accordion-'+_this.i+'-'+(i+1);
        var bodyId = 'content-slider-accordion-'+_this.i+'-body-'+(i+1);

        panel.find('.panel-heading').attr('id', headingId);
        panel.find('.panel-collapse').attr('aria-labelledb', headingId);
        panel.find('.panel-heading a').attr('href', '#'+bodyId);
        panel.find('.panel-heading a').attr('aria-controls', bodyId);
        panel.find('.panel-collapse').attr('id', bodyId);
        panel.find('.panel-heading .text').html(heading);

        panel.find('.panel-body').html(item.html());

        panel.css('display','');
      })

      _this.mobileMarkup = panelGroup;

      _this.container.addClass('has-mobile-layout');

      _this.container.addClass('initialized');
      _this.container.removeClass('loading');
      _this.container.find('.slider-loader').fadeOut();

    },

    init: function(container, index) {

      var _this = this;

      if (container.length < 1) return;

      _this.container = container;
      _this.i = index;
      _this.el = _this.container.find('.content-slider');
      _this.navItems = _this.container.find('.slider-nav .nav-item');
      _this.slidesItem = _this.el.find('.slide-item');

      _this.options = {
        fade: true,
        speed: 600,
        autoplay: false,
        autoplaySpeed: 10000,
        infinite: true,
        // lazyLoad: 'ondemand', // not working with bg so do it manually
        dots: false,
        arrows: false,
        rows: 0,
        draggable:false,
      }

      _this.markup = _this.el.html();

      // accordion on mobile (bootstrap collapse)
      if ( Modernizr.mq("screen and (max-width:"+bp_tablet+"px)")) {

        _this.buildMobileMarkup();

      } 
      // slider on desktop
      else {
          _this.draw();
      }

      // on window resize destroy and stack...
      $(window).smartresize(function () { 
        if ( Modernizr.mq("screen and (max-width:"+bp_tablet+"px)")) {
          if (!_this.container.hasClass('has-mobile-layout')) {
            _this.destroy();
            _this.buildMobileMarkup();
          }
        } else if ( ! _this.initialized ) {
          if (_this.container.hasClass('has-mobile-layout')) {
            _this.buildDesktopMarkup();
          }
        }
      })

      return _this;
    }
  }

  return contentSlider.init(container, index);

}




// ========= APT SLIDER in sidebar

var aptSlider_instances = [];

var initAptSliders = function() {

  // var aptSlider = $('.listing-sidebar .apt-holder');
  var aptSlider = $('.apt-slider-container');

  if ( aptSlider.length ) {
    aptSlider.each(function(){
      aptSlider_instances.push(initAptSlider($(this)));
    })

  }
}
var destroyAptSliders = function() {
  var instance;
  while (aptSlider_instances.length) {
    instance = aptSlider_instances.shift();
    instance.destroy();
  }
}

var initAptSlider = function(container) {

  var aptSlider = {

    initialized: false,
    container: null,
    slider: null,
    options: {
    infinite: true,
    // autoplay: true,
    fade: true,
    speed: 300,
    dots: false,
    arrows: true,
    appendArrows: container.find('.slider-arrows'),
    prevArrow: '<button type="button" class="slider-prev prev btn-style-none" aria-label="Previous">'+arrow_simple_left+'<span class="text">Prev</span></button>',
    nextArrow: '<button type="button" class="slider-next next btn-style-none" aria-label="Next"><span class="text">Next</span>'+arrow_simple_right+'</button>',
    lazyLoad: 'ondemand',
    draggable: false,
    rows: 0
    },

    updateCount: function(index) {
      var _this = this;

      var i = ('0' + (index+1)).slice(-2);

      _this.container.find('.slider-count .current').html(i);

    },

    draw: function(){
      var _this = this;
      _this.el =  _this.slider.slick(_this.options);
    },

    destroy: function() {
      var _this = this;
      if ( !_this.el ) return;
      _this.el.slick('unslick');
      _this.initialized = false;

      floorplanSliderModal.hide();
    },

    reset: function() {
      var _this = this;
      _this.destroy();
      _this.draw();
    },
    buildModalMarkup: function() {
      var _this = this;
      _this.slides = _this.slider.html();
      var slides = _this.slider.find('.apt-slide');
      var slideArray = [];
      slides.each(function() {
        var toggle = $(this).find('.toggle-floorplan-modal')
        var filename = toggle.attr('data-file-name'),
            pdf_file_name = toggle.attr('data-pdf-file-name'),
            heading = toggle.attr('data-heading'),
            subheading = toggle.attr('data-subheading');
        
        var html = ['<div class="slide-item">',
          '<div class="floorplan-container">',
            '<div class="inner"><div class="svg_container"><img src="/img/floorplan/svg/'+filename+'.svg" alt="floorplan" /></div></div>',
          '</div>',
          '<div class="floorplan-footer">',
            '<div class="floorplan-info"><h5 class="subheading">' + subheading + '</h5><h3 class="heading">' + heading + '</h3></div>',
            '<div class="dl-floorplan"><a href="/img/floorplan/pdf/'+pdf_file_name+'.pdf" target="_blank" class="brown-btn">Download Floorplan</a></div>',
          '</div>',
        '</div>'].join('');

        slideArray.push(html);

      })

     _this.slides = slideArray.join('');

    },
    init: function(container) {
      var _this = this;

      if (container === undefined || container.length < 1) return;

      _this.container = container;
      _this.options.autoplay = container.attr('data-autoplay') == 'true' ? true : false;
      // _this.options.appendDots = container.find('.slider-dots');
      _this.slider = _this.container.find('.apt-slider');

      // === Events
      _this.slider.on('init', function (slick) {

          // _this.container.find('.slider-loader').fadeOut();
        _this.initialized = true;

        // content
        _this.slider.find('.slick-slide').addClass('hide-content');
        _this.slider.find('.slick-active').removeClass('hide-content');
      });

      _this.slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        // hide content before transitioning
        _this.slider.find('.slick-slide').eq(currentSlide).addClass('hide-content');
        _this.updateCount(nextSlide);

      })
      _this.slider.on('afterChange', function(event, slick, currentSlide) {

        // show content
        _this.slider.find('.slick-slide').eq(currentSlide).removeClass('hide-content');
      })

      // ==== save markup before slick init
      // slidesHtml = _this.slider.html();
      _this.buildModalMarkup();
      
      _this.draw();

      // make "data-lazy" img "src"
      // _this.slides = slidesHtml.replace(/data-lazy/g, 'src');

      floorplanSliderModal.init();
      var slide = _this.slider.find('.apt-slide');
      var slideCount = slide.length;
      // on click on slide
      slide.on('click', function(e){
        //fade in modal
        floorplanSliderModal.show();
        //happen gallery to modal and go to slide
        floorplanSliderModal.showGallery(_this.slides, $(this).index(), _this.slider, _this);
      })

      $(window).smartresize(function () { 

        if ( ! _this.initialized ) {
          _this.draw();
        }
      })

      return _this;
    }
  }

  return aptSlider.init(container);
  
}





// ======== GALLERY MODAL

var floorplanSliderModal = {
  zoomLevel: 1,
  maxZoomOut: 0.2,
  maxZoomIn: 4,
  zoom: function(zoom) {

    var _this = this;

    if (_this.zoomLevel < _this.maxZoomOut + 0.1) {
        _this.zoom_out.addClass('disabled');
        _this.zoom_in.removeClass('disabled');
    } else {
        _this.zoom_out.removeClass('disabled');
    }

    if (_this.zoomLevel > _this.maxZoomIn - 0.1) {
        _this.zoom_in.addClass('disabled');
        _this.zoom_out.removeClass('disabled');
    } else {
        _this.zoom_in.removeClass('disabled');
    }

    _this.draggable.find('img').css('transform', 'scale(' + zoom + ')');
  },
  zoomEvents: function() {
    var _this = this;

      // zoom in
      _this.zoom_in.off('click').on('click', function () {
        console.log('click');
      if (_this.zoomLevel > _this.maxZoomIn - 0.1) {
          _this.zoomLevel = _this.maxZoomIn;
      } else {
          _this.zoomLevel += 0.2;
      }
      _this.draggable.draggable('enable');
      _this.draggable.css('cursor', 'move');
      _this.zoom(_this.zoomLevel);
      });

      // zoom out
      _this.zoom_out.off('click').on('click', function () {
      if (_this.zoomLevel < _this.maxZoomOut + 0.1) {
          _this.zoomLevel = _this.maxZoomOut;
      } else {
          _this.zoomLevel -= 0.2;
      }

      // if default zoom, disable draggable and reset cursor
      if (_this.zoomLevel == _this.maxZoomOut) {

          $(_this.draggable).css({
          'top': '',
          'left': '',
          'bottom':'',
          'right':''
          })
          _this.draggable.draggable('disable');
          _this.draggable.css('cursor', 'default');
      };

      _this.zoom(_this.zoomLevel);
    });
  },

  show: function() {
    $('#floorplan_slider_modal').modal({
      'backdrop': false
    });
    $('#floorplan_slider_modal').modal('show');
    $('body').addClass('fp-modal-open');
  },
  hide: function() {
    var _this = this;
    $('#floorplan_slider_modal').modal('hide');
    $('body').removeClass('fp-modal-open');
    // destroy 
    _this.destroy();
  },
  goTo: function(slider, index) {
    var _this = this;
    var currentSlide = slider.slick('slickCurrentSlide');
    
    slider.slick('slickGoTo',index);

    slider.css('opacity', 1);
  },

  updateCount: function(index) {
    var _this = this;

    var i = ('0' + (index+1)).slice(-2);

    _this.galleryContainer.find('.slider-count .current').html(i);

  },
  showGallery: function(slides, slide, navFor, sliderObject){
    var _this = this;

    _this.sliderObject = sliderObject || null;

    // _this.heroGallery = navFor;

    _this.createGallery(slides, slide);
  },
  enableDrag: function(slideId) {
    var _this = this;

    var slide = _this.gallery.find('.slick-slide:not(.slick-cloned)').eq(slideId);

    // === Draggable
    _this.draggable = slide.find('.floorplan-container .svg_container');
    // unbind the dragstart event registered by slick slider like follow before binding the draggble to element
    $('*[draggable!=true]','.slick-track').unbind('dragstart');
    _this.draggable.draggable();

    // === Zoom Actions
    _this.zoomLevel = 1;
    _this.zoom_in = _this.el.find('.zoom-in'),
    _this.zoom_out = _this.el.find('.zoom-out');
    _this.zoomEvents();

  },
  createGallery: function(slides, slide_index){
    var _this  = this;
    // append slides
    // slides.removeClass().data('autoplay',false).addClass('gallery');
    _this.galleryContainer.append('<div class="gallery">' + slides + '</div>');

    // thumbs
    _this.gallery = _this.galleryContainer.find('.gallery');

    // add count total
    var total = ('0' + (_this.gallery.find('.slide-item').length)).slice(-2);
    var current = ('0' + (slide_index + 1)).slice(-2);
    _this.galleryContainer.find('.slider-count .total').html(total);
    _this.galleryContainer.find('.slider-count .current').html(current);

    // events
    _this.gallery.on('init', function (slick) {
      _this.el.find('.slider-loader').fadeOut();

      _this.enableDrag(slide_index);
    });

    // draw slider
    _this.gallery.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      dots: false,
      arrows: true,
      appendArrows: _this.el.find('.slider-arrows'),
      prevArrow: '<button type="button" class="slider-prev prev btn-style-none" aria-label="Previous">'+arrow_simple_left+'<span class="text">Prev</span></button>',
      nextArrow: '<button type="button" class="slider-next next btn-style-none" aria-label="Next"><span class="text">Next</span>'+arrow_simple_right+'</button>',
      lazyLoad: 'ondemand',
      fade: true,
      draggable: false,
      // asNavFor: _this.thumbs,
      rows: 0
    });
    _this.gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide) {

      _this.updateCount(nextSlide);

      var prevSlide = _this.gallery.find('.slick-slide:not(.slick-cloned)').eq(currentSlide);
      var nextSlide = _this.gallery.find('.slick-slide:not(.slick-cloned)').eq(nextSlide);
    })
    _this.gallery.on('afterChange', function(event, slick, currentSlide, nextSlide) {

      _this.enableDrag(currentSlide);
    })

    // https://stackoverflow.com/questions/29522309/jquery-ui-draggable-inside-slick-slider
    _this.el.find('.floorplan-container .svg_container').on("draggable mouseenter mousedown",function(event){
        event.stopPropagation();
    });
    
    _this.goTo(_this.gallery, slide_index);

  },
  destroy: function() {
    var _this = this;
    if ( _this.gallery ) {
      _this.gallery.slick('unslick');
      _this.gallery.remove();
    }
    if ( _this.closeEl) {
      _this.closeEl.css('display','block');
    }

    // remove events
    if ( $('#floorplan_slider_modal').length > 0 ) {
      $('#floorplan_slider_modal').unbind();
    }

    $('body').removeClass('fp-modal-open');
    _this.zoom_in.off('click');
    _this.zoom_out.off('click');

  },
  init: function() {
    var _this = this;

    _this.el = $('#floorplan_slider_modal'); 
    _this.closeEl = _this.el.find('.modal-close');
    _this.galleryContainer = _this.el.find('.gallery_container');
    _this.galleryArrowsContainer = _this.el.find('.slider-arrows');

    _this.closeEl.on('click',function(){
      _this.hide();
    })

    _this.el.on('click',function(e){
      // if click on overlay, hide modal
      if ( $(e.target).hasClass('img')) {
        _this.hide();
      }
    })

    $(document).on('show.bs.modal', '#floorplan_slider_modal', function() {
      $('body').addClass('no-scroll');
    })
    $(document).on('shown.bs.modal', '#floorplan_slider_modal', function() {
      setTimeout(function(){
        $('#floorplan_slider_modal').addClass('shown');
      }, 100)
    })
    $(document).on('hide.bs.modal', '#floorplan_slider_modal', function() {
      $('#floorplan_slider_modal').removeClass('shown');

      _this.destroy();

    })
    $(document).on('hidden.bs.modal', '#floorplan_slider_modal', function() {
      $('body').removeClass('no-scroll');
    })


  }
}



var sohubs = {
    sm_url: "https://socialmanage.io/js/social-manage.min.js",
    sm_instance: null,
    id:0,
    hasInit: false,
    init: function() {
        var _this = this;
        var existing_script = document.querySelector('script[src="' + _this.sm_url + '"]');
        var element = "#social-hub-"+_this.id;
        var tags = $(element).attr('data-tags') ? '?tags=' + $(element).attr('data-tags') : '';

        var sm_script = function() {
            if ( _this.sm_instance ) {
                return;
            }
            _this.sm_instance = window.social_manage(element, "https://socialmanage.io/stream/"+_this.id+"/default" + tags, _this.id);
            _this.hasInit = true;
        };

        function draw() {
            if (!existing_script) {
                var script     = document.createElement('script');
                script.src = _this.sm_url;
                // callback function once script loaded
                script.onload = sm_script;

                // append script at end of body
                document.body.appendChild(script);
            }  else {
                sm_script();
            }
        }

        
        if ( Modernizr.mq("screen and (max-width:" + bp_tablet_landscape + "px)") ) {
            // Within Collapsed section: init when open section
            if ( $('.sohubs-section').parents('.stacker-section').length && $('.sohubs-section').parents('.stacker-section').attr('data-collapse') == 'collapsed' ) {

                var section = $('.sohubs-section').parents('.stacker-section');
                section.on("shown.bs.collapse", function (e) {
                    if ( $(this).hasClass('sohubs-init') ) { return; }

                    draw();

                    $(this).addClass('sohubs-init');
                });
            } 
            // No Collapsed section: init
            else {
                draw();
            }
        }
        // Default
        else {
            draw();
        }
    },
    destroy: function() {
        var _this = this;
        if ( !_this.hasInit ) { return; }
        // if (!hasInit) { return; }
        if ( _this.sm_instance ) {
            _this.sm_instance.destroy();
        }

        $('.sohubs-section').parents('.stacker-section').removeClass('sohubs-init');
        _this.sm_instance = null;
    }
}


// BACKGROUND LOOPING VIDEO  (backgroung image module)
// using bideo js
var loopingVideo = {
  initialized: false,

  draw: function(videoContainer) {
    var _this = this;

    if ( videoContainer.length < 1 ) { return; }


    if ( Modernizr.mq("screen and (max-width:"+bp_tablet+"px)") && videoContainer.hasClass('desktop-only') ) {
      _this.container.parent('.video-container').removeClass('video-on');
      return;
    }

    var video_url = videoContainer.attr('data-url'); 

    var videoArray = _this.splitUrl(video_url);
    var video_src = videoArray[0];
    var video_param = videoArray.length > 1 ? videoArray[1] : '';

    var container = videoContainer[0];
    var video = videoContainer.find('video')[0];

    if (  typeof Bideo !== "undefined" ) {

      var bv = new Bideo();
      
      bv.init({
        videoEl: video,
        container: container,
        // autoplay: false,
        resize: true,
        src: [
          {
            src: video_src + '.mp4' + video_param,
            type: 'video/mp4'
          },
          {
            src: video_src + '.webm' + video_param,
            type: 'video/webm'
          },
          {
            src: video_src + '.ogg' + video_param,
            type: 'video/ogg'
          }
        ],
        onLoad: function () {
          _this.container.parent('.video-container').addClass('video-on');
        }
      });
    } else {
    }
    
  },

  splitUrl: function(url) {
    var urlArray = url.split('?');

    urlArray[0] = urlArray[0].replace(/\.[^/.]+$/, "");
    if(urlArray[1]) {
        urlArray[1] = '?' + urlArray[1];
    }

    return urlArray;
  },
  init: function() {

    var _this = this;
    _this.container = $('.looping-video');

    if ( _this.initialized ) { return; }
    // if ( !_this.container.length && !$('.lazy-scroll.video').length ) { return; }
    if ( !_this.container.length ) { return; }

    _this.container.each(function(){
      _this.draw($(this));
    })

    $(window).smartresize(function () { 
      _this.container.each(function(){
        _this.container.find('video').empty(); // remove source
        _this.draw($(this));
      })
    })

    _this.initialized = true;
  },
  destroy: function() {
    var _this = this;

    if ( ! _this.container.length ) { return; }

    _this.container.each(function(){
      $(this).find('video').html('');
      $(this).find('video').style = '';
    })

    $(window).smartresize(function () { 
      _this.container.each(function(){
        _this.draw($(this));
      })
    })
    _this.initialized = false;
  }
};





// EMBED VIDEOS: image/button > on click open video in fullscreen modal

var videoPopup_instances = [];

var initVideoPopups = function() {

  var button = $('.trigger-video-popup');

  if ( button.length ) {
    button.each(function(){
      videoPopup_instances.push(initVideoPopup($(this)));
    })
  }
};
var destroyVideoPopups = function() {
  var instance;
  while (videoPopup_instances.length > 0) {
    instance = videoPopup_instances.shift();
    instance.destroy();
  }
};

// Using Froogaloop
var initVideoPopup = function (button) {
  var videoPopup = {
    resizeIframe: function() {
      var _this = this;

      _this.iframe
        .data('iframeRatio', _this.iframeH / _this.iframeW)
        .removeAttr('height')
        .removeAttr('width')
        .css('margin','0 auto');

      if ( _this.iframe.length < 1 ) { return; }

      var container = _this.iframe.parent('.video-container');

      var containerHeight = container.height();
      var newWidth = container.width();

      // // Resize video according to its aspect ratio
      var newHeight = newWidth * _this.iframe.data('iframeRatio');


      // // if video taller than window
      if ( newHeight > containerHeight ) {
        newHeight = containerHeight;
        newWidth = newHeight / _this.iframe.data('iframeRatio');
      }

      _this.iframe
        .width(newWidth)
        .height(newHeight)
        // .css({
        //   'opacity': 1,
        //   'visibility': 'visible'
        // })
        ;
        _this.iframe.removeClass('is-hidden');
    },
    closeModal: function() {
      var _this = this;
      _this.popup.removeClass('on'); 
      // $('body').css('overflow-Y','initial');
      $('body').css('overflow-Y','');
      _this.popup.remove();
    },
    init: function(){
      var _this = this;
      if (button.length < 1) return;

      _this.button = button;

      _this.popupMarkup = '<div class="embed-video-popup"><div class="close">'+close_icon+'</div><div class="inner"><div class="video-container"></div></div></div>';
      // _this.popup = _this.container.find('.embed-video-popup');

      _this.url = _this.button.attr('data-video-src');

      _this.iframeW = _this.button.attr('data-width') == '' ? '560' : _this.button.attr('data-width');
      _this.iframeH = _this.button.attr('data-height') == '' ? '315' : _this.button.attr('data-height');


      // on click on button: show popup.
      _this.button.on("click", function(e) { 
        e.stopPropagation();
        e.preventDefault();

        // append popup
        $('body').append(_this.popupMarkup);
        _this.popup = $(".embed-video-popup");

        // create iframe
        var iframe = '<iframe class="is-hidden" width="'+_this.iframeW+'" height="'+_this.iframeH+'" src="' + _this.url + '" frameborder="0"></iframe>';
        _this.popup.find('.video-container').append(iframe);
        _this.iframe = _this.popup.find('iframe');


        _this.resizeIframe();

        // var video = _this.popup.find('iframe');

        // // show popup and play video
        _this.popup.addClass('on'); 
        $('body').css('overflow-Y','hidden');

        // // add autoplay
        if ( ('youtube').indexOf(_this.url) ) {
          var sign = _this.url.toLowerCase().indexOf("?") >= 0 ? '&' : '?';
          iframe_src = _this.url + sign + "autoplay=1";
        } else if ( ('vimeo').indexOf(_this.url) ) {
          var sign = _this.url.toLowerCase().indexOf("?") >= 0 ? '&' : '?';
          iframe_src = _this.url + sign + "autoplay=1";
        }
        // video[0].src = iframe_src;
        _this.iframe.attr('src',iframe_src);
        _this.resizeIframe();

        // close poup on click on icon
        _this.popup.on("click", function(e) { 
          // video_container
          e.stopPropagation();
          e.preventDefault();
          _this.closeModal();
        });
        // close popup on press escape
        $(document).keyup(function(e) {
          e.stopPropagation();
          e.preventDefault();
          if (e.keyCode == 27) { // escape key maps to keycode `27`
            _this.closeModal();
          }
        })

      }) // en click

      return _this;
    },
    destroy: function() {
    }
  };

  return videoPopup.init(button);
};


window.app = (function ($) {

	"use strict";

	var transitions = {

		startDuration:500, 

		default: {
			before: function () {
			},
			startDuration: 800, // css smoothstate transition speed + menu speed when closing
			start: function ($container) {
				var _this = this;

				// Fade Out:
				// Slide content up and slide in white overlay
				$("#smoothstate_transition").addClass('has-shadow');
				// $("#smoothstate_transition .logo").css('top', '100px');
        TweenMax.fromTo($("#smoothstate_transition"), .7, {
          css: {
            y: "100%"
          },
          ease: Power2.easeInOut
        }, {
          css: {
            y: "0%"
          },
          ease: Power2.easeInOut,
        }),
        TweenLite.to($("#smoothstate_transition .logo"), .3, {
          css: {
            // top: "0",
            opacity: 1
          },
          ease: Power2.easeInOut,
          delay: '.4'
        }),
        TweenLite.to($container, .8, {
          top: "-=300px",
          ease: Power2.easeInOut,
          onComplete: function() {
          	TweenLite.set($container, {top: "+=300px"});
            // done
            $("#smoothstate_transition").removeClass('has-shadow');
            // onPageDestroy();
          }
        });

        // once overlay is displayed
        // can not use tweenlit onComplete because sometimes is triggered after smoothstate ready function...
				var duration = _this.duration; // startDuration
				setTimeout(function () {
					onPageDestroy();
				}, duration)


			},
			readyDuration: 500,
			ready: function ($container, $newContent) {
				$('html, body').scrollTop(0);

				$(window).unbind('resize');
				$(window).unbind('scroll');

				$container.html($newContent);

				onPageReady();
			},
			after: function () {
				this.destroyPreviousPage();
				this.loadCurrentPage();

				// trigger google analytics page view on page load
				if (window.ga) {
					ga('set', 'page', document.location.pathname); // need to ensure this is sending the correct path
					ga('send', 'pageview');
				}
				if (window.gtag) {
          gtag('config', 'UA-128188092-1', {
            'page_location': document.location.href
          });
      	}

				// pardot tracking code
				if(window.piTracker) {
					piTracker(document.location.href); //http://help.pardot.com/customer/portal/articles/2133697-advanced-topic-using-tracking-code-within-javascript-mvc-frameworks
				}

				// make sure at top of page
				$('html, body').scrollTop(0);

				TweenMax.set(window, {
					scrollTo: {
						y: 0
					}
				}), $("body").removeClass("overflow_hidden");

				TweenLite.to($("#smoothstate_transition .logo"), .3, {
					css: {
            // top: "-100px",
            opacity: 0
          },
	        ease: Power2.easeInOut
	      }),
				TweenMax.fromTo($("#smoothstate_transition"), .6, {
					css: {
						y: "0%"
					},
					ease: Power2.easeInOut
				},
				{
					css: { y: "-100%" },
					ease: Power2.easeInOut,
					onComplete: function() {
						// scroll to anchor if needed
						var url = window.location.href;
						if ( url.indexOf('#') > 0) {
							var hash = url.substring(url.indexOf("#")+1);
							if ( hash.length > 0 ) {
								$('html,body').stop().animate({
									scrollTop: $("#"+hash).offset().top
								},0);
							}
						}

						var isHomePage = $('#main').attr('data-key') === ('home');

						if ( isHomePage) {
					    var tl = new TimelineMax({
					      onStart: function() {
					        
					      },
					    });
					    tl.to($('#page-banner .copy'), '.4', {opacity: 1, y: 0})
			        	.to($('#page-banner .play-btn'), '.4', {opacity: 1, y: 0}, '-=.1');
						} else {
							animateBannerHeading();
						}
					}
				}, .3);
			},
		},

		custom: {

		}

	};

	// use different page transition
	var transitionForAnchor = function (anchor) {
		if (anchor === null)
			return transitions.default;

		var anchor_class = anchor.attr('data-anchor');

		if (typeof transitions[anchor_class] !== "undefined") {
			return transitions[anchor_class];
		}

		return transitions.default;
	};


	// Runs on every page once ready
	var onPageReady = function (firstLoad) {

		firstLoad = firstLoad || false;

		// first time page loaded: addCookieConsentPopup when anination done.
		if ( !firstLoad ) {
			addCookieConsentPopup();
		}

		// IE
		if(!window.getComputedStyle(document.body).mixBlendMode) {
			$('html').addClass('no-mix-blend-mode');
		}
		if(!window.getComputedStyle(document.body).backgroundBlendMode) {
			$('html').addClass('no-background-blend-mode');
		}


		// Svg
		svg4everybody();

		lazyscroll();
		fadeinEls();
		slideinEls();

		lazyload.init();

		topPanel.init();

		// init components
		formatCmsComponents();


		forms.initDlForm();
		forms.initEnquireForm();

		// Map
		locationMap.init();

		// Sliders
		initContentSliders();
		initAptSliders();

		// Videos
		initVideoPopups();
		loopingVideo.init(); // bg video

		// SoHubs
		// if ( $(".sohubs-section").length > 0 ) {
		// 	sohubs.init();
		// }

		// ==== Accordion Component
	  $('.accordion-component .panel').on('show.bs.collapse', function () {
	    $(this).addClass('active');
  	});
		$('.accordion-component .panel').on('hide.bs.collapse', function () {
      $(this).removeClass('active');
   	});


		// mobile components
		backToTop.init();
		mobileMenu.init();
		collapsable.init();
		animateComponents.init();


		// close modal on click on overlay
		$(".modal").off().on('click', function (e) {
            var modal = $(this);
            if ( $(e.target).hasClass('modal-dialog') || $(e.target).hasClass('modal-overlay') ) {
                modal.find('.modal-close').trigger('click');
            }
        });

		// Tootlip
		$('[data-toggle="tooltip"]').tooltip();

		// Datepicker
		if ( $( ".has-datepicker" ).length ) {
			$('.has-datepicker').datepicker({
			 	dateFormat: "dd/mm/yy",
				firstDay: 1, // monday (sunday = 0)
			});
		}


		// Reveal social on touch devices
		if ( $('html').hasClass('touch') ) {
			$('.reveal-social').on('click', function() {
				$(this).toggleClass('hover');
			})
		}

		// === Revel number
		$('.reveal-number').off().on('click', function (e) {
			if ( Modernizr.mq("screen and (max-width:"+bp_tablet+"px)") ) { 
				$(this).attr('href', 'tel:'+$(this).attr('data-formatted-number'));
				$(this).click();
				return;
			}
			if ($(this).hasClass('is-min')) {
				e.preventDefault();

				// tracking here
				// ...

				$(this).html($(this).attr('data-number'));
				$(this).attr('href', 'tel:'+$(this).attr('data-formatted-number'));

				$(this).removeClass('is-min');
				$(this).blur(); // remove focus
			}
		})


		// ===== Forms

		// toggle focus on parent (where border is)
		if ( $('.form-control').length > 0 ) {
			$('.form-control').each(function(){
				if ( $(this).val() ) {
					$(this).closest('.form-group').addClass('filled');
				}
			})

			$('.form-control').bind('focus blur', function () {
				$(this).closest('.form-group').toggleClass('focus');
			});
			// toggle filled
			$('.form-control').on('change', function () {
				if (this.value) {
					$(this).closest('.form-group').addClass('filled');
				} else {
					$(this).closest('.form-group').removeClass('filled');
				}
			});
		}


		// ===== Parsley
		var parsleyOptions = {
			// add error class on form group instead of default form control
			classHandler: function (el) {
				return el.$element.closest(".form-group");
			},
			errorsContainer: function (pEle) {
				var $err = pEle.$element.parents('.form-group');
				// var $err = pEle.$element.parents('.parsley-validate').find('.parsley-errors');
				return $err;
			}
		}

		if ($('.parsley-validate').length) {
			$('.parsley-validate').parsley(parsleyOptions);

			window.Parsley.on('form:validated', function() {
				this.$element.addClass('validated');
			})
		}


		// === Custom Selects

		var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

		$( '.autocomplete[name="country"]' ).each(function() {
			$(this).autocomplete({
			  source: country_list,
			  delay: 0,
			  minLength: 1,
			});

			// $(this).on('focus', function() {
			// 	if ($(this).val() == '') {
			// 		$(this).autocomplete( "search", "" );
			// 	}
			// });

		});


		$(".custom-select").each(function() {

			// avoid duplicates
			if ( $(this).hasClass('customed') ) { return; }

			var theme_class = "";

			if ( $(this).hasClass('thinner') ) {
				theme_class += ' thinner';
			}
			if ( $(this).hasClass('white') ) {
				theme_class += ' white';
			}

			$(this).addClass('customed');

			$(this).selectmenu({
				classes: {
					"ui-selectmenu-button": theme_class,
					"ui-selectmenu-menu": theme_class
				},
				change: function( event, data ) {
					// update "filled" class
					if ( this.value ) {
						$(this).closest('.form-group').addClass('filled');
					} else {
						$(this).closest('.form-group').removeClass('filled');
					}

					// update validation
					var formGroup = $(this).parents('.form-group');
					var form = $(this).closest('form');
					if ( formGroup.hasClass('parsley-error') ) {
						form.parsley(parsleyOptions).validate();
					}
				}
			})
		});


		// Smoothscroll
		$('a.smoothscroll').off('click').on('click', function(e){
      e.preventDefault();
      var top = $(this.hash).offset().top;
      $('body,html').stop().animate({
			'scrollTop': top
			}, 600);
    })

		

	};


	// Runs on every page before showing new page (on Smoothstate start)
	var onPageDestroy = function () {

		if ( $( ".has-datepicker" ).length ) {
			$( ".has-datepicker" ).datepicker( "hide" );
			$( ".has-datepicker" ).datepicker( "destroy" );
		}


		$('body').removeClass('modal-open');

		Waypoint.destroyAll();


		// Videos
		destroyVideoPopups();
		// loopingVideo.destroy(); // bg video

		locationMap.destroy();



		// sohubs.destroy();

		destroyContentSliders();
		destroyAptSliders();

		// Layout
		mobileMenu.destroy();
		topPanel.destroy();

		// mobile collapsable sections
		collapsable.destroy();

		backToTop.destroy();

		// remove cookie consent div (will be appended again on page load)
		if ( $('.cc-window.cc-citrine').length > 0 ) {
			$('.cc-window.cc-citrine').remove();
		}
	};


	var app_state = {
		current_anchor: null,
		project_new_div: null,
	};

	// ======= SMOOTHSTATE CONF
	var smoothstate_conf = {
		prefetch: true,
		cacheLength: 10,
		debug: false,
		blacklist: '.no-smoothstate, .ui-datepicker-prev, .ui-datepicker-next, .cc-btn, .cc-dismiss, .smoothscroll',
		onBefore: function ($anchor, $container) {
			app_state.current_anchor = $anchor;
			var transitions = transitionForAnchor(app_state.current_anchor);
			transitions.before.call(this, $anchor, $container);
		},
		onStart: {
			duration: 800,
			render: function ($container) {
				var transitions = transitionForAnchor(app_state.current_anchor);
				this.duration = transitions.startDuration;
				transitions.start.call(this, $container);
			}
		},
		onReady: {
			duration: 500,
			render: function ($container, $newContent) {
				var transitions = transitionForAnchor(app_state.current_anchor);
				this.duration = transitions.readyDuration;
				transitions.ready.call(this, $container, $newContent);
			},
		},
		// onAfter: see app.smoothstateAfter
	};

	// ======= APP
	var app = {

		smoothState: null,
		container: "",
		page_key_history: [],

		transition_duration: 500,

		init: function(container) {

			this.container = container;

			var that = this;

			smoothstate_conf.onAfter = function() {
				that.smoothstateAfter.call(that);

				var postId = $('#wp-body-div').attr('data-post-id');
                var postType = $('#wp-body-div').attr('data-post-type') ? $('#wp-body-div').attr('data-post-type') : 'Page';
                var adminEditLink = $('#wp-admin-bar-edit a');
                if(postId) {
                    adminEditLink.attr('href', function(index, self){
                        return self.replace(/(post=)[1-9]+/, '$1' + postId);
                    });
                }
                adminEditLink.text('Edit ' + postType.charAt(0).toUpperCase() + postType.slice(1));
			};

			// instantiate smoothstate
			this.smoothState = $(this.container).smoothState(smoothstate_conf);

			// PRELOADER

			var isHomePage = $('#main').attr('data-key') === ('home');

			if ( isHomePage ) {

        var tl = new TimelineMax({
          onStart: function () {
            // make sure at top of page
            $('html, body').scrollTop(0);
            
          }
        });


        if ( Modernizr.mq("screen and (max-width:"+bp_tablet+"px)") ) {
	        tl.set($('#page-banner .img-wrapper'), {opacity: 0});

	        setTimeout(function() {
	        	$("#screen_preloader").fadeOut(200);
						tl.to($('#page-banner .img-wrapper'), '.4', {opacity: 1})
		        	.to($('#page-banner .copy'), '.4', {opacity: 1, y: 0}, '+=.3')
		        	.to($('#page-banner .play-btn'), '.4', {opacity: 1, y: 0, onComplete: function() {
		        		setTimeout(function() {
		        			addCookieConsentPopup();
		        		}, 500);
		        	}}, '-=.1');
	        }, 200);

        } else {
	        tl.set($('#main-header .header-inner'), {opacity: 0, y:"-30px"});
	        tl.set($('#page_share'), {opacity: 0});
	        tl.set($('#page-banner .img-wrapper'), {opacity: 0});
	        tl.set($('#page-banner .down'), {opacity: 0});

	        setTimeout(function() {
	        	$("#screen_preloader").fadeOut(200);
						tl.to($('#page-banner .img-wrapper'), '.4', {opacity: 1})
		        	.to($('#page-banner .copy'), '.4', {opacity: 1, y: 0}, '+=.5')
		        	.to($('#page-banner .play-btn'), '.4', {opacity: 1, y: 0}, '-=.1')
		        	.to($('#main-header .header-inner'), '.4', {opacity: 1, y: 0}, '-=.1')
		        	.to($('#page_share'), '.4', {opacity: 1},'-=.5')
		        	.to($('#page-banner .down'), '.4', {opacity: 1, onComplete: function() {
		        		setTimeout(function() {
		        			addCookieConsentPopup();
		        		}, 500);
		        	}}, '-=.5');

		        	
	        }, 200);
        }



    	} else {
    		$("#screen_preloader").fadeOut(200, function(){
    			setTimeout(function(){
	    			animateBannerHeading();
	    			addCookieConsentPopup();
    			},400);
	    	});

    	}

			onPageReady(true);

			this.loadCurrentPage();
		},

		pageByKey: function (key) {
			return typeof this.pages[key] === "undefined"
			? false
			: this.pages[key];
		},

		initPage: function (page) {

			if (typeof page.init === "function") {
				page.init();
			}
		},

		destroyPage: function (page) {

			if (typeof page.destroy === "function") {
				page.destroy();
			}
		},

		smoothstateAfter: function () {

			var transitions = transitionForAnchor(app_state.current_anchor);
			transitions.after.call(this);
		},

		destroyPreviousPage: function () {

			var previous_page;

			if (this.page_key_history.length) {

				previous_page = this.pageByKey(this.page_key_history[this.page_key_history.length - 1]);

				if (previous_page) {
					this.destroyPage(previous_page);
				}
			}
		},

		loadCurrentPage: function () {

			var new_page_key = $("#main").attr("data-key");

			this.page_key_history.push(new_page_key);

			var new_page = this.pageByKey(new_page_key);
			this.initPage(new_page);
		},

		loadUrl: function (url) {
			$('<a class="hidden" href="' + url + '"></a>').appendTo(this.container).trigger("click");
			// no need to remove because this.container is replaced with new content ;)
		},

		pages: {
			home: {
				init: function () {
					var _this = this;
					// animate "Scroll down"
					var el = $('#page-banner .down');
		      new Waypoint({
		        element: el,
		        handler: function(direction){
		          var el = this.element;
		          var op = direction ==='down' ? 0 : 1;
		          var top = direction ==='down' ? '20px' : '0';
		          TweenLite.to(
		            el, 1.5, {ease: Power4.easeOut, opacity: op, y: top})
		        },
		        offset: '75%' // when top of el is 25% from the bottom of the viewport
		      });
				},
				destroy: function () {
				}
			},
			design: {
				init: function () {
					var _this = this;

          // === Floorplan
          // on click on floorplan/enlarge btn, open modal
          floorplan.init();

					// ==== Masterplan
					$('.masterplan-container .hotspot').on('mouseenter', function() {
						console.log('in');
						if ( $(this).hasClass('apt-a')) {
							console.log('a!');
							$('.masterplan-container .apt-a').addClass('active');
						}
						if ( $(this).hasClass('apt-c')) {
							$('.masterplan-container .apt-c').addClass('active');
						}
					})
					$('.masterplan-container .hotspot').on('mouseleave', function() {
						if ( $(this).hasClass('apt-a')) {
							$('.masterplan-container .apt-a').removeClass('active');
						}
						if ( $(this).hasClass('apt-c')) {
							$('.masterplan-container .apt-c').removeClass('active');
						}
					})


				},
				destroy: function () {
					// off click modal
          floorplan.destroy();
				}
			},
		}
	};

	return app;

})(jQuery);


jQuery(document).ready(function () {
	// Init App
	window.app.init('#smoothstate_container');
});
