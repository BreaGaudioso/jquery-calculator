$(function() {
	console.log( "ready!" );

var num;;
var fullNum = '';
	$('.buttons').on('click', 'span', function(event) {
  	num = event.target.innerText;
  	numId= event.target.id;
  	numClass=event.target.className;
  	fullNum = $('#screen').html();
  	console.log(numId)
  	console.log(numClass)
  	if (numId === 'cancel') {
			$('#screen').html('');
  	} else if (numId === 'calc'){
  		$('#screen').html(eval(fullNum));
  	} else if (numClass === 'operator'){
			$('#screen').append(numId)
  	} else { 
  		$('#screen').append(num)
  	}
  });
});
