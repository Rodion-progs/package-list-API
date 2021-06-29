<template>
  <footer class="footer">
    <b-container class="py-5">
      <h3 class="text-center footer-text">Сайт сделан для тестового задания на Vue. Имя и ссылка в копирайте</h3>
    </b-container>
    <div class="footer-copyright text-center py-3">
      © 2020 Copyright: <a href="https://github.com/Rodion-progs" target="_blank"> Rodion</a>
    </div>
  </footer>
</template>
<script>
import { BContainer } from "bootstrap-vue"


export default {
  name: "AppFooter",
  components: {
    BContainer,
  }
}
</script>
