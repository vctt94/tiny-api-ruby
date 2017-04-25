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
			var h1 = JSON.parse(site.h1)
			liH1 = h1.map(value=>{
				return(
					<li >{value}</li>
				)				
			})
			var h2 = JSON.parse(site.h2)
			liH2 = h2.map(value=>{
				return(
					<li >{value}</li>
				)				
			})
			var h3 = JSON.parse(site.h3)
			liH3 = h3.map(value=>{
				return(
					<li >{value}</li>
				)				
			})
			var links = JSON.parse(site.a)
			if(links !== null)
				liA = links.map(value=>{
					return(
						<li >{value}</li>
					)				
				})
			return (
				<a href="#" key={site.id} >
					<div className="item-square">
							<p >Url: {site.url}</p>
							<p>H1: {liH1}</p>
							<p>H2: {liH2}</p>
							<p>H3: {liH3}</p>
							<p>Links: {liA}</p>
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
