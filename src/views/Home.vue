<template>
  <div class="container">
    <h1>{{ $t('home') }}</h1>
    <HelloWorld />
    <ul v-if="users.length > 0">
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
    <div v-else>Loading...</div>
    <button @click="addNewUser">Add new user</button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, onServerPrefetch, ref,
} from 'vue';
import { getUsers } from '@/services/users.service';
import { User } from '@/types/user.d';
import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const users = ref<User[]>([]);

    const addNewUser = () => {
      users.value.push({
        id: Math.random(),
        name: `Leanne Graham - ${Math.random()}`,
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: { lat: '-37.3159', lng: '81.1496' },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
      });
    };

    onServerPrefetch(async () => {
      users.value = await getUsers();
    });

    onMounted(async () => {
      users.value = await getUsers();
    });

    return {
      users,
      addNewUser,
    };
  },
});
</script>

<style scoped lang="scss"></style>
