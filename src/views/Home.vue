<template >
  <main class="homepage">
    <h1 class="first">Xasan Akhmadjonov</h1>
    
    <div class="main-img">
      <img class="imgg" src="../assets/main-logo.jpg" alt="">
    </div>

    <div class="second">

      <a href="https://www.instagram.com/xasan_a_1/" target="_blank"><img class="instagram"
          src="../assets/Instagram.png" /></a>
      <a href="https://t.me/xasan_01_A" target="_blank"><img class="telegram" src="../assets/telegram.png"></a>
    </div>
  </main>
 
</template>
<script src="">

</script>
<style lang="scss" scoped>
.homepage {
  background: url('../assets/back.webp') no-repeat center /cover;
}
.main-img{
  padding: 50px 0 ;
  width:40%;
  
  .imgg{
    width: 100%;
    aspect-ratio: 1/1;
     border-radius: 50%;
  }
}

.instagram {
  width: 55px;

}

.telegram {
  width: 55px;
}

.first {
  font-size: 50px;
  font-family: 'The Nautigal', cursive;

}



.second {
  padding-top: 20px;
  display: flex;
  align-items: center;
  gap: 40px;
}



@media screen and (max-width:768px) {
  .homepage {
    height: 100vh;
  }
}
</style>
