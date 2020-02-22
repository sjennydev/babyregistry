if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_babyregistry_app_api', domain: 'your-frontend-domain'
  else
    Rails.application.config.session_store :cookie_store, key: '_babyregistry_app_api' 
  end