//DATK8, MUSE SIAB, CODE PRO, Capture it, Montserrant, EXO2



///////////////
////Below are for video control
///////////////

var toggleVideo = false;
// var myVideo = document.getElementById("vid1");


function playOrPause() {
    /*
    if (myVideo.paused) {
        myVideo.play();
        //console.log("Playing")
    }
    else {
        myVideo.pause();
        //console.log("Pause")
    }
    */
}

function stopVideo() {
    //myVideo.pause();
}

/*
$("#vid1").bind("ended", function() {
    $("#postVideoMsg").fadeIn();
});
*/

function replayVideo() {
    $("#postVideoMsg").fadeOut();
    myVideo.play();
}




///////////////
////Above are for video control
///////////////





$("#entirePageSize").hide();
$(".popOutContentPadding").hide();


var allowScrolling = false;
$(document).ready(function() {

    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { //Test if user is using mobile
        $("#parallaxPictures").css("display", "block");
    }
    else {

    }


    $(window).scrollTop(0);

    $("#mainBody").css("height", 0);

    $("#loadingBar").addClass("animateLoadingBar");


    setTimeout(function() { //These will run once, made to make the loading look real.
        //myVideo.play(); // Autoplay the video .8 seconds after the animation below.
        allowScrolling = true; //Allows scrolling when the video is now playing. (Load is finished)
        resetHeight();
    }, 2800);

    setTimeout(function() {
        $("#loadingScreen").addClass("animateFinishLoad");
        setTimeout(function() { //Logo is fading, video will then play 200ms before
            $(".aboutLogo2").fadeOut();
        }, 1000);
        setTimeout(function() {
            $("#loadingScreen").css("display", "none");
        }, 1500); //This will match the time for the transition stated in the "animateFinishLoad" CSS class
    }, 1000); // After 2 seconds of "fake loading", go do the animation




    $(document).click(function() { //Debugger
        //$("#loadingScreen").hide();
        //resetHeight();
        //allowScrolling = true;
    });
});



function getHeight() {
    var height = 0; //This runs once, and adjusts the height of the page based off on the div's in it.
    $(".frontWrapper > div").each(function() {
        height += $(this).height();
    });
    height += $(window).innerHeight();

    return height;
}

function resetHeight() {
    var height = 0; //This runs once, and adjusts the height of the page based off on the div's in it.
    $(".frontWrapper > div").each(function() {
        height += $(this).height();
    });
    height += $(window).innerHeight() * 2;

    $("#mainBody").css("height", height);


    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { //Test if user is using mobile
        $("#parallaxPictures").css("display", "none");
    }
    else {
        $("#parallaxPictures").css("display", "block"); //Display parallax or not
    }

}

window.addEventListener('resize', function() { //Resizing may affect the page's height so we need to recalc the height 
    resetHeight();
});






var curHeight = 0;
$(window).scroll(function(event) { //Allows smoother scrolling
    if (allowScrolling == false) {
        return;
    }


    var scroll = $(window).scrollTop() * -1;

    //console.log(scroll);
    $(".frontWrapper").css("transform", "translate3d(0," + scroll + "px,0)");
    $(".fronterWrapper").css("transform", "translate3d(0," + scroll / 2 + "px,0)");
    $(".back1Wrapper").css("transform", "translate3d(0," + scroll + "px,0)");
    $(".back3Wrapper").css("transform", "translate3d(0," + scroll / 4 + "px,0)");
    // Do something
});



function slideTo(num) {

    if (num == 1) {
        $(window).scrollTop($(window).height());
        var scroll = $(window).scrollTop() * -1;
        $(".frontWrapper").css("transform", "translate3d(0," + scroll + "px,0)");
        $(".fronterWrapper").css("transform", "translate3d(0," + scroll / 2 + "px,0)");
        $(".back1Wrapper").css("transform", "translate3d(0," + scroll + "px,0)");
        $(".back3Wrapper").css("transform", "translate3d(0," + scroll / 4 + "px,0)");
    }

}


var openedPopup = 0; //keeps track of the current popup state
var selectedSlide = -1; // was about, shop, or story clicked?

function openPopup(num) {

    selectedSlide = num;

    if (openedPopup == 0 && num == 1) {

        var client = new XMLHttpRequest();
        client.open('GET', 'files/hw2.txt');
        client.onreadystatechange = function() {
            //alert(client.responseText);
            if (this.readyState == 4) { //If this is 4, the files is retrieved.
                document.getElementById("paragraphData").innerHTML = client.responseText;
            }
        }
        client.send();



        $("#aboutPopout").addClass("animatePopup");
        $("#aboutPopout .popOutContentPadding").fadeIn(900);
        $(window).bind('mousewheel', function(e) { // on scroll
            var popupDiv = $('#aboutPopout');
            // set div scroll top offset to current + extra from this scroll
            popupDiv.scrollTop(popupDiv.scrollTop() -
                e.originalEvent.wheelDelta);

            return false; // prevent body scrolling
        });
    }


    if (openedPopup == 0 && num == 2) {

        $("#shopPopout").addClass("animatePopup");

        $(window).bind('mousewheel', function(e) { // on scroll
            var popupDiv = $('#shopPopout');
            // set div scroll top offset to current + extra from this scroll
            popupDiv.scrollTop(popupDiv.scrollTop() -
                e.originalEvent.wheelDelta);

            return false; // prevent body scrolling
        });
    }



    if (openedPopup == 0 && num == 3) {

        $("#storyPopout").addClass("animatePopup");

        $(window).bind('mousewheel', function(e) { // on scroll
            var popupDiv = $('#storyPopout');
            // set div scroll top offset to current + extra from this scroll
            popupDiv.scrollTop(popupDiv.scrollTop() -
                e.originalEvent.wheelDelta);

            return false; // prevent body scrolling
        });
    }

    if (openedPopup == 0 && num == 4) {

        $("#eventPopout").addClass("animatePopup");
        $("#eventPopout .popOutContentPadding").fadeIn(900);
        $(window).bind('mousewheel', function(e) { // on scroll
            var popupDiv = $('#eventPopout');
            // set div scroll top offset to current + extra from this scroll
            popupDiv.scrollTop(popupDiv.scrollTop() -
                e.originalEvent.wheelDelta);

            return false; // prevent body scrolling
        });
    }


}


function closePopup() {


    if (openedPopup == 1) {
        openedPopup = 2;


        $(".popOut").removeClass("animatePopup");
        $(".popOutContentPadding").fadeOut(600);
        if (selectedSlide == 1) {
            $("#aboutPopout").addClass("animateClosePopup");
        }
        if (selectedSlide == 2) {
            $("#shopPopout").addClass("animateClosePopup");
        }
        if (selectedSlide == 3) {
            $("#storyPopout").addClass("animateClosePopup");
        }
        if (selectedSlide == 4) {
            $("#eventPopout").addClass("animateClosePopup");
        }
    }

}

$(".popOut").bind('oanimationend animationend webkitAnimationEnd', function() {
    if (openedPopup == 0) {
        openedPopup = 1;
    }
    if (openedPopup == 2) {
        openedPopup = 0;
        $(".popOut").removeClass("animateClosePopup");
        $(window).unbind("mousewheel");
    }
});



function switchTab(num) {

    $(".tab1, .tab2").addClass("hideItem");

    if (num == 1) {
        $(".tab1").removeClass("hideItem");
    }
    if (num == 2) {
        $(".tab2").removeClass("hideItem");
    }

}






///////////////
////Contact Menu Button
///////////////

function openContactMenu() {
    $("#entirePageSize").fadeIn();
}

$("#entirePageSize").click(function(e) { //Handle click events
    $("#entirePageSize").hide();
})
$("#entirePageSize #contactMenu").click(function(e) { //Prevents SCROLLING in child subclasses
    e.stopPropagation();
});
