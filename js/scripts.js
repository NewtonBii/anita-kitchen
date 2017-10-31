
$(document).ready(function () {
  $('form#mail').submit(function (event) {
    event.preventDefault();
    alert("Congratulations! You Have Succesfully been added to our mailing list.");
  });
  $('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});
