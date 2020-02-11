<template>
  <div class="q-pl-md q-pr-md">
    <q-item :to="list.to" clickable v-ripple>
      <q-item-section>
        <q-item-label>{{ list.name }}</q-item-label>
      </q-item-section>

      <q-item-section side>
        <div class="row">
          <q-btn flat dense round color="red" icon="wifi" />
          <q-btn flat dense round color="red" icon="mdi-alpha-p-box" />
          <q-btn flat dense round color="red" icon="mdi-motorbike" />
        </div>
      </q-item-section>
    </q-item>
    <q-separator inset color="black" />
  </div>
</template>

<script>
export default {
  props: ["list"]
};
</script>

<style lang="scss" scoped>
</style>