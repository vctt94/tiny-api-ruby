#site_controller.rb

class Api::V1::SiteController < Api::V1::BaseController

	def index
		respond_with SiteParsed.all
	end
end