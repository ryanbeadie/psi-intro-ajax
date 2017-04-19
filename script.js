console.log('script src');

$(document).ready(onReady);


function onReady() {
  console.log('in onReady');

  // request data from omdb on the jaws
  // when response comes back from the server
  // run success function which will log response
  $.ajax({
    url: 'http://www.omdbapi.com/?t=serpico',
    success: function(response) {
      console.log('this is the response ->', response);
      console.log('movie title ->', response.Poster);
      // console.log('movie actors ->', response.Actors);
      // put title on the DOM

      //trying to append poster img to DOM
      //$('#movie-poster').prepend('<img id="theImg" src="theImg.png" />')
      $('#movie-poster').append('<div class="movie-poster">'  +'<img src="'+ response.Poster +'">' + '</div>');
      //$('#movie-poster').append('<div class="movie-poster">'  + response.Poster + '</div>');
      $('#movie-holder').append('<div class="movie-title">' + 'Title: ' + response.Title + '</div>');
      $('#movie-holder').append('<div class="movie-actors">' + 'Actors: ' + response.Actors + '</div>');
      $('#movie-holder').append('<div class="movie-director">' + 'Director: ' + response.Director + '</div>');
      $('#movie-holder').append('<div class="movie-awards">' + 'Awards: ' + response.Awards + '</div>');
      //want to make the website a hyperlink
      $('#movie-holder').append('<div class="movie-website">' + 'Website: ' +  response.Website + '</div>');
    }
    // error: function(response)
    //   console.log('error case: response ->', response);
    // }
  });
}
