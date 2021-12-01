FROM nginx
COPY static-html-directory /usr/share/nginx/html
EXPOSE 3000
ENV API_URL=https://localhost:8000/api/
WORKDIR /usr/share/nginx/html
RUN ls
ENTRYPOINT [ "/usr/sbin/nginx" ]
CMD [ "-g, "daemon off" ]