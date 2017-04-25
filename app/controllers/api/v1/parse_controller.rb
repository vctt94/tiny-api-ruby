require 'open-uri'
require 'json'

class Api::V1::ParseController < Api::V1::BaseController

	def allUrls
		respond_with SiteParsed.all
	end
	
	def parseUrl

		url = params["url"]

		doc = Nokogiri::HTML(open(url))

		h1 = doc.search('h1').map(&:text)
		h2 = doc.search('h2').map(&:text)
		h3 = doc.search('h3').map(&:text)

		nodeset = doc.css('a[href]')
		links = nodeset.map {|element| element["href"]}

		stringJsonH1 = JSON.generate(h1)
		stringJsonH2 = JSON.generate(h2)
		stringJsonH3 = JSON.generate(h3)
		stringJsonLinks  = JSON.generate(links)

		SiteParsed.create(
			:url => url,
			:h1  => stringJsonH1,
			:h2  => stringJsonH2,
			:h3  => stringJsonH3,
			:a   => stringJsonLinks
		)

		render :json => {h1:h1,h2:h2,h3:h3, a: links}
	end

end