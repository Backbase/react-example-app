FROM repo.backbase.com/backbase-docker-releases/web-base:2.0.7

COPY ./dist/apps/backbase-react /statics

COPY ./http-conf.conf /nginx-config/server/15-proxy.conf
