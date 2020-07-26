<template>
  <button
    class="base-button"
  >
    {{amount}}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  computed: {
    amount: function() {
      return 20;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.base-button {
  padding: 8px 16px;
}
</style>
