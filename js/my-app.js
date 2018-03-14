// Initialize your app
var myApp = new Framework7({
	// Default title for modals
	root:'#app',
	theme: 'md',
	view:{
		xhrcache:false,
		pushState:true
	},
	dialog:{
		title:'Framework7'
	},
	routes: [
		{
		path: '/acerca/',
    	url: 'acerca.html',
    	name: 'acerca',
  		},
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/swiper/',
    	url: 'swiper.html',
    	name: 'swiper',
  		},
		{
		path: '/accordion/',
    	url: 'accordion.html',
    	name: 'accordion',
  		},
	]
    // ... other parameters
});

// Export selectors engine
var $$ = Dom7;



// Add another view, which is in right panel





 

