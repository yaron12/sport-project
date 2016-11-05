(function() {
	var app = angular.module("app")
	app.controller("israeliLeage", israeliLeage);

	function israeliLeage($scope) {
		$scope.myTeams = teams;
		$scope.saveMachResult = function() {
			console.log(rounds)
			var goals = [{
				myDatya : "computer",
				myPassword : "888"
			}];

			localStorage.setItem("myData", JSON.stringify(goals));
		}
		
		$scope.resetResult = function() {
		this.teamAScore = "";
		this.teamBScore = "";
		}
		
		$scope.getRound = function() {
			$scope.matches = rounds[$scope.currentRound - 1]
		}
	}

	function Match(teamB, teamA) {
		this.teamA = teamA
		this.teamB = teamB
		this.teamAScore = "-";
		this.teamBScore = "-";

	}

	var teams = [{
		name : 'ביתר ירושלים',
		link : 'http://www.beitarfc.co.il/',
		img : '../images/Beitarjerusalem.png',
		waze : 'https://www.waze.com/he/livemap?zoom=17&lat=31.75126&lon=35.19078',
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
		waze : 'https://www.waze.com/he/livemap?zoom=17&lat=32.78322&lon=34.96551',
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
		name : 'מכבי חיפה',
		link : 'http://mhaifafc.com/',
		img : '../images/Maccabihaifa.png',
		waze : 'https://www.waze.com/he/livemap?zoom=17&lat=32.78322&lon=34.96551',
		tickets : 'http://stadium.mhaifafc.com/gameslist.asp'
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

	var match1 = new Match(teams[9], teams[8]);
	var match2 = new Match(teams[13], teams[12]);
	var match3 = new Match(teams[11], teams[10]);
	var match4 = new Match(teams[0], teams[7]);
	var match5 = new Match(teams[6], teams[5]);
	var match6 = new Match(teams[2], teams[1]);
	var match7 = new Match(teams[4], teams[3]);

	var match8 = new Match(teams[12], teams[4]);
	var match9 = new Match(teams[3], teams[2]);
	var match10 = new Match(teams[1], teams[6]);
	var match11 = new Match(teams[5], teams[0]);
	var match12 = new Match(teams[7], teams[11]);
	var match13 = new Match(teams[10], teams[9]);
	var match14 = new Match(teams[8], teams[13]);

	var match15 = new Match(teams[8], teams[12]);
	var match16 = new Match(teams[13], teams[10]);
	var match17 = new Match(teams[9], teams[7]);
	var match18 = new Match(teams[11], teams[5]);
	var match19 = new Match(teams[0], teams[1]);
	var match20 = new Match(teams[6], teams[3]);
	var match21 = new Match(teams[2], teams[4]);

	var match22 = new Match(teams[12], teams[2]);
	var match23 = new Match(teams[4], teams[6]);
	var match24 = new Match(teams[3], teams[0]);
	var match25 = new Match(teams[1], teams[11]);
	var match26 = new Match(teams[5], teams[9]);
	var match27 = new Match(teams[7], teams[13]);
	var match28 = new Match(teams[10], teams[8]);

	var match29 = new Match(teams[10], teams[12]);
	var match30 = new Match(teams[8], teams[7]);
	var match31 = new Match(teams[13], teams[5]);
	var match32 = new Match(teams[9], teams[1]);
	var match33 = new Match(teams[11], teams[3]);
	var match34 = new Match(teams[0], teams[4]);
	var match35 = new Match(teams[6], teams[2]);
6
	var match36 = new Match(teams[12], teams[6]);
	var match37 = new Match(teams[2], teams[0]);
	var match38 = new Match(teams[4], teams[11]);
	var match39 = new Match(teams[3], teams[9]);
	var match40 = new Match(teams[1], teams[13]);
	var match41 = new Match(teams[5], teams[8]);
	var match42 = new Match(teams[7], teams[10]);
	7
	var match43 = new Match(teams[7], teams[12]);
	var match44 = new Match(teams[10], teams[5]);
	var match45 = new Match(teams[8], teams[1]);
	var match46 = new Match(teams[13], teams[3]);
	var match47 = new Match(teams[9], teams[4]);
	var match48 = new Match(teams[11], teams[2]);
	var match49 = new Match(teams[0], teams[6]);
	8
	var match50 = new Match(teams[12], teams[0]);
	var match51 = new Match(teams[6], teams[11]);
	var match52 = new Match(teams[2], teams[9]);
	var match53 = new Match(teams[4], teams[13]);
	var match54 = new Match(teams[3], teams[8]);
	var match55 = new Match(teams[1], teams[10]);
	var match56 = new Match(teams[5], teams[7]);
	9
	var match57 = new Match(teams[5], teams[12]);
	var match58 = new Match(teams[9], teams[6]);
	var match59 = new Match(teams[7], teams[1]);
	var match60 = new Match(teams[10], teams[3]);
	var match61 = new Match(teams[8], teams[4]);
	var match62 = new Match(teams[13], teams[2]);
	var match63 = new Match(teams[11], teams[0]);
	
	var match64 = new Match(teams[0], teams[0]);
	var match65 = new Match(teams[0], teams[0]);
	var match66 = new Match(teams[0], teams[0]);
	var match67 = new Match(teams[0], teams[0]);
	var match68 = new Match(teams[0], teams[0]);
	var match69 = new Match(teams[0], teams[0]);
	var match70 = new Match(teams[0], teams[0]);
	
	var match71 = new Match(teams[0], teams[0]);
	var match72 = new Match(teams[0], teams[0]);
	var match73 = new Match(teams[0], teams[0]);
	var match74 = new Match(teams[0], teams[0]);
	var match75 = new Match(teams[0], teams[0]);
	var match76 = new Match(teams[0], teams[0]);
	var match77 = new Match(teams[0], teams[0]);
	
	var match78 = new Match(teams[0], teams[0]);
	var match79 = new Match(teams[0], teams[0]);
	var match80 = new Match(teams[0], teams[0]);
	var match81 = new Match(teams[0], teams[0]);
	var match82 = new Match(teams[0], teams[0]);
	var match83 = new Match(teams[0], teams[0]);
	var match84 = new Match(teams[0], teams[0]);
	
	var match85 = new Match(teams[0], teams[0]);
	var match86 = new Match(teams[0], teams[0]);
	var match87 = new Match(teams[0], teams[0]);
	var match88 = new Match(teams[0], teams[0]);
	var match89 = new Match(teams[0], teams[0]);
	var match90 = new Match(teams[0], teams[0]);
	var match91 = new Match(teams[0], teams[0]);
	
	var match92 = new Match(teams[0], teams[0]);
	var match93 = new Match(teams[0], teams[0]);
	var match94 = new Match(teams[0], teams[0]);
	var match95 = new Match(teams[0], teams[0]);
	var match96 = new Match(teams[0], teams[0]);
	var match97 = new Match(teams[0], teams[0]);
	var match98 = new Match(teams[0], teams[0]);
	
	var match99 = new Match(teams[0], teams[0]);
	var match100 = new Match(teams[0], teams[0]);
	var match101 = new Match(teams[0], teams[0]);
	var match102 = new Match(teams[0], teams[0]);
	var match103 = new Match(teams[0], teams[0]);
	var match104 = new Match(teams[0], teams[0]);
	var match105 = new Match(teams[0], teams[0]);
	
	var match106 = new Match(teams[0], teams[0]);
	var match107 = new Match(teams[0], teams[0]);
	var match108 = new Match(teams[0], teams[0]);
	var match109 = new Match(teams[0], teams[0]);
	var match110 = new Match(teams[0], teams[0]);
	var match111 = new Match(teams[0], teams[0]);
	var match112 = new Match(teams[0], teams[0]);
	var match113 = new Match(teams[0], teams[0]);
	var match114 = new Match(teams[0], teams[0]);
	var match115 = new Match(teams[0], teams[0]);
	var match116 = new Match(teams[0], teams[0]);
	var match117 = new Match(teams[0], teams[0]);
	var match118 = new Match(teams[0], teams[0]);
	var match119 = new Match(teams[0], teams[0]);
	var match120 = new Match(teams[0], teams[0]);
	var match121 = new Match(teams[0], teams[0]);
	var match122 = new Match(teams[0], teams[0]);
	var match123 = new Match(teams[0], teams[0]);
	var match124 = new Match(teams[0], teams[0]);
	var match125 = new Match(teams[0], teams[0]);
	var match126 = new Match(teams[0], teams[0]);
	var match127 = new Match(teams[0], teams[0]);
	var match128 = new Match(teams[0], teams[0]);
	var match129 = new Match(teams[0], teams[0]);
	var match130 = new Match(teams[0], teams[0]);
	var match131 = new Match(teams[0], teams[0]);
	var match132 = new Match(teams[0], teams[0]);
	var match133 = new Match(teams[0], teams[0]);
	var match134 = new Match(teams[0], teams[0]);
	var match135 = new Match(teams[0], teams[0]);
	var match136 = new Match(teams[0], teams[0]);
	var match137 = new Match(teams[0], teams[0]);
	var match138 = new Match(teams[0], teams[0]);
	var match139 = new Match(teams[0], teams[0]);
	var match140 = new Match(teams[0], teams[0]);
	var match141 = new Match(teams[0], teams[0]);
	var match142 = new Match(teams[0], teams[0]);
	var match143 = new Match(teams[0], teams[0]);
	var match144 = new Match(teams[0], teams[0]);
	var match145 = new Match(teams[0], teams[0]);
	var match146 = new Match(teams[0], teams[0]);
	var match147 = new Match(teams[0], teams[0]);
	var match148 = new Match(teams[0], teams[0]);
	var match149 = new Match(teams[0], teams[0]);
	var match150 = new Match(teams[0], teams[0]);
	var match151 = new Match(teams[0], teams[0]);
	var match152 = new Match(teams[0], teams[0]);
	var match153 = new Match(teams[0], teams[0]);
	var match154 = new Match(teams[0], teams[0]);
	var match155 = new Match(teams[0], teams[0]);
	var match156 = new Match(teams[0], teams[0]);
	var match157 = new Match(teams[0], teams[0]);
	var match158 = new Match(teams[0], teams[0]);
	var match159 = new Match(teams[0], teams[0]);
	var match160 = new Match(teams[0], teams[0]);
	var match161 = new Match(teams[0], teams[0]);
	var match162 = new Match(teams[0], teams[0]);
	var match163 = new Match(teams[0], teams[0]);
	var match164 = new Match(teams[0], teams[0]);
	var match165 = new Match(teams[0], teams[0]);
	var match166 = new Match(teams[0], teams[0]);
	var match167 = new Match(teams[0], teams[0]);
	var match168 = new Match(teams[0], teams[0]);
	var match169 = new Match(teams[0], teams[0]);
	var match170 = new Match(teams[0], teams[0]);
	var match171 = new Match(teams[0], teams[0]);
	var match172 = new Match(teams[0], teams[0]);
	var match173 = new Match(teams[0], teams[0]);
	var match174 = new Match(teams[0], teams[0]);
	var match175 = new Match(teams[0], teams[0]);
	var match176 = new Match(teams[0], teams[0]);
	var match177 = new Match(teams[0], teams[0]);
	var match178 = new Match(teams[0], teams[0]);
	var match179 = new Match(teams[0], teams[0]);
	var match180 = new Match(teams[0], teams[0]);
	var match181 = new Match(teams[0], teams[0]);
	var match182 = new Match(teams[0], teams[0]);

	var round1 = []
	round1.push(match1)
	round1.push(match2)
	round1.push(match3)
	round1.push(match4)
	round1.push(match5)
	round1.push(match6)
	round1.push(match7)

	var round2 = []
	round2.push(match8)
	round2.push(match9)
	round2.push(match10)
	round2.push(match11)
	round2.push(match12)
	round2.push(match13)
	round2.push(match14)

	var round3 = []
	round3.push(match15)
	round3.push(match16)
	round3.push(match17)
	round3.push(match18)
	round3.push(match19)
	round3.push(match20)
	round3.push(match21)

	var round4 = []
	round4.push(match22)
	round4.push(match23)
	round4.push(match24)
	round4.push(match25)
	round4.push(match26)
	round4.push(match27)
	round4.push(match28)

	var round5 = []
	round5.push(match29)
	round5.push(match30)
	round5.push(match31)
	round5.push(match32)
	round5.push(match33)
	round5.push(match34)
	round5.push(match35)

	var round6 = []
	round6.push(match36)
	round6.push(match37)
	round6.push(match38)
	round6.push(match39)
	round6.push(match40)
	round6.push(match41)
	round6.push(match42)

	var round7 = []
	round7.push(match43)
	round7.push(match44)
	round7.push(match45)
	round7.push(match46)
	round7.push(match47)
	round7.push(match48)
	round7.push(match49)

	var round8 = []
	round8.push(match50)
	round8.push(match51)
	round8.push(match52)
	round8.push(match53)
	round8.push(match54)
	round8.push(match55)
	round8.push(match56)

	var round9 = []
	round9.push(match57)
	round9.push(match58)
	round9.push(match59)
	round9.push(match60)
	round9.push(match61)
	round9.push(match62)
	round9.push(match63)

	var round10 = []
	round10.push(match64)
	round10.push(match65)
	round10.push(match66)
	round10.push(match67)
	round10.push(match68)
	round10.push(match69)
	round10.push(match70)

	var round11 = []
	round11.push(match71)
	round11.push(match72)
	round11.push(match73)
	round11.push(match74)
	round11.push(match75)
	round11.push(match76)
	round11.push(match77)

	var round12 = []
	round12.push(match78)
	round12.push(match79)
	round12.push(match80)
	round12.push(match81)
	round12.push(match82)
	round12.push(match83)
	round12.push(match84)

	var round13 = []
	round13.push(match85)
	round13.push(match86)
	round13.push(match87)
	round13.push(match88)
	round13.push(match89)
	round13.push(match90)
	round13.push(match91)

	var round14 = []
	round14.push(match92)
	round14.push(match93)
	round14.push(match94)
	round14.push(match95)
	round14.push(match96)
	round14.push(match97)
	round14.push(match98)

	var round15 = []
	round15.push(match99)
	round15.push(match100)
	round15.push(match101)
	round15.push(match102)
	round15.push(match103)
	round15.push(match104)
	round15.push(match105)

	var round16 = []
	round16.push(match106)
	round16.push(match107)
	round16.push(match108)
	round16.push(match109)
	round16.push(match110)
	round16.push(match111)
	round16.push(match112)

	var round17 = []
	round17.push(match113)
	round17.push(match114)
	round17.push(match115)
	round17.push(match116)
	round17.push(match117)
	round17.push(match118)
	round17.push(match119)

	var round18 = []
	round18.push(match120)
	round18.push(match121)
	round18.push(match122)
	round18.push(match123)
	round18.push(match124)
	round18.push(match125)
	round18.push(match126)

	var round19 = []
	round19.push(match127)
	round19.push(match128)
	round19.push(match129)
	round19.push(match130)
	round19.push(match131)
	round19.push(match132)
	round19.push(match133)

	var round20 = []
	round20.push(match134)
	round20.push(match135)
	round20.push(match136)
	round20.push(match137)
	round20.push(match138)
	round20.push(match139)
	round20.push(match140)

	var round21 = []
	round21.push(match141)
	round21.push(match142)
	round21.push(match143)
	round21.push(match144)
	round21.push(match145)
	round21.push(match146)
	round21.push(match147)

	var round22 = []
	round22.push(match148)
	round22.push(match149)
	round22.push(match150)
	round22.push(match151)
	round22.push(match152)
	round22.push(match153)
	round22.push(match154)

	var round23 = []
	round23.push(match155)
	round23.push(match156)
	round23.push(match157)
	round23.push(match158)
	round23.push(match159)
	round23.push(match160)
	round23.push(match161)

	var round24 = []
	round24.push(match162)
	round24.push(match163)
	round24.push(match164)
	round24.push(match165)
	round24.push(match166)
	round24.push(match167)
	round24.push(match168)

	var round25 = []
	round25.push(match169)
	round25.push(match170)
	round25.push(match171)
	round25.push(match172)
	round25.push(match173)
	round25.push(match174)
	round25.push(match175)

	var round26 = []
	round26.push(match176)
	round26.push(match177)
	round26.push(match178)
	round26.push(match179)
	round26.push(match180)
	round26.push(match181)
	round26.push(match182)

	var rounds = []
	rounds.push(round1);
	rounds.push(round2);
	rounds.push(round3);
	rounds.push(round4);
	rounds.push(round5);
	rounds.push(round6);
	rounds.push(round7);
	rounds.push(round8);
	rounds.push(round9);
	rounds.push(round10);
	rounds.push(round11);
	rounds.push(round12);
	rounds.push(round13);
	rounds.push(round14);
	rounds.push(round15);
	rounds.push(round16);
	rounds.push(round17);
	rounds.push(round18);
	rounds.push(round19);
	rounds.push(round20);
	rounds.push(round21);
	rounds.push(round22);
	rounds.push(round23);
	rounds.push(round24);
	rounds.push(round25);
	rounds.push(round26);

	//press enter instead of click the button
	document.getElementById('myInput').onkeypress = function(e) {
		if (e.keyCode == 13) {
			document.getElementById('addByEnter').click();
		}
	}
	
})();
