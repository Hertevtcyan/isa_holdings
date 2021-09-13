<template>
  <div class="my-container container mx-auto">
    <div class="flex justify-between items-center">
      <div class="date">
        <p>July 2021</p>
      </div>
      <div class="article">
        <p>2 articles</p>
      </div>
    </div>
    <hr />
  </div>
</template>

<style scoped lang="scss">
.my-container{
        margin-top: 56px;
    }
hr {
  height: 3px;
  background: #10223d;
  opacity: 0.1;
  box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
}
.date {
    
  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 57px;
    text-align: center;
    color: #1d3557;
    text-shadow: 2px 4px 0px rgba(29, 53, 87, 0.05);
  }
}
.article{
    p{
        font-family: Rubik;
font-style: normal;
font-weight: 500;
font-size: 28px;
line-height: 33px;
text-align: center;

color: #1D3557;

opacity: 0.5;
text-shadow: 2px 4px 0px rgba(29, 53, 87, 0.05);
    }
}
</style>