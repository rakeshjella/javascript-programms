<script setup>
import { watch } from 'vue';
import { watchEffect } from 'vue';
import { onMounted } from 'vue';
import { computed, ref } from 'vue'
const firstDataId = ref(1);
const firstUserVal = ref('')
const fifthUserVal = ref('');
const data=ref('');
const count = ref(0);
const numbers = ref([1, 2, 3, 4, 5])

const evenNumbers = computed(() => {
  return numbers.value.filter((n) => n % 2 === 0)
})
watchEffect(async ()=>{
 try{
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/5`);
    const json = await res.json();
    fifthUserVal.value = json;
  } catch(e){
    console.log('error', e)
  }
})

watch(firstDataId, async (newVal,oldVal) => {
  try{
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${firstDataId.value}`);
    const json = await res.json();
    firstUserVal.value = json;
  } catch(e){
    console.log('error', e)
  }
}, {immediate: true})
function increment(){
  count.value++
}
function decrement(){
  count.value--
}

async function loadData(){
  try{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = await res.json();
    data.value = json;
    setTimeout(()=> {
      firstDataId.value = data.value[3].id;
    },5000)
    
  } catch(e){
    console.log('error', e)
  }

}
onMounted(async ()=>{
  loadData()
})

</script>

<template>
  {{firstUserVal}}
  <p>fifth user val {{fifthUserVal}}</p>
  <ul>
    <li v-for="item in data">
      {{item.id}} - {{item.title}} - status: {{item.completed}}
    </li>
  </ul>
  <p>Even numbers code</p>
	<ul>
    <li v-for="n in evenNumbers">
		  {{n}}
		</li>
  </ul>
  <button @click="increment">Increment</button>
  <p>{{count}}</p>
  <button @click="decrement">decement</button>

</template>