<template>
  <div class="auth">
    <div class="auth__header">Авторизация</div>
    <TextBox
        class="auth__text-box"
        v-model="login"
        placeholder="Логин"/>
    <TextBox
        class="auth__text-box"
        v-model="password"
        placeholder="Пароль"
        type="password"/>
    <vButton
        class="auth__button"
        @click="auth">
      Войти
    </vButton>
  </div>
</template>

<script>
import vButton from '../components/vButton';
import TextBox from '../components/TextBox';
import query from '../libs/query';

export default {
  title: 'Авторизация',
  components: {
    vButton,
    TextBox
  },
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    async auth() {
      // Переходим на главную
      this.$emit('changePage', '/');
    }
  }
};
</script>

<style lang="scss">
.auth {
  max-width: 300px;
  margin: 20px auto;

  &__header {
    margin-bottom: 5px;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }

  &__text-box {
    margin: 5px 0;
    border-radius: 5px;
  }

  &__button {
    float: right;
  }
}
</style>
