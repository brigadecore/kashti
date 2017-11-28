FROM nginx:stable-alpine

RUN mkdir -p /usr/share/nginx/html/brigade-ui
COPY dist/index.html /usr/share/nginx/html/brigade-ui
COPY dist/assets/  /usr/share/nginx/html/brigade-ui/assets/
COPY dist/templates/  /usr/share/nginx/html/brigade-ui/templates/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
