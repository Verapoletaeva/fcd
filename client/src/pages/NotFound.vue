<template>
  <div class="not-found">
    <img class="not-found__logo" src="../../public/404.png" width="470" alt="404">
    <p class="not-found__text">Это был несчастный случай...</p>
    <p class="not-found__text">К сожалению, здесь не нашлось страницы, которую Вы искали.<br>
    Возможно, о ужас, она пропала! А может, ее не было???</p>
  </div>
</template>

<script>
export default {
  title: 'Ой, ошибка 404'
};
</script>

<style>
.not-found {
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  max-width: 750px;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
}

.not-found__logo {
  margin: 0 40px 60px 40px;
  min-width: 300px;
}

.not-found__text {
  min-width: 300px;
  margin: 0 40px 20px 40px;
  font: 18px "Arial";
  color: #ffffff;
  text-align: center;
}
</style>
