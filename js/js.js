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

			    $('#images').append('<article><a href="'+link+'" target="_blank" title="View at Flickr"><img alt="" src="'+imgScr+'" /></a><span>'+attribute+'</span><i class="fa fa-gift"></i></article>');
			});
		}, error: function(){
			alert('Something went wrong, please try again.');
		}
	});

	$('body').on('mouseenter', 'img',function(){
		$(this).parent().siblings('i').addClass('show');
	}).on('mouseleave' , 'img', function(){
		$(this).parent().siblings('i').removeClass('show');
	});
});