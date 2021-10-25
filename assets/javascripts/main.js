
// A $( document ).ready() block.
$( document ).ready(function() {
  $('#trailerModal').on('shown.bs.modal', function (event) {
      $('#video-1')[0].play();
    });
    $('#trailerModal').on('hidden.bs.modal', function (event) {
      $('#video-1')[0].pause();
    });
});
