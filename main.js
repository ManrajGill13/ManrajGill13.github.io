//list of gifs

var urls = [
	"I707hwy.gif", //blowing bubbles
	"qsLhV91.gif", //who me?
	"oiZMuaC.gif", //telephone
	"unGDVJv.gif", //vaporwave road
	"EIZsxuG.gif", //keyboard typing
	"soj9i15.gif", //macintosh plus
	"qgzj4Pt.gif", //evangelion walkman
	"QAqiUuu.gif", //prince of persia
	"ZmJCpIv.gif", //work out
	"AxqubiT.gif", //power rangers
	"fgTRcdT.gif", //h e l p   m e
	"ulc95Ai.gif", //drinking form straw
	"pDhDN4M.gif", //VCR menu
	"Ek3nfcs.gif", //tuning comm
	"S6QDhWA.gif", //blinking button
	"iOJUcQ7.gif", //data-stream
	"857VFjy.gif", //inserting disk
	"leGzAeS.gif", //entering commands
	"LujbLVU.gif", //3D-data
	"Yjn9GVZ.gif", //VHS tapes on the ground
	"Nb08Qbe.gif", //window hyukoh
	"PKvK8Nf.gif", //it follows
	"fRvhSdl.gif", //matilda hammer throw
	"6OCwYRs.gif", //evangelion blood
	"kVshy5i.gif", //inuyasha kagome
	"pRt29Uh.gif", //totoro rain
	"ufPp1Hv.gif", //princess mononoke spitting blood
	"aI7g0js.gif", //austin powers
	"OfyYapR.gif", //spirited away train
	"j4sqbTI.gif", //truman-show
	"FLohQYs.gif", //good-will-hunting
	"0XiTSDB.gif", //kiki's delivery service
	"DDCU1wS.gif", //spirited away leaving ship
	"D7iYdRW.gif", //star wars
	"d8sbuYL.gif", //paprika suicide
	"6dD9wgs.gif", //guardians of the galaxy awesome mix
	"zz1KiXB.gif", //cowboy bebop finding location
	"2amcMk4.gif", //sonic 3 hidden ring
	"pCVgYOu.gif", //wednesday addams family
	"V6f9sLY.gif", //jumanji robin williams run
	"TjnYVEt.gif", //back to the future
	"UEfSYnk.gif", //pokemon ash on bike
	"Vhm9Ftg.gif", //akira bike skid
	"PbKuKLi.gif", //akira explosion
	"sPR6G2l.gif", //leon the professional
	"0NOQyr0.gif", //drive
	"Bte1Ma3.gif", //drive ryan gosling
	"g4GVWc8.gif", //laying down
	"ROK5iWD.gif", //playing-piano
	"ztmSMxw.gif", //pulp fiction grooving
	"8lgiF6o.gif", //pulp fiction grooving 2
	"Gd6aCoV.gif", //grand budapest hotel skiing
	"rpnByYh.gif", //grand budapest hotel sledding
	"y6cYymB.gif", //leather jacket riding down the street hyukoh
	"EZILStq.gif", //leather jacket falling down bike hyukoh
	"v24b5qb.gif", //alien close
	"95LRjTR.gif", //alien idle
	"9YLfPe8.gif", //teenage mutant ninja turtles falling
	"XDKed94.gif", //teenage mutant ninja turtles click clack
	"r63E6qo.gif", //retro car
	"Ij8eE8k.gif"  //radio waves
];

var urlscopy = urls.slice(0);

//sets backgrounds for website, randomly choosing a gif from an array
//gifs are removed from the array once used and a new array of gifs
//is used when the previous array becomes empty
function setBackground(urls, targetId) {
    setInterval(function() {
    	if(urls.length === 0){
    		urls = urlscopy.slice(0);
    	}
        var index = Math.floor(Math.random() * (urls.length));
        var target = document.getElementById(targetId);
        target.style.backgroundImage = "url(https://i.imgur.com/" + urls[index] + ")";
        urls.splice(index, 1);
    }, 2200);
}

var target = "epilepsy";

function writeTime() {
    var now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    M = "AM ";

    if (hours > 12){
    	hours -= 12;
    	M = "PM ";
    }

    if (hours < 10) {
    	hours = '0' + hours;
    }
    if (minutes < 10) {
    	minutes = '0' + minutes;
    }
    time = M + hours + ':' + minutes;

    document.getElementById('time').innerHTML = time;

    // call this function again in 1000ms
    setTimeout(writeTime, 1000);
}
writeTime(); // initial call

function writeDate() {
    var now = new Date(), // current date
        months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
        date = [months[now.getMonth()] + now.getDate(), now.getFullYear()].join(' ');

    // set the content of the element with the ID time to the formatted string
    document.getElementById('date').innerHTML = date;

    // call this function again in 1000ms
    setTimeout(writeDate, 1000);
}
writeDate(); // initial call

$(document).ready(function() {
    $(window).scroll( function(){
        $('.glitch-home').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);
            }
            
        }); 
    
    });
    
});



//fade in navbar at 2.3s
$(document).ready(function () {
    setTimeout(function(){
        $('.navbar').fadeIn(500);
    }, 2300);
});

//very fancy text load in animation
let a = baffle('.glitch-home').start();
	a.set({
		characters : '█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>',
		speed: 75
	});
	a.reveal(4000, 3000);

setBackground(urls, target);

//change opacity of sections when scrolling past
$(window).on("scroll", function() {
    if($(window).scrollTop() > $(document).height()*0.1) {
        $("#Home").addClass("dim");
    } else {
        $("#Home").removeClass("dim");
    }
});

$(window).on("scroll", function() {
    if($(window).scrollTop() > $(document).height()*0.50 || $(window).scrollTop() < $(document).height()*0.15) {
        $("#About").addClass("dim");
    } else {
        $("#About").removeClass("dim");
    }
});

$(window).on("scroll", function() {
    if($(window).scrollTop() < $(document).height()*0.60) {
        $("#Projects").addClass("dim");
    } else {
        $("#Projects").removeClass("dim");
    }
});
