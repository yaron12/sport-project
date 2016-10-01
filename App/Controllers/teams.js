(function() {
	var app = angular.module("app")
	app.controller("israeliLeage", israeliLeage);

    function israeliLeage($scope){
    	$scope.myTeams = teams;
    }
    
	var teams = [{
		name : 'ביתר ירושלים',
		link : 'http://www.beitarfc.co.il/',
		img : '../images/Beitarjerusalem.png'
	}, {
		name : 'מכבי תל אביב',
		link : 'https://www.maccabi-tlv.co.il/',
		img : '../images/Maccabitelaviv.png'
	}, {
		name : 'הפועל כפר-סבא',
		link : 'http://www.hapoel-kfs.org.il/',
		img : '../images/Hapoelkfarsaba.png'
	}, {
		name : 'הפועל אשקלון',
		link : 'https://ashkelonfootball.wordpress.com/',
		img : '../images/hapoelAshkelon.png'
	}, {
		name : 'הפועל חיפה',
		link : 'http://www.hhaifa.com',
		img : '../images/Hapoelhaifa.png'
	}, {
		name : 'עירוני קרית שמונה',
		link : 'http://iturank8.co.il/',
		img : '../images/Eironikiriatshmona.png'
	}, {
		name : 'מ.ס. אשדוד',
		link : 'https://www.facebook.com/fcashdodofficial/',
		img : '../images/Msashdod.png'
	}, {
		name : 'מכבי פתח תקוה',
		link : 'http://www.m-pt.co.il/',
		img : '../images/Maccabipetahtikva.png'
	}, {
		name : 'מכבי חיפה',
		link : 'http://mhaifafc.com/',
		img : '../images/Maccabihaifa.png'
	}, {
		name : 'הפועל תל אביב',
		link : 'http://www.htafc.co.il/',
		img : '../images/Hapoeltelaviv.png'
	}, {
		name : 'הפועל באר שבע',
		link : 'http://www.hapoelb7.co.il/',
		img : '../images/Hapoelbeersheva.png'
	}, {
		name : 'הפועל רעננה',
		link : 'http://www.hapoel-raanana.co.il/',
		img : '../images/Hapoelraanana.png'
	}, {
		name : 'בני יהודה',
		link : 'http://bnei-yehuda.net',
		img : '../images/Bneiyehuda.png'
	}, {
		name : 'בני סכנין',
		link : '/team/4008?league=157',
		img : '../images/Bneisachnin.png'

	}];



})();
