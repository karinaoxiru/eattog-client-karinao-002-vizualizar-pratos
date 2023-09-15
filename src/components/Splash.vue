<template>
    <div class="cmp-splash">
        <h1 class="cmp-plash-title">
            <span class="cmp-plash-logo">Eat</span><span class="cmp-plash-logo">Tog🟨</span>
        </h1>
    </div>
</template>

<script setup>
    import {onMounted} from "vue";
    import {useRouter} from 'vue-router'

    const router = useRouter();

    onMounted(() => {
        const intro = document.querySelector(".cmp-splash");
        const logoSpan = document.querySelectorAll(".cmp-plash-logo");

        console.log(intro);
        console.log(logoSpan);

        setTimeout(() => {
            console.log("settimeout")
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.add('active');
                    console.log(span)
                }, (idx + 1) * 400);
          });

          setTimeout(() => {
              logoSpan.forEach((span, idx) => {
                  setTimeout(() => {
                      span.classList.remove('active');
                      span.classList.add('fade');
                      console.log(span)
                  }, (idx + 1) * 100);
              });
          }, 2000);
        });

        setTimeout(() => {
            router.push("/inicio")
        }, 3000);
    });
</script>

<style setup>
    .cmp-splash {
        position: fixed;
        z-index: 9999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        transition: 1s;
    }

    .cmp-plash-title {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #373737;
    }

    .cmp-plash-logo {
        position: relative;
        display: inline-block;
        bottom: -20px;
        font-size: 5.0rem;
        opacity: 0;
    }

    .cmp-plash-logo.active {
        bottom: 0;
        opacity: 1;
        transition: ease-in-out 0.5s;
    }

    .cmp-plash-logo.fade {
        bottom: 150px;
        opacity: 0;
        transition: ease-in-out 0.5s;
    }
</style>
