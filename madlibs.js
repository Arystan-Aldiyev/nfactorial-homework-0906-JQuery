$(document).ready(function () {
  $("#submit-button").click(function (e) {
    e.preventDefault();
    const personName = $('#name').val();
    const character = $('#character').val();
    const adverb = $('#adverb').val();
    const adjective = $('#adjective').val()
    $('#storycontent').attr("class", "loud")
    $('#storycontent').html("Last night I ehad a dream about <b>" + personName + "</b>. <b>" + personName + "</b> was fighting his/her worst enemy --- <b>" + character + "</b>. Fortunately, <b>" + personName + "</b> was <b>" + adjective + "</b>. He/She used it to <b>" + adverb + "</b> win the opponent. That's how <b>" + personName + "</b> saved all of us <b>" + adverb + "</b> and became world's greatest <b>" + adjective + "</b> hero.");
  });
});
