$(document).ready(function() {
  var carousel = $(".team-carousel");
  var cardsPerPage = 3; // Number of cards to show per page

  function showCards() {
    var viewportWidth = $(window).width();
    var cardsToShow = cardsPerPage;

    if (viewportWidth < 768) {
      cardsToShow = 1; // Show 1 card on mobile size screen
    } else if (viewportWidth < 992) {
      cardsToShow = 2; // Show 2 cards on tablet size screen
    }

    var cardWidth = 100 / cardsToShow;
    carousel.css("transform", "translateX(0)");
    carousel.css("width", (cardsToShow * 100) + "%");
    $(".team-card").css("flex-basis", cardWidth + "%");
  }

  function shiftCarousel(direction) {
    var cardWidth = 100 / cardsPerPage;
    var transformValue = direction === "next" ? "-" + cardWidth + "%" : cardWidth + "%";
    carousel.css("transform", "translateX(" + transformValue + ")");
  }

  showCards(); // Initial card display based on viewport size

  $(window).resize(function() {
    showCards(); // Adjust card display on window resize
  });

  $(".prev-btn").click(function() {
    shiftCarousel("prev"); // Shift carousel to show previous cards
  });

  $(".next-btn").click(function() {
    shiftCarousel("next"); // Shift carousel to show next cards
  });
});
