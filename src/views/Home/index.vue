<template>
  <section class="home-page">
    <h1>!!! {{ title }} {{ $t('home') }} !!!</h1>
    <ul>
      <li>Name: {{ userData.name }}</li>
      <li>Username: {{ userData.username }}</li>
      <li>Email: {{ userData.email }}</li>
      <li>Phone: {{ userData.phone }}</li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
import { useSSR } from '@/use/useSSR';
import { DynamicObject } from '@/interfaces';
import { appStore } from '@/store/app';

export default defineComponent({
  name: 'HomePage',
  setup() {
    const store = useStore();
    const userData = ref<DynamicObject>({});

    useSSR(async () => {
      const userResponse = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      userData.value = userResponse.data;

      appStore.title = userData.value.name;
      appStore.meta = [
        {
          name: 'description',
          content: 'SSR description',
        },
        {
          name: 'username',
          content: userData.value.username,
        },
      ];
      appStore.links = [
        {
          rel: 'canonical',
          href: 'https://php.fyi',
        },
        {
          rel: 'email',
          href: userData.value.email,
        },
      ];
    });

    return {
      title: store.state.title,
      userData,
    };
  },
});
</script>

<style scoped lang="scss">
.home-page {
  padding: 20px;

  h1 {
    color: $color-text;
  }

  ul {
    list-style: none;

    li {
      color: $color-text;
    }
  }
}
</style>
