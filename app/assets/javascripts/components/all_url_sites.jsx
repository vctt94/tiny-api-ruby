var AllUrls = React.createClass({

	getInitialState() { 
		return { 
			sites: [] 
		} 
	},
	componentDidMount() {
        console.log('Component mounted');
        $.getJSON('/api/v1/site.json', (response) => { 
			this.setState({ sites: response }) 
		}); 
    },
	render(){

		var sites = this.state.sites.map((site) => { 
			return (
				<a href="#" key={site.id} >
					<div className="item-square" onClick={(evt) =>this.parseUrl('www.google.com.br',evt)}>
							<p>title: {site.title}</p>
							<p>Url: {site.url}</p>
					</div>
				</a>

			) 
		});

		return(
			<div className="square-area">
				
				<h1>
					Url History
				</h1> 
				{sites}
			</div> 
		)

	},
	parseUrl(url,event){
		event.preventDefault()
		$.ajax({
			url: '/api/v1/parse-url', 
			type: 'POST',
			data: { url: url },
			success: (response) => { 
				console.log('it worked!', response); 
			} 
		})

	}
});
