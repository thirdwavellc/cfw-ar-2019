# config valid for current version and patch releases of Capistrano
lock '~> 3.11.2'

set :application, 'cfw-ar-2019'
set :repo_url, 'git@github.com:thirdwavellc/cfw-ar-2019.git'
set :branch, 'master'
set :deploy_to, '/var/www/cfw-ar-2019'
