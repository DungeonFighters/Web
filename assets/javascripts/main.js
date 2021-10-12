
// A $( document ).ready() block.
$( document ).ready(function() {
  $("#trailerModal").on('hidden.bs.modal', function (e) {
    $("#trailerModal iframe").attr("src", $("#trailerModal iframe").attr("src"));
  });
});
