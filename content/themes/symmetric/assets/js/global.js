(function($) {
  /* All Images Loaded */
  $(window).load(function() {});
  /* Dom Loaded */
  $(document)
      .ready(function($) {
        if ($('body').hasClass('post-template')) {
          (function() {
            var referer = "";
            try {
              if (referer = document.referrer, "undefined" == typeof referer)
                throw "undefined"
            } catch (exception) {
              referer = document.location.href,
              ("" == referer || "undefined" == typeof referer) &&
                  (referer = document.URL)
            }
            referer = referer.substr(0, 700);
            var rcel = document.createElement("script");
            rcel.id = 'rc_' + Math.floor(Math.random() * 1000);
            rcel.type = 'text/javascript';
            rcel.src =
                "http://trends.revcontent.com/serve.js.php?w=44100&t=" +
                rcel.id + "&c=" + (new Date()).getTime() + "&width=" +
                (window.outerWidth || document.documentElement.clientWidth) +
                "&referer=" + referer;
            rcel.async = true;
            var rcds = document.getElementById("rcjsload_3d3aad");
            rcds.appendChild(rcel);
          })();
        }
        var $window = $(window), ath = $('#addThis'),
            athScroll = $('#addThis_scroll');

        setTimeout(function() {
          // 1st set of addthis buttons
          ath.addClass("addthis_sharing_toolbox pull-left ")
              .css({
                "display" : "inline-flex",
                "visibility" : "visible",
                "margin-top" : "20px",
                "padding" : "0px",
                "clear" : "none"

              });
          var x = $('#atstbx a span'), y = $('#atstbx a span svg'),
              z = $('#atstbx .at-share-btn');
          z.css({'margin' : '10px'});
          y.css({"height" : "40px", "width" : "40px"});
          x.css({
            "height" : "30px",
            "width" : "30px",
            "text-align" : "center",
            "vertical-align" : "middle",
            "padding-top" : "3px"
          });
          $('.at-svc-stumbleupon .at-icon-wrapper').css({'display' : 'none'});
          // 2nd set Add this Buttons on Scroll
          athScroll
              .addClass(
                  "col-xs-6 col-lg-4 col-md-5")
              .css({
                "display" : "inline-flex",
                "clear" : "none",
                "padding-bottom" : "10px"
              });
          var x2 = $('#atstbx2 a span'), y2 = $('#atstbx2 a span svg'),
              z2 = $('#atstbx2 .at-share-btn');
          z2.css({'margin' : '10px'});
          y2.css({"height" : "40px", "width" : "40px"});
          x2.css({
            "height" : "30px",
            "width" : "30px",
            "text-align" : "center",
            "vertical-align" : "middle",
            "padding-top" : "3px"
          });
          $('.at-svc-stumbleupon .at-icon-wrapper').css({'display' : 'none'});

        }, 500);
        /*  if ($window.width() <= 768) {
            $('#atstbx')
                .children()
                .hasClass('at-svc-stumbleupon')
                .css({'display' : 'none'});
            }
            */
        // Mobile switch of nav-bar to addthis buttons

        var $trending = $(".trending"), // addThis = $('#addwrap'),
                                        //$mobileLogoD = $('.mobile-logo_3'),
            $scrollNav = $('.scroll-nav'),
            //  $logo_words = $(".mobile-logo-words"), $follow =
            //  $("#mobileFollow");
            post_header = parseInt($('.nav-wrap').offset().top, 10);

        // var home_header = parseInt($('.mobile-logo').offset().top, 10);

        $window.scroll(function() {
          // check if we are on the post page
          var scroll_top = $(this).scrollTop();
          //  console.log(scroll_top);
          if ($('body').hasClass("post-template")) {
            if (scroll_top >= post_header) {
              //  addThis.css({'visibility' : 'visible'}).sticky({zIndex : 6});
              //  ath.css({'visibility' : 'visible'}).sticky({zIndex : 7});
              $trending.css({'visibility' : 'visible'});
              //$logo_words.css({'visibility' : 'hidden'});
              //$mobileLogoD.css({'visibility' : 'hidden'});
              $scrollNav.css({'visibility' : 'visible'});
            }
          }
          if (scroll_top <= post_header) {
            $trending.css({'visibility' : 'hidden'});
            //  $logo_words.css({'visibility' : 'visible'});
            // addThis.css({'visibility' : 'hidden'});
            // ath.css({'visibility' : 'hidden'});
            //$mobileLogoD.css({'visibility' : 'visible'});
            $scrollNav.css({'visibility' : 'hidden'});
          }
          /*if ($('body').hasClass('home-template') &&
              scroll_top >= home_header) {
            $mobile_logo.css({'visibility' : 'hidden'});
            $logo_words.css({'visibility' : 'hidden'});
          }*/
        });
        // if ($('body').hasClass('post-template')) {
        //   var menuWrapper = $('.scroll-nav');
        //   if ($(document).width() < 1440) {
        //     menuWrapper.sticky({
        //       zIndex : 1000,
        //
        //     });
        //   } else {
        //     menuWrapper.unstick();
        //   }
        // }
        $('#ad_3').affix({offset : {top : 200}}).css("top", "70px");

        $('.row-wrap').siblings().wrapAll("<div class='row' /div>");
        deBouncer(jQuery, 'smartresize', 'resize', 50);

        // FADE-OUT READ MORE button
        var $el, $p, $ps, $up, totalHeight, articleHeight;

        $(" .fade-1 .btn")
            .click(function() {

              totalHeight = 0;
              articleHeight = $('.fade-1').children().not('.read-more');
              $el = $(this);
              //  console.log($el);
              $p = $el.parent();
              //  console.log($p);
              $up = $p.parent();
              //  console.log($up);
              $ps = $up.find(articleHeight);

              // measure how tall inside should be by adding together heights

              // all inside paragraphs (except read-more paragraph)
              $ps.each(function() { totalHeight += $(this).outerHeight(); });
              // console.log($(this).outerHeight());
              // console.log($ps);
              $up.css({
                   // Set height to prevent instant jumpdown when max height
                   // is
                   // removed
                   "height" : $up.height(),
                   "max-height" : 9999
                 })
                  .animate({"height" : totalHeight});

              // fade out read-more
              $p.fadeOut();

              // prevent jump-down
              return false;

            });

        // END OF READ MORE BUTTON FADE OUT
      /*  var create_excerpt = function(html_input){
          var tmpInnerText = $.parseHTML(html_input)
          $.each(tmpInnerText, function(index,value){
            tmpInnerText.push(value);
          });
          return tmpInnerText.join(" ")
        }*/
        var create_excerpt = function(b) {
          var finalText=[];
          var authorInnerText = $.parseHTML(b)[0].innerText;
                   var tmpInnerText = $.parseHTML(b)[2].innerText;
                   var exp1String = authorInnerText.split(/\s+/, 20);
                    var expString = tmpInnerText.split(/\s+/, 20);
                      finalText.push(exp1String.join(" "));
                      finalText.push(expString.join(" "));
                      console.log(finalText);
                   return finalText;
               };
        // INFINITE SCROLL
        // How we display the new posts  once the new posts are recieved

        function insertPost(postData, onTagPage) {
          var timeago = moment(postData.published_at).startOf('hour').fromNow();
          console.log(create_excerpt(postData.html));
          var postInfo = "";

          if(onTagPage){
            var published_date = new Date(postData.published_at).toString().substr(4,11);
            //console.log(create_excerpt(postData.html))
            postInfo =  '<article class="default col-md-12 post ">\
              						<header>\
              							<div class="col-md-6 col-lg-6">\
              							       <a class="thumb hover-effect" href="' + postData.url + '">\
              												<img src="' + postData.image + '">\
              											</a>\
                                    </div>\
                                 <div class="col-md-6 col-lg-6">\
                    <div id="meta">\
                      <div class="meta">\
              											<div id="time">\
                                  <time class="post-date" datetime="' + timeago +
                                                '">  <i class="fa fa-clock-o"></i>' + timeago + '</time>\
                                   </div>\
                                    <div class="clear"></div>\
                                    </div>\
                                    </div>\
                                    <div class="row">\
                                    <div>\
                                    <h4 class="title tag-title"><a href="' + postData.url + '">' + postData.title + '</a></h4>\
                                    </div>\
                                    </div>\
                                    </header>\
                                   <div>\
                                        <div class="post-excerpt">' + create_excerpt(postData.html) + '<a href="' + postData.url + '" class="continue_reading" style="opacity: .5;"> Continue Reading</a>\
                                    <i class="fa fa-angle-double-right"></i></div></div>\
                                    </div>\
                                  </article>\
                                  ';








          } else {
            // start the inserting of the html
          postInfo =
              '<div class="meta">\
            <a class="local" href="' +
              postData.url +
              '"><h1 class="title" id="post_title" style="font-family:Playfair Display;">' +
              postData.title + '</h1></a>\
              <div class="fb-like" data-href="https://www.facebook.com/HeartCenteredRebalancing" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="false"></div>\
                  <div class="row">';

          postInfo += ' <time class="post-date" datetime="' + timeago +
                      '">  <i class="fa fa-clock-o"></i>' + timeago + '</time>\
                                  </div>';

          postInfo += '<div class="main-image cover">\
                          <img src="' +
                      postData.image +
                      '" style="width:100%" height="400" alt=""/>\
                            <div class="center grid-container">\
                              <div class="boxed cover" style="background: url("' +
                      postData.url + '");"></div>\
                              <div class="boxed overlay"></div>\
                            </div>\
                      </div>\
                      <div class="center content section ">\
                        <article class="post">\
                          <section class="post-content" style="margin-bottom:50px;">\
                          <div class="ad-container col-lg-4 col-xs-12"></div>';
            postInfo +=
                '<div class="row fade-out" style=margin-left:0;>\
              <div class="text">' +
                postData.html +
                '</div><p class="read-more"><a class="btn" href="#">Read More</a></p>\
              <div class="clear"></div>\
              </div>\
                            </section>\
                          </article>\
                        </div>\
                  </div>\
              ';

          }
           // Ad
          // should
          // go
          // here


          // Append the html to the content of the blog
          //$('article').last().after(postInfo);
          $(postInfo).appendTo(".loaded_content");
          // incriment next page so it will get the next page of posts if hit
          // again.
        }
        // Are we on the post page? if so scroll the bitch
        // TODO figure out how to stop the infinte scroll after 20 articles are
        // loaded
        var trueContent = false;
        if ($('body').hasClass('post-template') || $('body').hasClass('tag-template')) {
          var tagTemplate = $('body').hasClass('tag-template') ? true : false;
          //console.log(tagTemplate);
          //console.log('bobs your uncle')
          var page = 3;

          $(window)
              .scroll(function() {
                if ($window.scrollTop() + $window.height() >=
                        parseInt($(document).height()) &&
                    trueContent == false) {
                  ++page;

                  if(tagTemplate){
                    var tagName = "tag:" + location.pathname.slice(5).replace('/','')
                    //console.log('include tags from ' + tagName)
                    $.getJSON(ghost.url.api(
                                  'posts',
                                  {limit : 4, page : page, include : ["author", "tags"], filter: tagName }))
                        .done(function(data) {
                          //console.log(data)
                          $.each(data.posts,
                                 function(i, post) { insertPost(post, tagTemplate); });
                          // console.log('posts', data.posts);
                        })
                        .fail(function(err) { console.log(err); });
                  } else {
                    $.getJSON(ghost.url.api(
                                  'posts',
                                  {limit : 4, page : page, include : "author"}))
                        .done(function(data) {
                          $.each(data.posts,
                                 function(i, post) { insertPost(post); });
                          // console.log('posts', data.posts);
                        })
                        .fail(function(err) { console.log(err); });
                  }


                }
                // console.log($('.post').length);
              });
        }



        // console.log($('.post').length + "Im the initial");
        $.fn.isOnScreen = function() {

          var win = $(window);

          var viewport = {top : win.scrollTop(), left : win.scrollLeft()};
          viewport.right = viewport.left + win.width();
          viewport.bottom = viewport.top + win.height();

          var bounds = this.offset();
          bounds.right = bounds.left + this.outerWidth();
          bounds.bottom = bounds.top + this.outerHeight();

          return (
              !(viewport.right < bounds.left || viewport.left > bounds.right ||
                viewport.bottom < bounds.top || viewport.top > bounds.bottom));

        };
        /*This is how we update the URL on our related articles
        @TODO need to set a conditonal to stop firing our replaceState method
        @TODO need to figure out how to set up a track page event
              for google analytics to count them as page views */
        $(window)
            .scroll(function(e) {

              $('.local')
                  .each(function() {
                    //  console.log(index + ':' + $(this).attr('href'));
                    if ($(this).isOnScreen() === true) {
                      (window.history.replaceState('state', 'null',
                                                   $(this).attr('href')));

                      return e.preventDefault();
                    }

                  });

            });
        // If you want to paginate a whole page look down here

        /*
         var content = $('.content').children();
        $.get((url_blog + '/page/' + page),
        function(data) {
        if (page <= max_pages) {
        var content = $('' + data + '');
        $('.content').append(content.find('.content').children());
        page = page + 1;
      }
    });*/

        /* Global
          */
        $('#header div.menu-mobile')
            .click(function() { $('#header')
                                    .toggleClass('menu-open'); })

    //       $(function(){
    //       var $searchlink = $('#searchtoggl i');
    //       var $searchbar  = $('.searchbar');
    //         $('.searchtoggl').on('click', function(e){
    //             e.preventDefault();
    //             // if($(this).attr('id') == 'searchtoggl') {
    //             // if(!$searchbar.is(":visible")) {
    //             //   // if invisible we switch the icon to appear collapsable
    //             // $searchlink.removeClass('fa-search').addClass('fa-search-minus');
    //             // } else {
    //             //         // if visible we switch the icon to appear as a toggle
    //             //     $searchlink.removeClass('fa-search-minus').addClass('fa-search');
    //             //   }
    //             //     $searchbar.slideToggle("fast");
    //             // }
    //   });
    //         $('#searchform').submit(function(e){
    //           e.preventDefault(); // stop form submission
    //           });
    // });


                var submitIcon = $('.searchbox-icon');
                var inputBox = $('.searchbox-input');
                var searchBox = $('.searchbox');
                var isOpen = false;
                submitIcon.click(function(){
                    if(isOpen == false){
                        searchBox.addClass('searchbox-open');
                        inputBox.focus();
                        isOpen = true;
                    } else {
                        searchBox.removeClass('searchbox-open');
                        inputBox.focusout();
                        isOpen = false;
                    }
                });
                 submitIcon.mouseup(function(){
                        return false;
                    });
                searchBox.mouseup(function(){
                        return false;
                    });
                $(document).mouseup(function(){
                        if(isOpen == true){
                            $('.searchbox-icon').css('display','block');
                            submitIcon.click();
                        }
                    });
                  function buttonUp(){
                    var inputVal = $('.searchbox-input').val();
                    inputVal = $.trim(inputVal).length;
                    if( inputVal !== 0){
                        $('.searchbox-icon').css('display','none');
                    } else {
                        $('.searchbox-input').val('');
                        $('.searchbox-icon').css('display','block');
                    }
                }

        $('#back-to-top')
            .click(function(event) {
              event.preventDefault();
              $('html, body').animate({scrollTop : 0}, 500);
              return false;
            });

        /* Home */

        /*if ($('section.tweets').length > 0 &&
            theme_config.twitter_username != '') {
          var username = theme_config.twitter_username;
          $('section.tweets h3').text('@' + username).show();
          var limit = theme_config.twitter_limit;
          var wrapper = $('section.tweets .slick');
          var urlpattern =
              /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
          var usernamepattern = /@+(\w+)/ig;
          var hashpattern = /#+(\w+)/ig;
          var pIMG, media, timestamp, abox, mtext;
          var tweets = '';*/

        /* Tweetcool fixes */

        //$.getJSON("https://www.api.tweecool.com/?screenname=" + username +
        //"&count=" + limit, function(data) {
        /*			$.getJSON("https://www.api.tweecool.com/?screenname="
           +
           username + "&count=" + limit, function(data) {
                                        if (data.errors || data == null) {
                                                wrapper.html('No tweets
           available.');
                                                return false;
                                        }

                                        $.each(data.tweets, function(i, field)
           {
                                                mtext = field.text;
                                                tweets += '<div
           class="item"><div class="tweets_txt">' + mtext.replace(urlpattern,
           '<a href="$1" target="_blank">$1</a>').replace(usernamepattern, '<a
           href="https://twitter.com/$1"
           target="_blank">@$1</a>').replace(hashpattern, '<a
           href="https://twitter.com/search?q=%23$1"
           target="_blank">#$1</a>')+'</div></div>';
                                        });
                                        wrapper.html(tweets);
                                        wrapper.slick({
                                                cssEase: 'ease',
                                                arrows: true,
                                                dots: false,
                                                infinite: false,
                                                variableWidth: false,
                                                swipe: true,
                                                vertical: true,
                                                slidesToShow: 1
                                        });
                                }).fail(function(jqxhr, textStatus, error) {
                                        wrapper.html('No tweets available.');
                                });
                                */
        /*var get_tweets_config = {
          id : theme_config.twitter_app_id,
          domId : 'tweets',
          maxTweets : theme_config.twitter_limit,
          showImages : false,
          showRetweet : false,
          showTime : false,
          showUser : false,
          enableLinks : true,
          customCallback : function(tweets) {
            if (tweets) {
              var x = tweets.length;
              var n = 0;
              var element = $('#tweets');
              var html = '';
              while (n < x) {
                html += '<div class="item"><div class="tweets_text">' +
                        tweets[n] + '</div></div>';
                n++;
              }
            } else {
              html = 'No tweets available';
            }
            wrapper.html(html);
            wrapper.slick({
              cssEase : 'ease',
              arrows : true,
              dots : false,
              infinite : false,
              variableWidth : false,
              swipe : true,
              vertical : true,
              slidesToShow : 1
            });
          }
        };
        twitterFetcher.fetch(get_tweets_config);
      }/*

      $('.tooltip')
          .tooltipster({
            theme : 'tooltipster-small',
            contentAsHTML : true,
            animation : 'grow'
          });
      $('.share-button')
          .tooltipster({
            theme : 'tooltipster-small',
            contentAsHTML : true,
            animation : 'grow',
            interactive : true,
            functionInit : function(origin, continueTooltip) {
              return this.next().html();
            }
          });

      /* Featured Sections */

        if ($('aside#featured .featured-top').length > 0) {
          $.get("/tag/featured-top", function(data) {
            $('aside#featured .featured-top .box').html(data);
          });
        }
        if ($('aside#featured .featured-bottom').length > 0) {
          $.get("/tag/featured-bottom", function(data) {
            $('aside#featured .featured-bottom .box').html(data);
          });
        }

        /* Home scripts */
        var home = ('#home');

        if (home.length > 0 && $('#home section.carousel').length > 0) {

          $.get("/tag/carousel", function(data) {
            $('#home section.carousel div.loader').hide();
            $('#home section.carousel #featured-posts')
                .html(data)
                .slick({
                  cssEase : 'ease',
                  arrows : false,
                  dots : true,
                  infinite : false,
                  variableWidth : false,
                  swipe : true,
                  vertical : false,
                  slidesToShow : 3,
                  slidesToScroll : 3,
                  responsive : [
                    {
                      breakpoint : 1025,
                      settings : {slidesToShow : 3, slidesToScroll : 3}
                    },
                    {
                      breakpoint : 767,
                      settings : {slidesToShow : 1, slidesToScroll : 1}
                    }
                  ]
                });
          });
        }

        /* Code Prettify */

        prettyPrint();

        /* Sidebar */

        if ($('.widget_tag_cloud .feed').length > 0) {
          $.get("/rss/", function(data) {
            var $xml = $(data);
            var tags = '';
            var tags_array = [];
            tags += '<div class="tagcloud">';
            $xml.find("category")
                .each(function() {
                  var tag = $(this).text();
                  if ($.inArray(tag, tags_array) == -1) {
                    tags_array.push(tag);
                  }
                });

            tags_array = jQuery.unique(tags_array);

            for (var i = 0; i < tags_array.length; i = i + 1) {
              var tag = tags_array[i];
              var tagURL = tag.toLowerCase().replace(/ /g, "-");
              if (tag != 'standard' && tag != 'example' && tag != 'carousel' &&
                  tag != 'link' && tag != 'quote')
                tags += '<a href="/tag/' + tagURL + '/">' + tag + '</a>';
            };

            tags += '</div>';
            $('.widget_tag_cloud .feed').html(tags);
          });
        }

        /*	if($('.widget_ep_flickr').length > 0 && theme_config.flickr_id
           != ''){
                        $('.widget_ep_flickr ul').jflickrfeed({
                                limit: theme_config.flickr_photos_limit,
                                qstrings: {
                                        id: theme_config.flickr_id
                                },
                                useTemplate: false,

                                itemCallback: function(item){
                                        $(this).append('<li class="grid-50
           tablet-grid-33 mobile-grid-33"><a href="'+item.image_b+'"
           title="'+item.title+'" class="hover-effect"><span class="cover"
           style="background-image: url('+item.image_n+');"></span></a></li>');
                                }
                        }, function(data) {
                                //$('section#<?php echo $this->id; ?> ul
           li:nth-child(3n)').addClass('ep-last');
                                $('.widget_ep_flickr ul, .widget_ep_flickr ul
           div.loading').addClass('loaded');
                                $('.widget_ep_flickr ul ').magnificPopup({
                                        type: 'image',
                                        gallery:{
                                                enabled: true,
                                                arrowMarkup: '<i
           class="mfp-arrow mfp-arrow-%dir% fa fa-chevron-%dir%"></i>'
                                        },
                                        delegate: 'a',
                                        mainClass: 'my-mfp-zoom-in',
                                        removalDelay: 300,
                                        closeMarkup: '<i title="%title%"
           class="mfp-close fa fa-times"></i>'
                                });
                        });
                }
        */
        /* Gallery */

        $('div#gallery').addClass('gallery');

        $('div.gallery')
            .each(function() {
              $(this)
                  .find('img')
                  .wrap(function() {
                    return '<div class="grid-33 tablet-grid-33"><a href="' +
                           $(this).attr('src') +
                           '" class="hover-effect" rel="gallery"></a></div>';
                  });
              $(this).append('<div class="clear"></div');
              $(this)
                  .magnificPopup({
                    type : 'image',
                    gallery : {
                      enabled : true,
                      arrowMarkup :
                          '<i class="mfp-arrow mfp-arrow-%dir% fa fa-chevron-%dir%"></i>'
                    },
                    delegate : 'a',
                    mainClass : 'my-mfp-zoom-in',
                    removalDelay : 300,
                    closeMarkup :
                        '<i title="%title%" class="mfp-close fa fa-times"></i>'
                  });
              $(this).fadeIn();
            });

        /* Global Lightbox */

        $('.lightbox')
            .magnificPopup({
              mainClass : 'my-mfp-zoom-in',
              removalDelay : 300,
              closeMarkup :
                  '<i title="%title%" class="mfp-close fa fa-times"></i>',
              fixedContentPos : true
            });

        /* Google Map Integration */

        /*  if ($('#map_canvas').length > 0) {
            var map_canvas = $('#map_canvas');
            var lat = map_canvas.attr('latitude');
            var lng = map_canvas.attr('longitude');
            var zoom = map_canvas.attr('zoom');
            var location = map_canvas.attr('location');
            if (!zoom)
              zoom = 16;
            if (lat && lng && zoom) {
              map_canvas.wrap('<div class="map"></div>');
              // if(location) $('div.map').append('<h3 class="location"><i
              // class="fa fa-map-marker"></i>'+location+'</h3>');
              initialize(lat, lng, zoom, location);
            }
          }*/

        //  $(window).smartresize(function(e) { wrapper.slick('setPosition');
        //  });
      });
  /*var homeTop =
          parseInt($('#aswift_2_expand').offset().top;*/
  if ($('body').hasClass('post-template')) {
    var postTop = parseInt($('#aswift_2_expand').offset().top -
                           $('.scroll-nav').height());
  }
  $(window)
      .scroll(function(event) {
        // console.log(top);
        // what the y position of the scroll is
        var y = $(this).scrollTop();
        // console.log(y + "im this");
        // whether that's below the form
        if (y >= postTop) {
          // console.log(y + ":" + top);
          // if so, ad the fixed class
          $('.ad-wrapper #ad_4').addClass('fixed');
        } else {
          // otherwise remove it
          $('.ad-wrapper #ad_4').removeClass('fixed');
        }

      });

  /*  function initialize(lat, lng, zoom, location) {
      var latlng = new google.maps.LatLng(lat, lng);
      var myOptions = {
        zoom : parseInt(zoom),
        center : latlng,
        scrollwheel : false
      };
      var map =
          new google.maps.Map(document.getElementById('map_canvas'), myOptions);
      // map.setMapTypeId('roadmap');
      var marker = new google.maps.Marker({position : latlng, map : map});
      if (location) {
        var infowindow = new google.maps.InfoWindow({
          content : '<div class="infowindow">' + location + '</div>',
          maxWidth : 370
        });
        infowindow.open(map, marker);
      }
      google.maps.event.addListener(marker, 'click',
                                    function() { infowindow.open(map, marker);
    });
      google.maps.event.addDomListener(window, 'resize',
                                       function() { map.setCenter(latlng); });
    }*/
})(jQuery);
