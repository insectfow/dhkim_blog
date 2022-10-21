<template>
  <transition name="modal" appear>
    <div class="popup-wrap">
      <div class="popup-content">
        <p>
          {{text}}
        </p>
        <button class="popup-button" @click="close">확인</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['text'],
  methods: {
    close() {
      this.$store.commit('toggleModal', {text: null});
    }
  }
}
</script>

<style lang="scss" scoped>
.popup-wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.4);
  z-index: 9999;
  transition: all 0.1s ease-in-out;
  .popup-content {
    width: 320px;
    height: 200px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 3px 3px 10px 5px rgba(0,0,0,.2);
    overflow: hidden;
  }
  p {
    width: 100%;
    padding: 30px 20px;
    height: calc(100% - 50px);
    text-align: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .popup-button {
    width: 100%;
    height: 50px;
    border: none;
    cursor: pointer;
    font-size: 1.6rem;
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>