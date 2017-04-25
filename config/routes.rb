Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'home#index'
  namespace :api do
    namespace :v1 do 
    	post "/parse-url" => "parse#parseUrl"
 		get  "/all-urls"  => "parse#allUrls" 
    end
  end
end
