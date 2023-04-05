<template>
  <div class="overlay" v-show="isShowOverlay">
    <p
      class="enter"
      :style="{
        opacity: Number(isShowEnter),
        transition: 'all .2s ease-in-out'
      }"
    >
      Enter
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = withDefaults(
  defineProps<{ defaultGoToPagePath?: string }>(),
  {
    defaultGoToPagePath: '/examples/markdown-examples.html'
  }
)

const isShowEnter = ref(true)
const isShowOverlay = ref(true)

const keyDownEvent = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    const host = window.location.origin + props.defaultGoToPagePath
    window.open(host, '_self')
  }
}

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      isShowEnter.value = false
      setTimeout(() => {
        isShowOverlay.value = false
      }, 1000)
    }, 2000)

    window.addEventListener('keydown', keyDownEvent)
  })
})

onBeforeUnmount(() => {
  setTimeout(() => {
    window.removeEventListener('keydown', keyDownEvent)
  }, 2000)
})
</script>

<style lang="scss">
.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: top-form-enter 0.5s ease-in-out;
  width: 10%;
  height: 10vh !important;
  text-align: center;
  line-height: 10vh;
  .enter {
    color: #f9f9f9;
    font-size: 34px;
    font-family: 'Comic Sans MS', cursive, sans-serif;
  }
}

@keyframes top-form-enter {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 50%;
    opacity: 1;
  }
}
</style>
