var NewUrl = React.createClass({
	render(){
		return (
			<div> 
				<input id='url' name='url' placeholder='Paste a new URL to parse' />
				<p className="small-text">Need http:// or https:// to work properly </p>
				<button id="button" onClick={this.parseUrl}>Submit</button> 
				<p className="not-loading">carregando</p>
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