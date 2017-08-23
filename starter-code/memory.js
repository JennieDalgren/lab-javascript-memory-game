//******************************************************************
// Game Logic
//******************************************************************
var MemoryGame = function() {
  this.cards = [
  		{ name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
  		{ name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
      { name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
      { name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
      { name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
  		{ name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
  	];
    this.selectedCards = [];
    this.pairsClicked = 0;
    this.correctPairs = 0;
};


// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;


$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    name="'       + pic.name +  '">';
    html += '</div>';
    html += '</div>';
  });

    // Add all the divs to the HTML
    document.getElementById('memory_board').innerHTML = html;



    $(".front").hide();


    $('.back').on('click', function() {
      var name = $(this).attr('name');
      console.log(name);
      $(this).hide();
      $(this).siblings().show();

      console.log(memoryGame.selectedCards);

      if (memoryGame.selectedCards.length === 0){
        memoryGame.selectedCards.push(name);
        $(".front,.back").addClass('blocked');

      } else if (memoryGame.selectedCards.length === 1){
        memoryGame.selectedCards.push(name);
        console.log('two!');
        // $('div').toggleClass('blocked'); ///How to make it so can't click more than two cards.
        checkCards();
      }
    });

    //Check if the cards matches
    function checkCards() {
      setTimeout(function() {
        if (memoryGame.selectedCards[0] === memoryGame.selectedCards[1]) {
          console.log('match!');
          pairScore();
          pairsClickedCount();
          checkEndGame();
        } else {
          memoryGame.selectedCards.forEach(function (cardName) {
            console.log($('[name="' + cardName + '"].front'));
            $('[name="' + cardName + '"].back').show();
            $('[name="' + cardName + '"].front').hide();
          });
          pairsClickedCount();
        }
        memoryGame.selectedCards = [];
      }, 1000);
    }

    function pairScore(){
        memoryGame.correctPairs++ ;
        console.log("new score: " + memoryGame.correctPairs);
        $("#pairs_correct").html(memoryGame.correctPairs);
      }

    function pairsClickedCount(){
        memoryGame.pairsClicked++ ;
        console.log("pairs clickes: " + memoryGame.pairsClicked);
        $("#pairs_clicked").html(memoryGame.pairsClicked);
      }

    function checkEndGame() {
      if (memoryGame.correctPairs === 12){
        alert("WINNING! You found all the pairs in just " + memoryGame.pairsClicked + " attempts.");
      }

    }













});
