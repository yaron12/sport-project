(function() {
	var app = angular.module("app")
	app.controller("israeliLeage", israeliLeage);

    function israeliLeage($scope){
    	$scope.myTeams = teams;
    }
    
	var teams = [{
		name : 'ביתר ירושלים',
		link : 'http://www.beitarfc.co.il/',
		img : '../images/Beitarjerusalem.png',
		waze: 'https://www.waze.com/he/livemap?zoom=17&lat=31.75126&lon=35.19078',
		tickets : 'http://www.beitarfc.co.il/'
		
	}, {
		name : 'מכבי תל אביב',
		link : 'https://www.maccabi-tlv.co.il/',
		img : '../images/Maccabitelaviv.png',
		waze : 'https://www.waze.com/he/livemap?zoom=17&lat=32.05205&lon=34.76165',
		tickets : ''
	}, {
		name : 'הפועל כפר-סבא',
		link : 'http://www.hapoel-kfs.org.il/',
		img : '../images/Hapoelkfarsaba.png',
		waze : 'https://www.waze.com/he/livemap?zoom=17&lat=32.18101&lon=34.92706',
		tickets : 'http://hapoel-kfs-shop.co.il/catalogsearch/result/?q=%D7%9B%D7%A8%D7%98%D7%99%D7%A1%D7%99%D7%9D+%D7%9C%D7%9E%D7%A9%D7%97%D7%A7++%D7%94%D7%A4%D7%95%D7%A2%D7%9C+%D7%9B%D7%A4%D7%A8+%D7%A1%D7%91%D7%90+%D7%A0%D7%92%D7%93+%D7%94%D7%A4%D7%95%D7%A2%D7%9C+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91'
	}, {
		name : 'הפועל אשקלון',
		link : 'https://ashkelonfootball.wordpress.com/',
		img : '../images/hapoelAshkelon.png',
		waze : 'https://www.waze.com/he/livemap?zoom=17&lat=31.6656&lon=34.56959',
		tickets : 'http://www.leaan.co.il/he-IL/subscriptions/%D7%94%D7%A4%D7%95%D7%A2%D7%9C%20%D7%90%D7%A9%D7%A7%D7%9C%D7%95%D7%9F%202016-17?back=2&area=d366f435-7d24-455d-9b7e-4aade6a2a9a1&type=ga'
	}, {
		name : 'הפועל חיפה',
		link : 'http://www.hhaifa.com',
		img : '../images/Hapoelhaifa.png',
		waze:   'https://www.waze.com/he/livemap?zoom=17&lat=32.78322&lon=34.96551',
		tickets : 'http://barak-tickets.co.il/categories/%D7%A1%D7%A4%D7%95%D7%A8%D7%98'
	}, {
		name : 'עירוני קרית שמונה',
		link : 'http://iturank8.co.il/',
		img : '../images/Eironikiriatshmona.png',
		waze : 'https://www.waze.com/he/livemap?zoom=17&lat=33.20817&lon=35.57618',
		tickets : '#'
	}, {
		name : 'מ.ס אשדוד',
		link : 'https://www.facebook.com/fcashdodofficial/',
		img : '../images/Msashdod.png',
		waze : 'https://www.waze.com/he/livemap?zoom=17&lat=31.81057&lon=34.64835',
		tickets : 'http://www.fc-ashdod.com/game-board'
	}, {
		name : 'מכבי פתח תקוה',
		link : 'http://www.m-pt.co.il/',
		img : '../images/Maccabipetahtikva.png',
		waze : 'https://www.waze.com/he/livemap?zoom=17&lat=32.10438&lon=34.86569',
		tickets : 'http://www.leaan.co.il/he-IL/subscriptions/%D7%9E%D7%9B%D7%91%D7%99%20%D7%A4%D7%AA%D7%97%20%D7%AA%D7%A7%D7%95%D7%95%D7%94%2016-17?hallmap'
	}, {
		name :  'מכבי חיפה',
		link :  'http://mhaifafc.com/',
		img :   '../images/Maccabihaifa.png',
		waze:   'https://www.waze.com/he/livemap?zoom=17&lat=32.78322&lon=34.96551',
		tickets:'http://stadium.mhaifafc.com/gameslist.asp'
	}, {
		name : 'הפועל תל אביב',
		link : 'http://www.htafc.co.il/',
		img : '../images/Hapoeltelaviv.png',
		waze : 'https://www.waze.com/he/livemap?zoom=17&lat=32.05205&lon=34.76165',
		tickets : 'https://www.leaan.co.il/he-IL/subscriptions/%D7%94%D7%A4%D7%95%D7%A2%D7%9C%20%D7%AA%D7%9C%20%D7%90%D7%91%D7%99%D7%91%2016-17/info'
	}, {
		name : 'הפועל באר שבע',
		link : 'http://www.hapoelb7.co.il/',
		img : '../images/Hapoelbeersheva.png',
		waze : 'https://www.waze.com/he/livemap?zoom=17&lat=31.27354&lon=34.77971',
		tickets : 'http://www.turnerstadium.co.il/tickets'
	}, {
		name : 'הפועל רעננה',
		link : 'http://www.hapoel-raanana.co.il/',
		img : '../images/Hapoelraanana.png',
		waze : 'https://www.waze.com/he/livemap?zoom=17&lat=32.1867&lon=34.87274',
		tickets : 'http://www.hapoel-raanana.co.il/schedule-and-results'
	}, {
		name : 'בני יהודה',
		link : 'http://bnei-yehuda.net',
		img : '../images/Bneiyehuda.png',
		waze : 'https://www.waze.com/he/livemap?zoom=17&lat=32.04998&lon=34.78703',
		tickets : 'https://www.leaan.co.il/he-IL/subscriptions/%D7%91%D7%A0%D7%99%20%D7%99%D7%94%D7%95%D7%93%D7%94%20%D7%AA%D7%9C%20%D7%90%D7%91%D7%99%D7%91%2016-17/info'
	}, {
		name : 'בני סכנין',
		link : '/team/4008?league=157',
		img : '../images/Bneisachnin.png',
		waze : 'https://www.waze.com/he/livemap?zoom=17&lat=32.86693&lon=35.31094',
		tickets : '#'

	}];

/*
       var waze = [{
       	img:'../images/waze.png',
       	samiOfer:'https://www.waze.com/he/livemap?zoom=17&lat=32.78322&lon=34.96551',
       	blumfild:'',
       	trener:'',
       	natanya:'',
       	tedi:'',
       	docha:'',
       	akko:'',
       	tikva:'',
       	moshava:'',
       	ashdod:'',
       	kiriats:'',
       	ashkelon:'',
       	kfarsaba:''
       }];
*/

})();
