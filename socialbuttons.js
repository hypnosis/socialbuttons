var SocialButtons = function(data){


	console.log('data', data, data.container);


	this.head = document.getElementsByTagName('head')[0];
	this.container = document.getElementById(data.container);
	this.title = data.title;
	this.url = document.location.href;
	this.via = data.via || undefined;
	

	this.load();
	
	
}





SocialButtons.prototype.load = function(){
    console.log('load');
    this.twitter();
	this.myworld();
	this.container.style.height = '100px';
}




SocialButtons.prototype.createScript = function(url){
	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascipt');
	script.setAttribute('src', url);
	return script;
}




SocialButtons.prototype.twitter = function(){


    console.log('twitter');


	// Create script tag
	script = this.createScript('http://platform.twitter.com/widgets.js');


	// Add script tag to meta
	this.head.appendChild(script);	

		
	// Create tweeter button
	var buttonLink = 'http://twitter.com/share?count=horizontal&lang=en&text=&url=&via=';
	var button = document.createElement('a');
	button.setAttribute('href', buttonLink);
	button.setAttribute('class', 'twitter-share-button');	
	button.innerHTML = 'Tweet';

	// Add twitter button to container
	this.container.appendChild(button);
	

	//var tweet_button = new twttr.TweetButton(button.get(0) );
	//tweet_button.render();
	
}





SocialButtons.prototype.myworld = function(){
	
	console.log('myworld');
	

	// Create Meta tags	
	var meta = document.createElement('meta');
	script.setAttribute('name', 'mrc__share_title');
	script.setAttribute('content', this.title);	

	
	// Add script tag to meta
	this.head.appendChild(meta);		
	
	
	// Create script tag
	script = this.createScript('/js/mailru/loader.js');


	// Add script tag to meta
	this.head.appendChild(script);	


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