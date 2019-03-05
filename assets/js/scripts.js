
$(document).ready(function() {
var buttonz = ["charmander", "pikachu", "squirtle", "bulbasaur", "kadabra", "alakazam", "gengar", "articuno", "zapdos", "misty", "moltres"]



renderButtons();

$("#submit").on("click", function(){
    event.preventDefault();
    var pokemonSubmit = $("#pokemon-input").val().trim();
    buttonz = []
    buttonz.push(pokemonSubmit)
    renderButtons()
    console.log(buttonz)
});

$("button").on("click", function(){
    console.log($(this))
});

$(".pokemons").on("click", function() {

    var pokemon = $(this).attr("data-pokemon");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + pokemon + "&api_key=TC8YxFS0KfF3ipGGfSpcwrcbjFivoZ1s&limit=10";
    console.log($(this).attr("data-pokemon"));

$.ajax({
    url: queryURL,
    method: "GET"
  })
    // After the data comes back from the API
    .then(function(response) {
      // Storing an array of results in the results variable
      var results = response.data;
      console.log(results)

      // Looping over every result item
      for (var i = 0; i < results.length; i++) {

          // Only taking action if the photo has an appropriate rating
          if (results[i].rating !== "r") {
          // Creating a div for the gif
          var gifDiv = $("<div>");

          // Storing the result item's rating
           var rating = results[i].rating;

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").html("<strong>"+ "Rating: "  + rating);
          p.css("text-align", "center")
          

          // Creating an image tag
          var pokemonImage = $("<img>");

          // Giving the image tag an src attribute of a proprty pulled off the
          // result item
          pokemonImage.attr("src", results[i].images.fixed_height.url);
          pokemonImage.attr("width", "300px")
          pokemonImage.attr("height","300px")
          gifDiv.css("float", "left")

          // Appending the paragraph and personImage we created to the "gifDiv" div we created
          gifDiv.append(p);
          gifDiv.append(pokemonImage);

          // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
          $("#pokemons").prepend(gifDiv);
           }
      }
        });
    });

  function renderButtons() {
   for(var i = 0; i < buttonz.length; i++) {
    $("#buttons").append("<button data-pokemon=" + buttonz[i] + " class=" +" pokemons"+ ">"+ buttonz[i] + "</button>")
        }
  }

});