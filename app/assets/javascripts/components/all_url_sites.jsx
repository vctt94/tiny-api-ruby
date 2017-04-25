var AllUrls = React.createClass({

	getInitialState() { 
		return { 
			sites: [] 
		} 
	},
	componentDidMount() {
        $.getJSON('/api/v1/all-urls.json', (response) => { 
			this.setState({ sites: response }) 
		}); 
    },
	render(){

		var sites = this.state.sites.map((site) => { 
			return (
				<a href="#" key={site.id} >
					<div className="item-square">
							<p >Url: {site.url}</p>
							<p>H1: {JSON.parse(site.h1)}</p>
							<p>H2: {JSON.parse(site.h2)}</p>
							<p>H3: {JSON.parse(site.h3)}</p>
							<p>Links: {JSON.parse(site.a)}</p>
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
	
});
