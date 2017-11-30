FROM nginx:stable-alpine

RUN mkdir -p /usr/share/nginx/html/kashti
COPY dist/index.html /usr/share/nginx/html/kashti
COPY dist/assets/  /usr/share/nginx/html/kashti/assets/
COPY dist/templates/  /usr/share/nginx/html/kashti/templates/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
