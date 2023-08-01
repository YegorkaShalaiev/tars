IMAGE_NAME = tars
CONTAINER_NAME = $(IMAGE_NAME)-1

up:
	docker build . -t $(IMAGE_NAME) --target=development
	docker run --rm -v ${PWD}:/app --env-file .env --name $(CONTAINER_NAME) $(IMAGE_NAME)

up-production:
	docker build . -t $(IMAGE_NAME) --target=production
	docker run --rm --env-file .env --name $(CONTAINER_NAME) $(IMAGE_NAME)

down:
	docker stop $(CONTAINER_NAME)
	docker rmi $(IMAGE_NAME)
