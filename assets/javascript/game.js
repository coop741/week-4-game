<!-- JAVASCRIPT  -->
window.onload = function() {
  var targetNumber = Math.floor(Math.random() * 101) + 19;
  $("#number-to-guess").text(targetNumber);
  var counter = 0;

  // new game boolean
  var newGame = false;

  // We begin by expanding our array to include four options.
  var optionOne = Math.floor(Math.random() * 12) + 1;
  var optionTwo = Math.floor(Math.random() * 12) + 1;
  var optionThree = Math.floor(Math.random() * 12) + 1;
  var optionFour = Math.floor(Math.random() * 12) + 1;

  var numberOptions = [optionOne, optionTwo, optionThree, optionFour];

  var createImage = function(src, title) {
    var img   = new Image();
    img.src   = src;
    img.title = title;
    return img; 
  };

  // array of images
  var images = [];

  // push four images to the array
  images.push(createImage("assets/images/blue.png", "Blue Crystal"));
  images.push(createImage("assets/images/green.png", "Green Crystal"));
  images.push(createImage("assets/images/red.png", "Red Crystal"));
  images.push(createImage("assets/images/yellow.png", "Yellow Crystal"));


  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");
    imageCrystal.addClass("crystal-image" + (i+1));

    imageCrystal.attr("number", (i+1));

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", images[i].src);

    // Each imageCrystal will be given a data attribute called data-crystal-value.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystal-value", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }

  function changeCrystalValues(arr) {
    for (var i = 0; i < arr.length; i++) {
      $(".crystal-image" + (i+1)).attr("data-crystal-value", arr[i]);
    }
  }


  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {
  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystal-value") allows us to grab the value out of the "data-crystal-value" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
  var crystalValue = ($(this).attr("data-crystal-value"));
  crystalValue = parseInt(crystalValue);

  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  $("#total-score").html(counter);
  if (counter === targetNumber) {
    alert("You win!");
    newGame = true;
  }
  else if (counter >= targetNumber) {
    alert("You lose!!");
    newGame = true;
  }
  // Reset all global variables
  if(newGame) {
    counter = 0;
    $("#total-score").html(counter);
    targetNumber = Math.floor(Math.random() * 101) + 19;
    $("#number-to-guess").text(targetNumber);
    optionOne = Math.floor(Math.random() * 12) + 1;
    optionTwo = Math.floor(Math.random() * 12) + 1;
    optionThree = Math.floor(Math.random() * 12) + 1;
    optionFour = Math.floor(Math.random() * 12) + 1;
    console.log(optionOne, optionTwo, optionThree, optionFour);
    var arr = [optionOne, optionTwo, optionThree, optionFour];
    changeCrystalValues(arr);
    newGame = false;
  }

});
};