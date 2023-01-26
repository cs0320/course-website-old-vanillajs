/*!
 * Custom JS for CS32
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    var func = function(event) {
        var $anchor = $(this);
        $("#page-title").addClass("top-nav-collapse");
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 800, 'easeInOutExpo');
        event.preventDefault();
    };
    $('a.page-scroll').bind('click', func);
});

$('#navbar-open-button').click(function() {
    $(this).addClass("small-hidden")
    const toggleTarget = $('.toggle-target')
    toggleTarget.removeClass("small-hidden")
    $('.toggle-flex').addClass("flex-col")
    toggleTarget.addClass("flex-col")
    $('#navbar-close-button').removeClass("hidden-weak")
})

$('#navbar-close-button').click(function() {
    $(this).addClass("hidden-weak")
    $('.toggle-target').addClass("small-hidden")
    $('#navbar-open-button').removeClass("small-hidden")
})

$(window).resize(() => {
    if (this.innerWidth > 768) {
        $('.toggle-target').addClass("small-hidden")
        $('#navbar-close-button').addClass("hidden-weak")
        $('#navbar-open-button').addClass("large-hidden").removeClass("small-hidden")
    }
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Adds background class on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 65) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//TA pictures: onhover change to character pictures
$(".ta div").each(
    function() {
        var taId = this.id;
        $("#hidden-imgs").prepend($("<img>",{src:"img/people/" + taId + ".jpg"}));
        this.style.backgroundImage = "url(\"img/hover/" + taId + ".jpg\")";
	this.style.backgroundSize = "contain";
	this.style.backgroundRepeat = "no-repeat";
	this.style.backgroundPosition = "center";
        $(".ta div#" + taId).hover(
            function() {
                this.style.backgroundImage = "url(\"img/people/" + taId + ".jpg\")";
            },
            function() {
                this.style.backgroundImage = "url(\"img/hover/" + taId + ".jpg\")";
            }
        );
    }
);

function collapse(ele) {
    let content = $(ele);
    if (content.css('display') !== 'none') {
        content.css('display', 'none');
    } else {
        content.css('display', 'block');
    }
}

if ($("button.foldable").length > 0) {
    $('.foldable').click(function (event) {
        collapse(event.target.nextElementSibling);
    });
}

function getFileName(path) {
    const arr = path.split("/");
    return arr[arr.length - 1];
}

// var slideIndex = 0;
// carousel();
//
// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1}
//   x[slideIndex-1].style.display = "inline";
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }



