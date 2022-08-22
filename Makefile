run:
	docker build . -t testapp.image
	docker run -d -p 3001:3001 --rm --name testapp.cont testapp.image

logs:
	docker logs testapp.cont

stop:
	docker stop testapp.cont

start: 
	npm start 