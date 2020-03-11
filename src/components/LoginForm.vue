<template>
  <div></div>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      this.$emit('formSubmitted', { name: 'Adam Jahr' })
    }
  }
}
</script>
