$(document).ready(function() {
  var port1P = $(".port1 p");
  var port2P = $(".port2 p");
  var port3P = $(".port3 p");
  var port4P = $(".port4 p");
  var port5P = $(".port5 p");
  var port6P = $(".port6 p");
  var port7P = $(".port7 p");
  var port8P = $(".port8 p");
  $(".port1").hover(function() {
    port1P.fadeIn(900)
    $(".port1").mouseout(function() {
      port1P.fadeOut(100);
    })
  })

  $(".port2").hover(function() {
    port2P.fadeIn(900)
    $(".port2").mouseout(function() {
      port2P.fadeOut(100);
    })
  })

  $(".port3").hover(function() {
    port3P.fadeIn(900)
    $(".port3").mouseout(function() {
      port3P.fadeOut(100);
    })
  })

  $(".port4").hover(function() {
    port4P.fadeIn(900)
    $(".port4").mouseout(function() {
      port4P.fadeOut(100);
    })
  })

  $(".port5").hover(function() {
    port5P.fadeIn(900)
    $(".port5").mouseout(function() {
      port5P.fadeOut(100);
    })
  })

  $(".port6").hover(function() {
    port6P.fadeIn(900)
    $(".port6").mouseout(function() {
      port6P.fadeOut(100);
    })
  })

  $(".port7").hover(function() {
    port7P.fadeIn(900)
    $(".port7").mouseout(function() {
      port7P.fadeOut(100);
    })
  })

  $(".port8").hover(function() {
    port8P.fadeIn(900)
    $(".port8").mouseout(function() {
      port8P.fadeOut(100);
    })
  })

  // What we do

  var desImg = $(".des-img");
  var desText = $("#design");

  desImg.click(function() {
    desImg.toggle()
    desText.toggle();
  })
  desText.click(function() {
    desText.toggle();
    desImg.toggle()
  })

  var devImg = $(".dev-img");
  var devText = $("#development");

  devImg.click(function() {
    devImg.toggle()
    devText.toggle();
  })
  devText.click(function() {
    devText.toggle();
    devImg.toggle()
  })

  var proImg = $(".pro-img");
  var proText = $("#product-management")

  proImg.click(function() {
    proImg.toggle()
    proText.toggle();
  })
  proText.click(function() {
    proText.toggle();
    proImg.toggle()
  })

  //form
  var email = []
  $("form#target").submit(function(event) {
    if ($(".name").val() === "") {
      alert("Whats your name?");
      return false;
    } else {
      email.push($(".name").val());
    }
    if ($(".email").val() === "") {
      alert("Whats your email?");
      return false;
    } else {
      email.push($(".email").val());
    }
    if ($("textarea").val() === "" && $("textarea").val().length < 20) {
      alert("Message is to short")
      return false;
    } else {
      email.push($("textarea").val())
    }
    event.preventDefault()
    alert("Thank you! Your email was recieved")

  })
});
