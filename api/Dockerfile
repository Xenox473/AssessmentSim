#docker_app/back_end_app/Dockerfile

# Dockerfile

# Base image
FROM ruby:3.2.0

# Install dependencies
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

WORKDIR /api
COPY . .
COPY Gemfile /api/Gemfile
COPY Gemfile.lock /api/Gemfile.lock
RUN bundle install

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Configure the main process to run when running the image
CMD ["rails", "server", "-b", "0.0.0.0"]