$(document).ready(function() {
    //collapse
    $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $(".col-left-fixed").toggleClass("toggled");
    $(".main").toggleClass("toggled");
  });

    // Opens the sidebar menu
    $(".menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Closes the sidebar menu
    $(function(){
        $('.shadow').hide();
        $('.menu-toggle').click(function(){
            $('.shadow').show();
            
        });
    });
    $(function(){
        $('#menu-close').click(function(){
            $('.shadow').hide();
        });
    });
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    $(".shadow").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
        $('.shadow').hide();
    });
    $("#logo-side").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
        $('.shadow').hide();
    });

    // Opens the sign-in & sign-up
    $(".bt-sign-up").click(function(e) {
        e.preventDefault();
        $("#sign-up").show();
    });

    // Closes the sign-in & sign-up
    $(".bt-close").click(function(e) {
        e.preventDefault();
        $("#sign-up").hide();
    });

    // Opens the for got password
    $(function(){
        $('.forgot-pass').click(function(){
            $('.dialog-sign-up').hide();
            $("#forgot-pass-wr").show();
        });
    });

    // Closes the for got password
    $(".bt-close-forgot-pass").click(function(e) {
        e.preventDefault();
        $("#forgot-pass-wr").hide();
        $('.dialog-sign-up').show();
    });

    // Opens the dialog confirm sign up
    $(function(){
        $('#bt-sign-up').click(function(){
            $('.dialog-sign-up').hide();
            $("#confirm").show();
        });
    });

    // Closes the dialog confirm sign up
    $(".bt-close-forgot-pass").click(function(e) {
        e.preventDefault();
        $("#confirm").hide();
        $('.dialog-sign-up').show();
    });

    // Tooltips
    $(function () {
    $('[data-toggle="tooltip"]').tooltip()
    })

    // input label up & down
    $('#input-up').blur(function() {
        $('.label-1').removeClass("up");
      })
      $('#input-up').focus(function() {
        $(".label-1").addClass("up");
      });
    $('#input-up2').blur(function() {
        $('.label-2').removeClass("up");
      })
      $('#input-up2').focus(function() {
        $(".label-2").addClass("up");
      });
    $('#input-up3').blur(function() {
        $('.label-3').removeClass("up");
      })
      $('#input-up3').focus(function() {
        $(".label-3").addClass("up");
      });
    $('#input-up4').blur(function() {
        $('.label-4').removeClass("up");
      })
      $('#input-up4').focus(function() {
        $(".label-4").addClass("up");
      });
    $('#input-up5').blur(function() {
        $('.label-5').removeClass("up");
      })
      $('#input-up5').focus(function() {
        $(".label-5").addClass("up");
      });
    $('#input-up6').blur(function() {
        $('.label-6').removeClass("up");
      })
      $('#input-up6').focus(function() {
        $(".label-6").addClass("up");
      });        
})
;