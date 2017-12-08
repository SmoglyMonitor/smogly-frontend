FROM node:9.2.0
ENV NODE_ENV=development
ENV DEFAULT_UID=1000
ENV DEFAULT_GID=1000
ENV HOST=0.0.0.0
ENV PORT=8081

RUN apt-get update && apt-get install -y --no-install-recommends \
# apt requirements
    ## docker-entrypoint.sh to run as docker host user
    sudo \
    && rm -rf /var/lib/apt/lists/*

# enable sudo w/o password for our node user (defined by docker node image)
RUN echo "node ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/node

WORKDIR /code
ADD ./docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]
EXPOSE "8081"
CMD ["npm", "run", "start"]
