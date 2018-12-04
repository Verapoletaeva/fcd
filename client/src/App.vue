<template>
  <div id="app">
    <component
        :is="page"
        @changePage="goTo($event)"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      page: null
    };
  },
  methods: {
    // Клиентский роутинг
    // Преобразуем путь в название компонента
    // Vue-компоненты именуются с заглавной буквы
    goTo(target, newState = true) {
      let pageName = target.slice(1).toLowerCase() || 'index';
      pageName = pageName[0].toUpperCase() + pageName.slice(1);

      // Если страница не найдена, показываем шаблон страницы 404
      let Page;
      try {
        Page = require(`./pages/${pageName}.vue`).default;
      } catch (err) {
        Page = require('./pages/NotFound.vue').default;
      }

      if (newState) {
        history.pushState(null, Page.title || 'Free Cash Desk', target);
      }
      this.page = Page;
    }
  },
  beforeMount() {
    // Навешиваем обработчик на переходы вперед/назад по истории
    window.onpopstate = () => this.goTo(window.location.pathname, false);
    // Загружаем информацию о странице при первой загрузке
    this.goTo(window.location.pathname);
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

body {
  background: linear-gradient(to bottom, #1FA19C, #000000);
  background-attachment: fixed;
}
</style>
