<template>
  <div class="home">
    <div class="container">
      <ul class="card-list layout">
        <li v-for="(lists, idx) in cardList" :key="'card list' + (idx + 1)">
          <router-link :to="lists.path"  >
            <figure :style="{ backgroundImage : 'url(' + lists.imageUrl + ')'}">
              <div class="cover-bg"></div>
            </figure>
            <h4>{{lists.name}}</h4>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      cardList: [
        {
          idx: 1,
          name: '이미지 압축',
          path: '/imageResize',
          imageUrl: 'https://images.unsplash.com/photo-1663431905837-09cf339461ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
          idx: 2,
          name: '스와이프',
          path: '/swiper',
          imageUrl: 'https://images.unsplash.com/photo-1663447000721-93a6d5bc71db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60'
        },
        {
          idx: 3,
          name: '이미지 압축',
          path: '/imageResize',
          imageUrl: 'https://images.unsplash.com/photo-1663401632253-be16144831e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
          idx: 4,
          name: '이미지 압축',
          path: '/imageResize',
          imageUrl: 'https://images.unsplash.com/photo-1663411387776-c583380a432b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
          idx: 5,
          name: '이미지 압축',
          path: '/imageResize',
          imageUrl: 'https://images.unsplash.com/photo-1663356044307-83f3b6901c3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
          idx: 1,
          name: '이미지 압축',
          path: '/imageResize',
          imageUrl: 'https://images.unsplash.com/photo-1663312314645-555d6bb36435?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
          idx: 1,
          name: '이미지 압축',
          path: '/imageResize',
          imageUrl: 'https://images.unsplash.com/photo-1663156242158-5aff9a88b550?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
.home {
  padding: 40px 0 20px;
  .card-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    > li {
      min-width: calc(20% - 15px);
      > a {
        position: relative;
        aspect-ratio: 1/1.618;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        overflow: hidden;
        box-sizing: border-box;
        transition: all 0.3s ease-in-out;
        > figure {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: -1;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;  
          transition: all 0.2s ease-in-out;
        }
        > h4 {
          position: relative;
          z-index: 1;
          font-size: 2rem;
          color: var(--card-content-color);
          opacity: 0;
          transition: all 0.25s ease-in-out;
        }
      }
      > a:hover {
        box-shadow: 0 0 12px 5px rgba($color: var(--shadow-color), $alpha: 0.2);
        transform: scale(105%);
        > h4 {
          opacity: 1;
        }
        > figure {
          filter: grayscale(100%);
        }
      }
    }
  }
  .cover-bg::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.21);
    width: 100%;
    height: 100%;
    z-index: 2;
  }
}

@media screen and (max-width: 1320px) {
  .home {
    .card-list {
      > li {
        min-width: calc(25% - 15px);
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .home {
    .card-list {
      > li {
        min-width: calc(33.3333% - 15px);
      }
    }
  }
}

@media screen and (max-width: 640px) {
  .home {
    padding: 20px 0;
    .card-list {
      > li {
        min-width: calc(50% - 10px);
      }
    }
  }
}

@media screen and (max-width: 414px) {
  .home {
    padding: 20px 0;
    .card-list {
      > li {
        min-width: calc(100%);
        > a {
        aspect-ratio: 1.618/1;
        }
      }
    }
  }
}
</style>
