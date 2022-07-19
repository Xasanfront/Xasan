
<template>
  <div class="app">
    <Sidebar />
    <router-view />
  </div>

</template>
  
  <script setup>
import Sidebar from "./components/Sidebar.vue";
</script>

<style lang="scss">
:root {
  --primary: #ffffff;
  --grey: #6c6c6c;
  --dark: #d61414;
  --dark-alt: #1b1b1b;
  --ligth: #f1f5f9;
  --sidebar-width: 300px;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background: var(--ligth);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
.app{
  display: flex;
  
  main{
    flex: 1 1 0;
    padding: 2rem;
    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}

.container {
  margin: auto;
  @media screen and (max-width: 768px) {
    max-width: 425px;
  }
  @media screen and (max-width: 425px) {
    max-width: 375px;
  }
  @media screen and (max-width: 375px) {
    max-width: 320px;
  }
  @media screen and (max-width: 320px) {
    width: 100%;
  }
}
</style>
