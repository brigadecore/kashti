FROM nginx:stable-alpine

RUN mkdir -p /usr/share/nginx/html/kashti
COPY dist/index.html /usr/share/nginx/html/kashti
COPY dist /usr/share/nginx/html
COPY src/redirect.html /usr/share/nginx/html/index.html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
