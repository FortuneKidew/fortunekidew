var hidingOverviewVideo = false;

$(function() {
    MBP.scaleFix();
    MBP.hideUrlBarOnLoad();
    MBP.enableActive();
    MBP.preventZoom();

    // $("section.hero-centered span.typed").typed({
    //     strings: ["instances", "droplets", "servers"],
    //     typeSpeed: 50,
    //     backSpeed: 30,
    //     backDelay: 700
    // });

    $("#slider").slippry();

    $("ul.slider").bxSlider({
        speed: 400,
        controls: false,
        auto: true,
        autoHover: false,
        pause: 3500,
    });

    $(".menu-trigger").on("click", function(){
        $(".simple-header nav").toggleClass("show");
    });

    $(".simple-header nav a").not(".the-farm").on("click", function(e) {
        //e.preventDefault();

        var id = $(this).attr("href");
        $(id).scrollTo();
    });


    // Cache selectors
    var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+60,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

    // Bind to scroll
    $(window).scroll(function(){
       // Get container scroll position
       var fromTop = $(this).scrollTop()+topMenuHeight;
       
       // Get id of current scroll item
       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });
       // Get the id of the current element
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
       
       if (lastId !== id) {
           lastId = id;
           // Set/remove active class
           menuItems
             .parent().removeClass("menu-active")
             .end().filter("[href=#"+id+"]").parent().addClass("menu-active");
       }                   
    });

    // $(".log-in").on("click", function(e) {
    //     var account_alias = $.cookie("account_alias");

    //     if(account_alias) {
    //         e.preventDefault();
    //         window.location = 'https://' + account_alias + '.fortunekidew.co.ke';
    //     }
    // });

    $(".link-overview-video").on("click", function() {
        // if(typeof ga !== "undefined") {
        //     ga('send', 'event', 'Overview Video', 'Click', 'Click on overview video');
        // }

        if($("#overview-video").length === 0) {
            $(".modal-container").slideDown(350, function() {
                $("#overview-video-container .overview-video-content").html('<iframe id="overview-video" src="//player.vimeo.com/video/73097569?title=0&amp;byline=0&amp;portrait=0&amp;color=53b2e5" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
            });
        }
    });

    $(".link-do-video").on("click", function() {
        // if(typeof ga !== "undefined") {
        //     ga('send', 'event', 'Import DigitalOcean Servers Video', 'Click', 'Click on import servers from DigitalOcean video');
        // }

        if($("#overview-video").length === 0) {
            $(".modal-container").slideDown(350, function() {
                $("#overview-video-container .overview-video-content").html('<iframe id="overview-video" src="//player.vimeo.com/video/86865394?title=0&amp;byline=0&amp;portrait=0&amp;color=53b2e5" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
            });
        }
    });

    $(window).keyup(function(e) {
        //Esc
        if (e.keyCode == 27 && !hidingOverviewVideo) {
            if($("#overview-video").length > 0) {
                hidingOverviewVideo = true;

                $(".modal-container").slideUp(350, function() {
                    hidingOverviewVideo = false;
                    $("#overview-video-container .overview-video-content").html("");
                });
            }
        }
    });

    $("#overview-video-container a.close").on("click", function() {
        if($("#overview-video").length > 0) {
            hidingOverviewVideo = true;

            $(".modal-container").slideUp(350, function() {
                hidingOverviewVideo = false;
                $("#overview-video-container .overview-video-content").html("");
            });
        }
    });
});

if (jQuery) (function() {
    // $.extend($.fn, {
    //     scrollTo: function(cb) {
    //         $('html, body').animate({
    //             scrollTop: (parseInt($(this).offset().top) - 72)
    //         }, 500, cb);
    //     }
    // });
})(jQuery);
