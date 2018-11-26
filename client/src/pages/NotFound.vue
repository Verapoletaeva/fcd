<template>
  <div class="not-found">
    <img class="not-found--logo" src="404.png" width="647" alt="404">
    <p class="not-found--text">Это был несчастный случай...</p>
    <p class="not-found--text">К сожалению, здесь не нашлось страницы, которую Вы искали.<br>
    Возможно, о ужас, она пропала! А может, ее не было???</p>
  </div>
</template>

<script>
export default {};
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
    color: #ffffff;
  }

  .not-found {
    display: flex;
    flex-wrap: wrap;
    max-width: 750px;
    justify-content: center;
    align-items: center;
    padding: auto auto;
    margin: 0 auto;
  }

  .not-found--logo {
    margin: 80px 20px 60px 20px;
    min-width: 300px;
  }

  .not-found--text {
    font-size: 24px;
    text-align: center;
    margin: 0 20px 20px 20px;
    min-width: 300px;
  }
</style>
