function relative_time(C){var B=C.split(" ");C=B[1]+" "+B[2]+", "+B[5]+" "+B[3];var A=Date.parse(C);var D=(arguments.length>1)?arguments[1]:new Date();var E=parseInt((D.getTime()-A)/1000);E=E+(D.getTimezoneOffset()*60);if(E<60){return"less than a minute ago"}else{if(E<120){return"about a minute ago"}else{if(E<(60*60)){return(parseInt(E/60)).toString()+" minutes ago"}else{if(E<(120*60)){return"about an hour ago"}else{if(E<(24*60*60)){return"about "+(parseInt(E/3600)).toString()+" hours ago"}else{if(E<(48*60*60)){return"1 day ago"}else{return(parseInt(E/86400)).toString()+" days ago"}}}}}}};

function twitterCallback(obj) {
   var wwwregular = /\bwww\.\w.\w/ig;
	var regular = /((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g;
	var atregular = /\B@([_a-z0-9]+)/ig;
	var twitters = obj;
	var statusHTML = "";
	var username = "";
    
    for (var i=0; i<twitters.length; i++){
		var posttext = "";
		posttext = twitters[i].text.replace(wwwregular, 'http://$&');
		posttext = posttext.replace(regular, '<a href="$1">$1</a>');
		posttext = posttext.replace(atregular, '@<a href="http://twitter.com/$1">$1</a>');
		
		username = twitters[i].user.screen_name
		statusHTML += ('<li class="tweets"><span>'+posttext+'</span><span class="published"><a style="font-size:85%" href="http://twitter.com/'+username+'/statuses/'+twitters[i].id+'" title="Tweet Permalink">'+relative_time(twitters[i].created_at)+'</a></span></li><span  class="baseimg"></span>')
	}
	document.getElementById('twitter_updates').innerHTML = statusHTML;
}