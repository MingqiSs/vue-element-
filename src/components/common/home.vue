<template>
    <div class="wrapper">
              <vhead></vhead>
              <sidebar></sidebar>
              <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
         </div>
</template>
<script>
    import vhead from "./header.vue"
    import sidebar from "./sidebar.vue"
    export default {
           components:{
               vhead,sidebar
           }
    }
</script>