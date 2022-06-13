$(document).ready(function () {
  $("#calculate-button").click(function (e) {
    e.preventDefault();
    const imWidth = $('#img_width').val();
    const imHeight = $('#img_height').val();
    let colors = $('#colors').val();
    let counter = 1;
    while (colors > 2) {
      colors /= 2;
      counter += 1;
    }
    let size = imHeight * imWidth * counter / 8;
    size /= 1024;
    $('#filesize').attr("class", "loud")
    $('#filesize').html("File is " + size + " kB")
  });
});