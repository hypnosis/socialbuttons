var SocialButtons = function(data){


	console.log('data', data, data.container);


	this.head = document.getElementsByTagName('head')[0];
	this.container = document.getElementById(data.container);
	this.sitename = data.sitename;
	this.title = data.title;
	this.description = data.description;
	this.url = document.location.href;
	this.via = data.via || undefined;
	this.VKapiId = data.VKapiId || undefined;
	this.FBappId = data.FBappId || undefined;	
	this.colorscheme = data.colorscheme || undefined;

	this.load();
	
	
}





SocialButtons.prototype.load = function(){
    console.log('load');
    this.twitter();
	this.myworld();
	this.vkontakte();
	this.odnoklasniki();
	this.facebook();
}




SocialButtons.prototype.loadScript = function(url){
	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', url);
	this.head.appendChild(script);
}




SocialButtons.prototype.loadCss = function(url){
	var css = document.createElement('link');
	css.setAttribute('type', 'text/css');
	css.setAttribute('rel', 'stylesheet');
	css.setAttribute('href', url);
	this.head.appendChild(css);
}





SocialButtons.prototype.twitter = function(){


    console.log('twitter');


	// Create script tag
	this.loadScript('http://platform.twitter.com/widgets.js');

		
	// Create tweeter button
	var buttonLink = 'http://twitter.com/share?count=horizontal&lang=en&text=&url=&via=';
	var button = document.createElement('a');
	button.setAttribute('href', buttonLink);
	button.setAttribute('class', 'twitter-share-button');
	button.setAttribute('id', 'twitter-share-button');
	button.innerHTML = 'Tweet';


	// Add twitter button to container
	this.container.appendChild(button);
	

	//var tweet_button = new twttr.TweetButton(document.getElementById('twitter-share-button'));
	//tweet_button.render();
	
}





SocialButtons.prototype.myworld = function(){
	
	console.log('myworld');
	

	// Create Meta tags	
	var meta = document.createElement('meta');
	meta.setAttribute('name', 'mrc__share_title');
	meta.setAttribute('content', this.title);	

	
	// Add script tag to meta
	this.head.appendChild(meta);		
	
	
	// Create script tag
	this.loadScript('/js/mailru/loader.js');


	// Create button
	var button = document.createElement('a');
	button.setAttribute('target', '_blank');
	button.setAttribute('class', 'mrc__plugin_like_button');
	button.setAttribute('href', 'http://connect.mail.ru/share');
	button.setAttribute('rel', "{'type' : 'button', 'width' : '145'}");
	button.innerHTML = 'Рекомендую';


	// Add twitter button to container
	this.container.appendChild(button);

	
}




SocialButtons.prototype.vkontakte = function(){


	// Create script tag
	this.loadScript('http://userapi.com/js/api/openapi.js?17');


	// Init Vkontakte application
	try {
		VK.init({
			apiId: this.vk-apiId,
			onlyWidgets: true
		});
	}
	catch(ex){
		console.log(ex);
	}


	
	// Create vkontakte button
	var button = document.createElement('div');
	button.setAttribute('id', 'vk-like');
	
	
	// Add vkontakte button to container
	this.container.appendChild(button);
	
	
	// Load Vkontakte button
	try {
		VK.Widgets.Like('vk-like', {
			type: 'button',
			pageTitle: this.title,
			pageUrl: this.url,
			pageDescription: this.description,
			verb: 1
		});
	}
	catch(ex){
		
	}
	
}





SocialButtons.prototype.odnoklasniki = function(){
	
	
	// Load script
	this.loadScript('http://stg.odnoklassniki.ru/share/odkl_share.js?3');


	// Load css
	this.loadCss('http://stg.odnoklassniki.ru/share/odkl_share.css?3');
	
	
	// Odnoklasniki init
	/*
	if (window.addEventListener) //DOM method for binding an event
		window.addEventListener("load", ODKL.init, false);
	else if (window.attachEvent) //IE exclusive method for binding an event
		window.attachEvent("onload", ODKL.init);
	else if (document.getElementById) //support older modern browsers
		window.onload=ODKL.init;
	*/


	// Create wrapper	
	var wrapper = document.createElement('div');


	// Create button
	var button = document.createElement('a');
	button.setAttribute('class','odkl-share-oc');
	button.setAttribute('href', this.url );
	button.setAttribute('onclick', 'ODKL.Share(this);return false;' );


	// Create button counter
	var count = document.createElement('span');
	count.innerText = '0';


	// Build button and add to container
	button.appendChild(count);
	wrapper.appendChild(button);
	this.container.appendChild(wrapper);
	
	
}





SocialButtons.prototype.facebook = function(){
	
	
	var fbWidth = '660';
	

	// Create meta tags
	var title = document.createElement('meta');
	title.setAttribute('og:title', this.title);


	var sitename = document.createElement('meta');
	sitename.setAttribute('site_name', this.sitename);


	var description = document.createElement('meta');
	description.setAttribute('site_name', this.description);


	// Add meta tags to head
	this.head.appendChild(title);
	this.head.appendChild(sitename);	
	this.head.appendChild(description);
	
	
	// Create elements 
	var root = document.createElement('div');
	root.setAttribute('id', 'fb-root');
 
	
	var wrapper = document.createElement('div');
	wrapper.setAttribute('class', 'fb_like_button_container btn_fb');
	wrapper.setAttribute('xmlns:og', 'http://opengraphprotocol.org/schema/');		
	wrapper.setAttribute('xmlns:fb', 'http://www.facebook.com/2008/fbml');


	var button = document.createElement('fb:like');
	button.setAttribute('href', this.url);
	button.setAttribute('show_faces', 'false');
	button.setAttribute('width', fbWidth);
	button.setAttribute('action', 'recommend');
	button.setAttribute('class', 'fb_like_button2');
	if(this.colorscheme){
		button.setAttribute('colorscheme', this.colorscheme);	
	}

		
	// Add button to container
	wrapper.appendChild(button);
	this.container.appendChild(root);	
	this.container.appendChild(wrapper);
	
	
	// Load button
	
	window.fbAsyncInit = function() {
		FB.init({
			appId  : this.FBappId,
			status : true, // check login status
			cookie : true, // enable cookies to allow the server to access the session
			xfbml  : true  // parse XFBML
		});
	};


	(function() {
		var e = document.createElement('script');
		e.src = document.location.protocol + '//connect.facebook.net/ru_RU/all.js';
		e.async = true;
		document.getElementById('fb-root').appendChild(e);
	}());	
	
}
