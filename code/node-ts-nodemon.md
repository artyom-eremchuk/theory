1. Инициализация проекта

```
npm init -y
```

2. Установка зависимостей

```
npm i --save-dev typescript nodemon ts-node @types/node
```

3. Инициализация tsconfig.json файла

```
npx tsc --init
```

4. Создать файл nodemon.json в корневой директории

```
{
  "ignore": [".git", "node_modules", "dist"]
  ,
  // в какой директории смотреть файлы
  "watch": [ "src" ],

  // какие файлы смотреть
  "ext": "ts",
}
```

5. Добавить скрипты в package.json

```
{
  "start:prod": "npm run build && node dist/index.js",
  "dev": "nodemon --exec ts-node src/index.ts",
  "build": "npx tsc"
}
```
