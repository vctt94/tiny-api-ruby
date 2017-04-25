require 'open-uri'

class Api::V1::ParseController < Api::V1::BaseController

	def parseUrl
		url = params["url"]
		doc = Nokogiri::HTML(open(url))
		h1 = doc.search('h1').map(&:text)
		h2 = doc.search('h2').map(&:text)
		h3 = doc.search('h3').map(&:text)

		nodeset = doc.css('a[href]')
		links = nodeset.map {|element| element["href"]}

		render :json => {h1:h1,h2:h2,h3:h3, a: links}
	end
end