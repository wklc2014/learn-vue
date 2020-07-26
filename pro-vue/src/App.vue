<template>
    <section>
      <img alt="Vue logo" src="./assets/logo.png">
      <div>
          <ul class="nav">
              <li>
                  <router-link to="/foo">Go to Foo</router-link>
              </li>
              <li>
                  <router-link to="/bar">Go to Bar</router-link>
              </li>
          </ul>
      </div>
      <router-view></router-view>
      <level-1></level-1>
    </section>
</template>
<script>
import BaseButton from './components/base-button.vue';
import Level1 from './components/level-1.vue';
export default {
    name: 'App',
    components: {
        BaseButton,
        Level1,
    },
}
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.nav {
    list-style: none;
    display: flex;

    >li {
        list-style: none;
        line-height: 30px;
        padding: 0 16px;

        >a {
            color: #333;
            text-decoration: none;

            &:hover {
                color: #f00;
                text-decoration: underline;
            }
        }
    }
}
</style>
