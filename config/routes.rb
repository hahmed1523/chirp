# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                 api_users GET    /api/users(.:format)                                                                     api/users#index {:format=>:json}
#                           POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#                  api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>:json}
#                           PATCH  /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#                           PUT    /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#                           DELETE /api/users/:id(.:format)                                                                 api/users#destroy {:format=>:json}
#           new_api_session GET    /api/session/new(.:format)                                                               api/sessions#new {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#             api_chirpings GET    /api/chirpings(.:format)                                                                 api/chirpings#index {:format=>:json}
#                           POST   /api/chirpings(.:format)                                                                 api/chirpings#create {:format=>:json}
#          new_api_chirping GET    /api/chirpings/new(.:format)                                                             api/chirpings#new {:format=>:json}
#         edit_api_chirping GET    /api/chirpings/:id/edit(.:format)                                                        api/chirpings#edit {:format=>:json}
#              api_chirping GET    /api/chirpings/:id(.:format)                                                             api/chirpings#show {:format=>:json}
#                           PATCH  /api/chirpings/:id(.:format)                                                             api/chirpings#update {:format=>:json}
#                           PUT    /api/chirpings/:id(.:format)                                                             api/chirpings#update {:format=>:json}
#                           DELETE /api/chirpings/:id(.:format)                                                             api/chirpings#destroy {:format=>:json}
#                 api_likes POST   /api/likes(.:format)                                                                     api/likes#create {:format=>:json}
#                           DELETE /api/likes(.:format)                                                                     api/likes#destroy {:format=>:json}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :update, :show, :index, :destroy]
    resource :session, only: [:create, :destroy, :new]
    resources :chirpings 
    resources :likes, only: [:create]
    delete '/likes', to: 'likes#destroy'
    resources :follows, only: [:create]
    delete '/follows', to: 'follows#destroy'

  end
  
  root to: 'static_pages#root'
end
