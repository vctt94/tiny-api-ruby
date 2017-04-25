var NewUrl = React.createClass({
	render(){
		return (
			<div> 
				<input id='url' name='url' placeholder='Enter a new URL to parse' />
				<button onClick={this.parseUrl}>Submit</button> 
			</div>
		) 
	},
	parseUrl(){
  		var url = document.getElementById('url').value
  		console.log(url);
		$.ajax({
			url: '/api/v1/parse-url', 
			type: 'POST',
			data: { url: url },
			success: (response) => { 
				alert('saved');
				location.reload();
			} 
		})

	},

	
});