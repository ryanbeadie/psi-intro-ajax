console.log('script src');

$(document).ready(onReady);


function onReady() {
  console.log('in onReady');

  // request data from omdb on the jaws
  // when response comes back from the server
  // run success function which will log response
  $.ajax({
    url: 'http://www.omdbapi.com/?t=jaws',
    success: function(response) {
      console.log('this is the response ->', response);
      console.log('movie title ->', response.Title);
      // console.log('movie actors ->', response.Actors);
      // put title on the DOM
      $('#movie-holder').append('<div class="movie-title">' + response.Title + '</div>');
    }
    // error: function(response) {
    //   console.log('error case: response ->', response);
    // }
  });
}
