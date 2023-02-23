<script setup lang="ts">
import { ref } from 'vue'
import http from '@/utils/http'

defineProps<{ msg: string }>()


const handleGet = async () => {
   const res = await http.get('/user')
   console.log(res)
}
</script>

<template>
  <div>
    <button @click="handleGet">发起get请求</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
