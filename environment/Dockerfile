FROM --platform=linux/amd64 node:20.16.0-slim as common
ARG USER=nt-solutions-front1
ARG USER_ID=1000
ARG GROUPD_ID=1000

ENV PORT=3000
ENV HOST=0.0.0.0
ENV QDQLYTICS=LOCALHOST
ENV QDQLYTICS_TOKEN=TEST

RUN echo uid $USER_ID gid $GROUPD_ID user $USER

RUN groupadd -g $GROUPD_ID -o $USER
RUN useradd -m -u $USER_ID -g $GROUPD_ID -o -s /bin/bash $USER

RUN mkdir /code
RUN chown $USER:$GROUPD_ID /code

USER $USER

WORKDIR /code

COPY --chown=$USER:GROUPD_ID . .
#LOCAL OR DEVELOPMENT BUILD
FROM common AS base-stage
RUN npm install
CMD npm run dev
#PROD OR PRE BUILD
FROM common as builder
RUN npm ci
RUN npm run build
#PROD OR PRE FINAL
FROM --platform=linux/amd64 node:20.16.0-slim as final-stage
COPY --from=builder /code/.output ./
CMD node ./server/index.mjs

