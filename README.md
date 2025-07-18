# React HW1 App

## Опис
Цей застосунок демонструє просту роботу з React, стилізацію компонентів та зміну фону сторінки за допомогою кнопки. При натисканні на кнопку фон змінюється на випадкове зображення з локальної папки.

## Основні можливості
- Центрована велика кнопка для зміни фону
- Фон не повторюється двічі підряд
- Використання локальних зображень
- Сучасний адаптивний дизайн

## Структура проекту
react-hw1-app/
├── public/
│   └── vite.svg
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   ├── assets/
│   │   ├── react.svg
│   │   └── img/
│   │       ├── pic1.jpg
│   │       ├── pic2.jpg
│   │       ├── pic3.jpg
│   │       ├── pic4.jpg
│   │       └── pic5.jpg
│   └── components/
│       └── Button.tsx
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md

- `src/App.tsx` — головний компонент застосунку
- `src/components/Button.tsx` — компонент кнопки
- `src/assets/img/` — папка з локальними зображеннями для фону
- `src/index.css` — глобальні стилі

## Запуск проекту

1. Встановіть залежності:
   npm install

2. Запустіть застосунок:
   npm run dev


