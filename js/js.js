$(document).ready(function()
{
	$.ajax({
		type: 'POST',
		url: 'index.php',
		data: {flickr:true},
		dataType: 'json',
		success: function(data){
			$.each(data.entry, function(i,item){
		    
			    var imgScr = item.link[1]['@attributes'].href;
			    var link = item.link[0]['@attributes'].href;
			    var attribute = item.title+' by '+item.author.name;

			    $('#images').append('<a href="'+link+'" target="_blank" title="View at Flickr"><article style="background-image: url('+imgScr+');"><span>'+attribute+'</span><i class="fa fa-gift"></i></article></a>');
			});
		}, error: function(){
			alert('Something went wrong, please try again.');
		}
	});

	$('body').on('mouseenter', 'article',function(){
		$(this).children('i').addClass('show');
	}).on('mouseleave' , 'article', function(){
		$(this).children('i').removeClass('show');
	});
});