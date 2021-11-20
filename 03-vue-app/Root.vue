<template>
  <div>{{ pepe }} is mounted!</div>
</template>
<script>
export default {
  props: {
    name: String,
    pepe: String,
  },
};
</script>
