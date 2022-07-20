<template >
  <main class="about">
    <div class="container">
      <div class="box">
        <div class="left">
          <h1 class="main-text">"Xasan Akhmadjonov
            <br>
            Asadovich"
          </h1>
          <p class="text"> Akhmadjonov Xasan <br>28.12.2002 da Toshkent Shahrida <br> hozirda
            Frontend developer!
          </p>
        </div>
        <div class="rigth">
          <img src="../assets/bagmain.jpg" alt="#">
        </div>
      </div>
    </div>
    <div class="but">
      <router-link to="/Call" class="btn-button">Ask me question ?</router-link>
    </div>
  </main>
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=The+Nautigal:wght@400;700&display=swap');

.box {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.about {
  background: url('../assets/back.webp') no-repeat center /cover;
}

.left {
  margin-top: 200px;
  margin-left: 40px;
  font-family: 'The Nautigal', cursive;

  .main-text {
    font-size: 85px;
    font-family: 'The Nautigal', cursive;
  }

  .text {
    font-size: 30px;
    font-family: 'The Nautigal', cursive;
    line-height: 35px;

  }
}

.rigth {
  width: 400px;
  aspect-ratio: 1/1;
  border: none;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 180px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.but {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 55px;
  text-decoration: none;
}

.btn-button {
  width: 200px;
  height: 55px;
  padding: 15px;
  text-align: center;
  background: rgb(182, 12, 12);
  color: #fff;
  border-radius: 10px;
  outline: none;
  text-decoration: none;

  &:hover {
    color: #fff;
    background: #000;
  }
}

@media screen and (max-width:768px) {
  .about {
    height: 100vh;
  }

  .left {
    margin-top: 90px;
    margin-left: 15px;

    .main-text {
      font-size: 45px;
      font-family: 'The Nautigal', cursive;

    }

    .text {
      font-size: 30px;
    }
  }

  .rigth {
    width: 200px;
    height: 200px;
    margin-top: 100px;
  }
 
}

@media screen and (max-width: 425px) {
  .container {
    display: flex;
    flex-wrap: wrap;

  }
}

@media screen and (max-width:376px) {
  .container {
    display: flex;
    flex-wrap: wrap;
    max-width: 320px;

  }

  .box {
    display: flex;
    flex-direction: column;
  }

  .left {
    margin-top: 15px;

    .main-text {
      font-size: 35px;
    }

    .text {
      font-size: 25px;
    }
  }

  .rigth {
    margin-top: 15px;
  }



  .but {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 40px;
   .btn-button{
     text-decoration: none;
     font-size: 12px;
   }
  }

}
</style>