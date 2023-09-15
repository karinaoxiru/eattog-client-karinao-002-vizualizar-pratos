<template>
    <div class="tabs">
        <ul>
            <li
                v-for="item in tabsList"
                :class="isActiveTab(item.id) ? 'active' : ''"
                @click="setActiveTab(item.id)"
                :key="item.id">
                {{ item.label }}
            </li>
        </ul>
        <div class="text-container">
            <transition name="slide-fade" mode="out-in">
            <div :key="activeTab" class="transition-container">
                <div v-if="activeTab === 'all'" class="tab-content">
                    <p>teste</p>
                </div>
                <div v-if="activeTab === 'active'" class="tab-content">
                </div>
            </div>
            </transition>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    const activeTab = ref('');
    const tabsList = [
        { id: 'all', label: 'Restaurantes' },
        { id: 'active', label: 'Pratos' },
    ];
    
    onMounted(() => {
        activeTab.value = tabsList[0].id;
    });
    
    const isActiveTab = (id) => activeTab.value === id;
    const setActiveTab = (id) => {
        activeTab.value = id;
    };
</script>

<style scoped lang="less">
    .tabs {
        width: fit-content;
        margin: 150px auto;
    
        ul {
        display: flex;
        list-style: none;
        border-bottom: 1px solid #e5e5e5;
        width: fit-content;
        padding: 0 30px;
        height: 45px;
    
        li {
            margin: 0 15px;
            font-size: 1.2rem;
            font-weight: 500;
            color: black;
            padding: 0 10px;
            height: 44px;
            cursor: pointer;
        }
    
        li.active {
            border-bottom: 3px solid #4d54dd;
            animation: show 0.7s ease-in-out;
        }
        }
    
        .text-container {
        box-sizing: border-box;
        max-width: 500px;
        text-align: left;
        padding-left: 50px;
        margin-top: 30px;
    
        h2 {
            color: #4d54dd;
        }
    
        p {
            color: #231f60;
        }
        }
    }
    
    @keyframes show {
        from {
        border-color: transparent;
        }
        to {
        border-color: #4d54dd;
        }
    }
    
    .slide-fade-enter-active {
        transition: all 0.5s;
    }
    .slide-fade-leave-active {
        transition: all 0.5s ease;
    }
    .slide-fade-enter,
    .slide-fade-leave-to {
        transform: translateY(-10px);
        opacity: 0;
    }
    .transition-container {
        width: 100%;
    }
    .tab-content {
        box-sizing: border-box;
        text-align: left;
    }
</style>
