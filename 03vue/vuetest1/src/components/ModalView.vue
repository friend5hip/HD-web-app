<template>
   <div class="modal" v-if="isModal">
      <div class="inner">
         <h2 class="mb-10">{{ data[selectedNum].title }}</h2>
         <hr class="mb-10" />
         <p class="mb-10">{{ data[selectedNum].detail }}</p>
         <!-- emit으로 부모 vue에게 신호를 주어 값을 변경 -->
         <button class="btn btn-primary" v-on:click="$emit('closeModal')">닫기</button>
      </div>
   </div>
</template>

<script>
export default {
   name: 'modalView',
   /* props으로 부모 vue의 데이터를 가져옴 */
   props: {
      data: Array,
      isModal: Boolean,
      selectedNum: Number,
   },
};
</script>

<style lang="scss" scoped>
.modal {
   position: fixed;
   background-color: rgba(0, 0, 0, 0.3); // (r, g, b, opacity)
   // opacity: 0.3;
   // width: 100%;
   // height: 100%;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   .inner {
      background: #fff;
      width: 400px;
      padding: 10px 16px;
      //   border-radius: $radius;
      border-radius: 5px;
      @media screen and (max-width: 570px) {
         width: 90%;
      }
   }
}
</style>
