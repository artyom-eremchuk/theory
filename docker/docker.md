# Базовые команды Docker

1. Проверка скаченных образов

```
docker images
```

2. Список всех контейнеров (включая остановленные)

```
docker ps -a
```

3. Список запущенных контейнеров

```
docker ps
```

4. Запуск контейнера из образа

```
docker run <image name>
```

5. Остановка контейнера

```
docker stop <container id or name>
```

6. Удаление контейнера

```
docker rm <id or container name>
```

7. Удаление всех остановленных контейнеров

```
docker container prune
```

---

8. Запуск контейнера в режиме detached mode

-d - это флаг, который указывает, чтобы приложение запустилось в фоновом режиме (detached mode). В этом режиме команды не будет отображаться в терминале

```
docker run -d <image name>
```

9. Подключюение к терминалу внутри контейнера (interactive shell (sh))

```
docker exec -it <container id or name> sh
```

10. Установка кастомного имени для контейнера (--name)

P.S. Если не задать имя, docker установит рандомный id

```
docker --name <custom-container-name> <image name>
```
