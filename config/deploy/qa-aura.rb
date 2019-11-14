set :branch, 'qa'

server 'static01.qa.aura.chicago.thirdwave.3whst.com', user: 'deploy', roles: %w{web}
server 'static02.qa.aura.chicago.thirdwave.3whst.com', user: 'deploy', roles: %w{web}
