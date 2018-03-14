$('#gform').submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: "https://docs.google.com/a/blakedavies.net/forms/d/e/1FAIpQLSdp0kViYQ794Qs97Nzae-umSKstqO9cbLjqtVl7WjwdAXZK-g/formResponse",
		data: $(this).serialize(),
		type: "POST",
		dataType: "xml",
		success: function(data) {
			console.log('Submission successful');
		},
		error: function(xhr, status, error) {
			console.log('Submission failed: ' + error);
		}
	});
});

$('#gform').on('submit', function(e) {
	$('#gform *').fadeOut(0);
	$('#contact-box *').fadeOut(0);
	$('#gform').prepend(
		'<div class="thank-you-box"><div><img src="img/checkmark_icon.png" alt="Clints Skips"/><p class="thank-you">Thanks for your enquiry!</p><p class="thank-you">We will get back to you as soon as possible, but if your enquiry is urgent you can call Clint directly on 0410 461 001.</p></div></div>'
	);
});
