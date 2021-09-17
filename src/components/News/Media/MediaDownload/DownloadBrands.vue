<template>
  <div class="brands">
   <nav class="nav-container">
  <ul class="nav-lists">
    <li class="nav-list" style="--i:0">
      <img src="https://source.unsplash.com/V2OyJtFqEtY">
    </li>
    <li class="nav-list" style="--i:1">
      <img src="https://source.unsplash.com/Pn7JBX42z3Q">
    </li>
    <li class="nav-list" style="--i:2">
      <img src="https://source.unsplash.com/sS_nzNBBqqs">
    </li>
    <li class="nav-list" style="--i:3">
      <img src="https://source.unsplash.com/lxURRFdeWps">
    </li>
  </ul>
</nav>

   
    <!-- <a :href="`${location.origin}/img/`"  download="asd.png">a</a> -->
  </div>
</template>



<script>
export default {
  
};
</script>


<style scoped lang="scss">
/* .brands {
  width: 400px;
  height: 400px;
  border: 1px solid red;
} */



*, *::before, *::after {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

:root {
  --total: 4;
  --offset-width: 10vw;
  --easing: cubic-bezier(.8, 0, .2, 1);
  --duration: .6s;
}

html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

body{
  display: flex;
  justify-content: center;
  align-items:center;
  overflow: hidden;
}

.nav-container {
  height: 90vh;
  width: 90vw;
  overflow: hidden;
  .nav-lists {
    list-style-type: none;
    display: flex;
    height:100%;
    overflow: hidden;
    position: relative;
    
    .nav-list {
      --tx: calc( -100% + var(--offset-width));
      width: 60vw;
      height: 100%;
      position: absolute;
      z-index: calc( var(--total) - var(--i));
      margin-left: calc( var(--i) * var(--offset-width));
      transform: translateX(var(--tx));
      transition: transform var(--duration) var(--easing);
      animation: slide-down 1s cubic-bezier(.5,0,.3,1);
      animation-delay: calc(var(--i) * .15s);
      animation-fill-mode: backwards;
      @keyframes slide-down {
        from{
          transform: translateX(var(--tx)) translateY(-100%);
        }
        to{
          transform: translateX(var(--tx)) translateY(0);
        }
      }
      
      &:hover {
        transform: translateX(-2vw);
        
        ~ .nav-list {
          transform: none;
        }
      }
    }
  }
}



img{
  height:100%;
  width:100%;
  object-fit: cover; 
}
</style>