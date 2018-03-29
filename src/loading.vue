<template>
  <div id="loading_">
    <div class="loaders">
      <div class="loader">
        <div class="loader-inner line-scale-pulse-out-rapid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'd-loading'
  }
</script>

<style>
  @import "../static/loading.css";
  #loading_{
    width: 100%;
    position: fixed;
    top:30%;
    text-align: center;
    display: flex;
    justify-content: space-around;
  }
  .loaders{
    padding: 10px 20px;
    border-radius: 5px;
  }
</style>
