$(window).on('load', function() {
  //vertically center video
  function placement(){
    var videoHeight = document.getElementById('video-player').clientHeight;
    var vwrapHeight = document.getElementById('video-wrapper').clientHeight;
    var vwrapLeft = document.getElementById('video-wrapper');
    var vwrapCompLeft = window.getComputedStyle(vwrapLeft);
    var windowWidth = $(window).width();
    var vwrapWidth = document.getElementById('video-controls').clientWidth;
    //vertically center video
    var vheightMargin
    if (videoHeight > 809){
      vheightMargin = 0;
    }else{
      vheightMargin = ((vwrapHeight - videoHeight)/2);
    };
    $('#video-div').css('margin-top',vheightMargin);
    //hor center explore button
    var expLeft = (window.innerWidth/2)-96;
    $('#explore-button').css('left',expLeft);

    //hor center slider pane
    $('#slider').css({
      //'left':vwrapCompLeft.marginLeft
      //'width':vwrapWidth
    });
    $('body').css({'width':windowWidth})
  };
  placement();
  $(window).resize(function(){
    placement();
  });

});

$(document).ready(function(){
  var url =window.location.href;
  var pageTitle = document.title
  //Facebook sdk
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '328214110894764',
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   //twitter
   window.twttr = (function(d, s, id) {
   var js, fjs = d.getElementsByTagName(s)[0],
     t = window.twttr || {};
   if (d.getElementById(id)) return t;
   js = d.createElement(s);
   js.id = id;
   js.src = "https://platform.twitter.com/widgets.js";
   fjs.parentNode.insertBefore(js, fjs);

   t._e = [];
   t.ready = function(f) {
     t._e.push(f);
   };

   return t;
   }(document, "script", "twitter-wjs"));

  //detect device
  var isMobile;
  if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 //|| navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    isMobile = true;
  }
 else {
    isMobile = false;
  }
  if( navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 ){
    isMacMobile = true;
  }
 else {
    isMacMobile = false;
  }
  //force landscape isMobile==true &&
  if(isMobile==true && window.innerHeight > window.innerWidth){
    $('#main-wrapper').hide();
    $('#rotate').show();
  }
  if(isMobile==true){
    console.log('mobile');
    var videoSrc= $('#video-player source').attr('src');
    $('#video-player source').attr('src','mobile/'+videoSrc);
    var imgSrc= $('#main-wrapper').css('background-image');
    imgSrc=imgSrc.replace('url(','').replace(')','').replace('http://origin.kcts9.org/battle-ready/','').replace(/\"/gi, "");
    console.log('mobile/'+imgSrc);
    $('#main-wrapper').css('background-image','url("mobile/'+imgSrc+'")');
  }

  window.addEventListener("orientationchange", function() {
    if(isMobile==true && window.innerHeight > window.innerWidth){
      $('#main-wrapper').hide();
      $('#rotate').show();
    }else{
      $('#main-wrapper').show();
      $('#rotate').hide();
    }
  }, false);
  $(window).resize(function(){
    if(isMobile==true && window.innerHeight > window.innerWidth){
      $('#main-wrapper').hide();
      $('#rotate').show();
    }else{
      $('#main-wrapper').show();
      $('#rotate').hide();
    }
  });

//menu controls
  $('a').attr('data-ajax','false');
  $('#menu').load('assets.html #menu-load',function(){
    $('#menu #chapters p').click(function(){
        if ($('#menu .chp-block').css('right')=='-200px'){
          $('#menu .chp-block').animate({right:'+=200px'},300);
        }else{
          $('#menu .chp-block').animate({right:'-=200px'},300);
        }
    });
    $('#menu #share p').click(function(){
      if(isMobile==true){
        if ($('#menu .share-block').css('right')=='-200px'){
          $('#menu .share-block').animate({right:'+=252px'},300);
        }else{
          $('#menu .share-block').animate({right:'-=252px'},300);
        }
      }else{
        if ($('#menu .share-block').css('right')=='-200px'){
          $('#menu .share-block').animate({right:'+=260px'},300);
        }else{
          $('#menu .share-block').animate({right:'-=260px'},300);
        }
      }
    });
    //share tools
    document.getElementById('shareBtn').onclick = function() {
      FB.ui({
        method: 'share',
        display: 'popup',
        href: url+'?src=facebook',
      }, function(response){});
    }
    $('#shareTwitter').attr('href','https://twitter.com/intent/tweet?url='+url+'&text='+pageTitle);
  });
  //$('#footer').load('assets.html #footer-load');
  $(function() {
      Highcharts.setOptions({
          chart: {
            style: {
              fontFamily: "Trebuchet MS",
            }
          },
          title: {
            style: {
              fontFamily: 'Exo',
              fontWeight:'700'
            }
          },
          lang: {
              thousandsSep: ','
          },
          exporting: {
          	enabled: false
          },
          credits: {
          	enabled: false
          },
          legend: {
            enabled: false
          },
          tooltip:  {
            borderWidth: 0,
          }
      });
  });

  //video controls
  var video=document.getElementById("video-player");
  var playButton = document.getElementById("play-pause");
  var stopButton = document.getElementById("stop-vid");
  var muteButton = document.getElementById("mute");
  var seekBar = document.getElementById("seek-bar");
  var volumeBar = document.getElementById("volume-bar");
  var closedCaptions = document.getElementById("caption");
video.load();
if(isMacMobile ==true){
  video.addEventListener("contextmenu", function (e) { e.preventDefault(); e.stopPropagation(); }, false);

   // hide the controls if they're visible
  video.removeAttribute("controls");
}
  //play function
  function playVideos(){
      if (video.paused == true) {
        // Play the video
        video.play();
        $('#play-pause').attr('src','images/pause-button.png');
        $('#main').css('background-color','rgba(0,0,0,.6)');
        $('#next').hide();
      } else {
        // Pause the video
        video.pause();
        $('#play-pause').attr('src','images/play-button.png');
      }
  };
  function showVideo(){
    $('#video-wrapper').css('z-index','0').animate({opacity:'1'},800);
    $('#title').fadeOut();
  }
  //play
  $(window).keyup(function(e) {
    if (e.which == 32) {
      e.preventDefault();
      showVideo();
      if ($('#slider').css('display')=='block'){
          e.preventDefault();
      }else{
        playVideos();
      }
    }else{};
  });
  $('#video-div').click(function(){
    playVideos();
  })
  playButton.addEventListener("click", function() {
    showVideo();
    playVideos();
  });
  stopButton.addEventListener("click", function() {
    //playVideos();
    video.pause();
    video.currentTime = 0;
    $('#video-wrapper').css('z-index','-10').css('opacity','0');
    $('#play-pause').attr('src','images/play-button.png');
    $('#main').css('background-color','rgba(0,0,0,.45);');
    $('#title').fadeIn();
  });

  //mute
  muteButton.addEventListener("click", function() {
   if (video.muted == false) {
     // Mute the video
     video.muted = true;
     $('#mute').attr('src','images/unmute-button.png');
   } else {
     video.muted = false;
     $('#mute').attr('src','images/mute-button.png');
   }
  });
  seekBar.addEventListener("change", function() {
    showVideo();
    var time = video.duration * (seekBar.value / 100);
    video.currentTime = time;
  });
  seekBar.addEventListener("click", function() {
    video.pause();
    video.play();
    $('#play-pause').attr('src','images/pause-button.png');
  });

  /*seekBar.addEventListener("mousedown", function() {
    video.pause();
  });*/
  // Play the video when the slider handle is dropped
  seekBar.addEventListener("mouseup", function() {
    playVideos();
    $('#play-pause').attr('src','images/pause-button.png');
  });
  var seekValue;
  video.addEventListener("timeupdate", function() {
    // Calculate the slider value
    seekValue = (100 / video.duration) * video.currentTime;
    seekBar.value = seekValue;
    buttonChange();
  });
  video.addEventListener('durationchange', function() {
    var minutes =Math.floor(video.duration/60);
    var seconds = ('0'+Math.floor(video.duration % 60)).slice(-2);
    //var minutes = parseInt(video.duration / 60, 10);
		//var seconds = ('0'+(video.duration % 60)).slice(-2);
    $('#duration').html(minutes+":"+seconds);
    for (var k=0;k<slides.length;k++){
      var leftSet = (slides[k].start.minutes * 60)+ slides[k].start.seconds;
      var widthSet = ((slides[k].end.minutes * 60)+ slides[k].end.seconds)-leftSet;
      var leftPercent = (leftSet/video.duration)*100;
      var widthPercent = (widthSet/video.duration)*100;
      $('#'+slides[k].name).css({'left':leftPercent+'%','width':widthPercent+'%'});
    }
    measureSection();
  });

  //volume bar
  volumeBar.addEventListener("change", function() {
    video.volume = volumeBar.value;
  });
  //closed captions

    video.textTracks[0].mode = 'hidden';
    closedCaptions.addEventListener('mousedown', function(e) {
      if (video.textTracks[0].mode == 'hidden'){
        video.textTracks[0].mode = 'showing';
      }else{
        video.textTracks[0].mode = 'hidden';
      }
    });

  //explore button placement
  var areaStart=[];
  var areaEnd=[];
  var areaName=[];
  var areaId=[];
  var areaCalculated=[];
  function measureSection(){
    $('#add-sections .section').each(function(){
      var width = $(this).css('width').replace(/[^-\d\.]/g, '');
      var left = $(this).css('left').replace(/[^-\d\.]/g, '');
      var parentWidth = $('#add-sections').css('width').replace(/[^-\d\.]/g, '');
      var end = 100*width/parentWidth;
      var start = 100*left/parentWidth;
      areaStart.push(start);
      areaEnd.push(end+start);
      areaName.push($(this).attr('class').split(' ')[0]);
      areaId.push($(this).attr('id'));
    });
  }
  //switch out the button text
  var showing;
  function buttonChange(){
    showing=false;
    for (i=0;i<areaName.length;i++){
      if (seekValue > areaStart[i] && seekValue < areaEnd[i]){
        showing=true;
        //$('#explore-button .explore .text').html('explore '+areaName[i]);
        $('#explore-button .explore').attr('id',areaId[i]);
        $('#'+areaId[i]+' p').css('color','#fff');
        $('#'+areaId[i]).siblings().children('p').css('color','#666');
        $('#'+areaId[i]).css('border-color','#7589AB');
        $('#'+areaId[i]).siblings().css('border-color','#414C5F');
      }else{
        $('#'+areaId[i]+' p').css('color','#666');
      }
    }
    hideBtn();
  };
  function hideBtn(){
    if (!showing && !slideup){
      $('#main #explore-button').hide();
    }else if (showing && !slideup){
      $('#main #explore-button').show();
      $('#explore-button .explore').show();
    }else if(!showing && slideup){
      $('#main #explore-button').show();
      $('#explore-button .explore').hide();
    }else if (showing && slideup){
      $('#main #explore-button').show();
    }
  }

  function colorToggle(id){
    $(id).toggle(function () {
      $(this).css('color','#000');
    }, function () {
      $(this).css('color','#ccc');
    });
  };

  //event after video finish
  $('#video-player').on('ended', function(){
    video.pause();
    $('#next').fadeIn();
  });

  //additional slider functions
  var imagesAdded=false;
  function slider(){
    if (slideup){
      $('#slider').show().animate({top:'0'},800);
      $('#slider-bck').css('z-index','14').animate({opacity:'1'},600);
    }else if (!slideup){
      $('#slider').animate({top:'100vh'},800,function(){$('#slider').hide();})
      $('#slider-bck').css('z-index','-1').css('opacity','0');
    }
  };
  function slide(slideId){
    var type;
    var addInfo=[];
    for (j=0;j<slides.length;j++){
      var name = slides[j].name;
      if (name===slideId){
        addInfo.push(slides[j]);
        type = slides[j].type;
      }
    };
    if (type === 'article'){
      $("#explore-button .return").show();
      $('#graph, #photo, #audio, #video').hide();
      $('#article').show();
      $('#article .story').html(addInfo[0].text);
    }
    if (type === 'graph'){
      $("#explore-button .return").show();
      $('#article, #photo, #audio, #video').hide();
      $('#graph').show();
      $('#graph').html('').prepend(addInfo[0].static);
      for (var i=0; i<addInfo[0].graphs.length;i++){
        $('#graph').append('<div id="graph'+i+'" class="graph-wrapper"><div class="photo-width">'+addInfo[0].graphs[i].graph+'</div></div>');
        if (addInfo[0].graphs[i].caption){
          $('#graph'+i).append('<div class="caption">'+addInfo[0].graphs[i].caption+'</div>');
        }
        $('#graph0').show();
      }
      buildChart();
      if (addInfo[0].graphs.length > 1){
        $("#explore-button .next-image").show();
        $("#explore-button .return").hide();
      }else if (addInfo[0].graphs.length <= 1){
        $("#explore-button .return").show();
      }
    }
    if (type === 'video'){
      $("#explore-button .return").show();
      $('#article, #photo, #audio, #graph').hide();
      $('#video').show();
      $('#video').html(addInfo[0].text, function(){
        if(isMobile==true){
          var subvideoSrc = $('#subvideo source').attr('src');
          console.log(subvideoSrc);
          $('#subvideo source').attr('src','mobile/'+subvideoSrc);
        }
      });
    }
    if (type === 'audio'){
      $("#explore-button .return").show();
      $('#article, #photo, #video, #graph').hide();
      $('#audio').show();
      $('#audio').html(addInfo[0].text);
    }
    if (type === 'photo'){
      $("#explore-button .return").hide();
      $('#graph, #article, #audio, #video').hide();
      $('#photo').show();
      $(".photo-wrapper").hide();
      $('#photo').html('').prepend(addInfo[0].static)
      for (var i=0; i<addInfo[0].images.length;i++){
        if (addInfo[0].images[i].width){
          $('#photo').append('<div id="image'+i+'" class="photo-wrapper"><div class="photo-width"><img class="image" style="width:'+addInfo[0].images[i].width+'" src="'+addInfo[0].images[i].image+'"></div></div>');
        }else{
          $('#photo').append('<div id="image'+i+'" class="photo-wrapper"><div class="photo-width"><img class="image" src="'+addInfo[0].images[i].image+'"></div></div>');
        }
        if (addInfo[0].images[i].caption){
          $('#image'+i+' .photo-width').append('<div class="caption">'+addInfo[0].images[i].caption+'</div>')
        }
        $('#image0').show();
      }
      if (addInfo[0].images.length > 1){
        $("#explore-button .next-image").show();
        $("#explore-button .return").hide();
      }else if (addInfo[0].images.length <= 1){
        $("#explore-button .return").show();
      }

      /*if (!imagesAdded){
        for (k=1;k<addInfo[0].image.length;k++){
          var thumb = addInfo[0].image[k];
          $('#photo .photo-thumbs').append('<div class="thumb-wrapper"><img src='+thumb+'></div>')
        }
        imagesAdded=true;
      }
      */
    }
  }
  var slideup = false;
  var a=1;
  $('#explore-button .next-image .next-next').click(function(){
    if ($('#photo').length && $('#photo').css('display')!='none'){
      $('#image'+(a-1)).slideUp(800);
      $('#image'+a).show();
      a++;
      console.log(a);
      console.log($('.photo-wrapper').length);
      if ($('#image'+a).length){
        $("#explore-button .next-image").show();
        $("#explore-button .return").hide();
      }else{
        console.log('#image'+a);
        $("#explore-button .next-image").hide();
        $("#explore-button .return").show();
        a=1;
      }
    }else {};
    if ($('#graph').length && $('#graph').css('display')!='none'){
      $('#graph'+(a-1)).slideUp(800);
      $('#graph'+a).show();
      a++
      if ($('#graph'+a).length ){
        $("#explore-button .next-image").show();
        $("#explore-button .return").hide();
      }else{
        $("#explore-button .next-image").hide();
        $("#explore-button .return").show();
        a=1;
      }
    }else {};
  });
  $('.section').click(function(){
    var slidE= $(this).attr('id');
    slideup=true;
    slide(slidE);
    slider();
    video.pause();
    $('#title').fadeOut();
    $('#main #explore-button').show();
    $("#explore-button .explore").hide();
    $('#next').hide();
  });
  $("#explore-button .explore").click(function(){
    var slidE= $(this).attr('id');
    slideup=true;
    slide(slidE);
    slider();
    video.pause();
    $('#main #explore-button').show();
    $("#explore-button .explore").hide();
  });

  $("#explore-button .return, #explore-button .next-image .next-return").click(function(){
    if ($('#subvideo').length){
      var subvideo=document.getElementById("subvideo");
      subvideo.pause();
      subvideo.currentTime = 0;
    }
    stopAudio();
    $('#subvideo')
    $("#explore-button .next-image").hide();
    $("#explore-button .return").hide();
    slideup=false;
    slider();
    buttonChange();
    stopAudio();
    if ($('#video-wrapper').css('opacity')==1){
          playVideos();
    }else{
      $('#title').delay(500).fadeIn();
    }
  });

  $('#video,#slider,#play-pause').click(function(){
    $('#video-wrapper').css('z-index','0').animate({opacity:'1'},800);
    $('#menu #chapters .chp-wrapper').css('right','0px');
  });
  $('#nav .other-button, #next .other-button').click(function(){
      $('#menu .chp-block').css('right','0px');
  })
  function stopAudio(){
    var sound = document.getElementById("audio-player");
    if(sound){
      sound.pause();
      sound.currentTime = 0;
    }
  }
  $('#explore-button .next-image .next-next, #explore-button .explore').hover(function(){
    $(this).children('img').attr('src','images/up-arrow-black.png')
  },function(){
    $(this).children('img').attr('src','images/up-arrow.png')
  });
  $('#explore-button .next-image .next-return, #explore-button .return').hover(function(){
    $(this).children('img').attr('src','images/down-arrow-black.png');
  },function(){
    $(this).children('img').attr('src','images/down-arrow.png')
  });

});
