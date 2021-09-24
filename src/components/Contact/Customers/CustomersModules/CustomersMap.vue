<template>
    <div class="map">
        <iframe class="tt" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.41097367531!2d44.49808011531337!3d40.155402579415366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abc114d7c1383%3A0xf78cc13a3d926457!2sYerevan%20Mall!5e0!3m2!1sen!2s!4v1631706311271!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
</template>

<style scoped>
.tt{
    height: 831px;
    width: 813px;
}
 @media screen and (max-width: 1487px){
    .tt{
    width: 600px;
    height: 831px;
    }
} 
@media screen and (max-width: 1279px){
    .tt{
    width: 550px;
    height: 831px;
    }
}
@media screen and (max-width: 1024px){
    .tt{
    width: 425px;
    height: 728px;
    }
}
@media screen and (max-width: 767px){
  .tt{
    width: 100%;
    height: 500px;
    }
}
</style>