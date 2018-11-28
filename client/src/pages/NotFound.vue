<template>
  <div class="not-found">
    <img class="not-found--logo" src="404.png" width="470" alt="404">
    <p class="not-found--text">Это был несчастный случай...</p>
    <p class="not-found--text">К сожалению, здесь не нашлось страницы, которую Вы искали.<br>
    Возможно, о ужас, она пропала! А может, ее не было???</p>
  </div>
</template>

<script>
export default {
  title: 'Ой, ошибка 404'
};
</script>

<style>
  body {
    height: 100vh;
    background: linear-gradient(to bottom, #1FA19C, #000000);
    background-attachment: fixed;
  }

  p {
    font-weight: normal;
    font-family: "Arial";
    font-style: normal;
    font-size: 18px;
    color: #ffffff;
  }

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

  .not-found--logo {
    margin: 0 40px 60px 40px;
    min-width: 300px;
  }

  .not-found--text {
    text-align: center;
    margin: 0 40px 20px 40px;
    min-width: 300px;
  }
</style>
