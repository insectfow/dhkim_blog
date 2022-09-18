<template>
  <div class="image-wrap">
    <div class="ready-image">
      <label for="maxSize">
        압축 하기 윈하는 최대 이미지 크기를 정해주세요. 생략시 400px로 해드려요.
        <input id="maxSize" type="number" max="1920" min="32" placeholder="max size" v-model="inputMaxSize">
        <input id="maxSize" type="range" max="1920" min="32" placeholder="max size" v-model="inputMaxSize">
        <button @click="inputMaxSizeFunc">저장하기</button>
      </label>
    </div>
    <div class="image-input-wrap" v-if="!imageUrl">
      <label for="imageInput">압축할 이미지 업로드</label>
    </div>
    <figure class="image" v-else>
      <img :src="imageUrl" alt="2" />
      <a :href="imageUrl" download>다운로드</a>
    </figure>
    <input
      class="image-input"
      id="imageInput"
      type="file"
      accept="image/*"
      @change="imageUpload"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      imageUrl: null,
      maxSize: 400,
      inputMaxSize: null,
      minInputSize: 32,
      maxInputSize: 1920
    };
  },
  methods: {
    ...mapMutations(['toggleModal']),
    imageUpload(e) {
      const file = e.target.files[0];
      const maxSize = this.inputMaxSize ? this.inputMaxSize : this.maxSize;
      const fr = new FileReader();
      fr.onload = (base64) => {
        const image = new Image();
        image.src = base64.target.result;
        image.onload = (e) => {
          const $canvas = document.createElement(`canvas`);
          let width = image.width;
          let height = image.height;
          if (width > height) {
            if (width > maxSize) {
              height *= maxSize / width;
            }
          } else {
            if (height > maxSize) {
              width *= maxSize / height;
              height = maxSize;
            }
          }
          $canvas.width = width;
          $canvas.height = height;
          const ctx = $canvas.getContext(`2d`);
          ctx.drawImage(e.target, 0, 0, width, height);
          this.imageUrl = $canvas.toDataURL(`image/jpeg`, 1);
        };
      };
      fr.readAsDataURL(file);

    },
    inputMaxSizeFunc() {
      if (this.inputMaxSize < 32) {
        this.toggleModal({
          text: '최소값은 32입니다.'
        })
        this.inputMaxSize = null;
      } else if (this.inputMaxSize > 1920) {
        this.toggleModal({
          text: '최댓값은 1920입니다.'
        })
        this.inputMaxSize = null;
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.image-wrap {
  padding-top: 20px;
  .image-input-wrap {
    width: 100%;
    height: 100%;
    > label {
      border: 1px solid rgba(0,0,0,0.2);
      border-radius: 10px;
      transition: background 0.2s ease-in-out;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      box-sizing: border-box;
    }
    > label:hover {
      // color: #ffffff;
      background: rgba(0,0,0,0.3);
    }
  }
  
  .image-input {
    display: none;
  }

  .ready-image {
    width: 100%;
    margin-bottom: 20px;
    > label {
      width: 100%;
      font-size: 2rem;
      word-break: keep-all;
      line-height: 3rem;
      display: flex;
      flex-wrap: wrap;
      flex-flow: column;
      > input {
        margin-top: 10px;
        width: 200px;
        height: 36px;
        font-size: 2rem;
        margin-bottom: 10px;
        box-sizing: border-box;
      }
      > button {
        width: 200px;
        height: 30px;
      }
    }
  }

  .image {
    display: flex;
    width: 200px;
    height: 200px;
    > img {
      width: 100%;
    }
  }
}
</style>
