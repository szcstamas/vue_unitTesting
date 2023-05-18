<template>
  <section>
      <div class="home">
        <h1>This is the home of practicing testing.</h1>
        <p>Enjoy!</p>
        <MessageDisplay />
      </div>
  </section>
</template>

<script>
// @ is an alias to /src
import MessageDisplay from '@/components/MessageDisplay.vue';

export default {
  components: {
    MessageDisplay,
  }
}
</script>

<style lang="css">
</style>