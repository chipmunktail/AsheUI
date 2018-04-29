<template>
    <div id="scrollbar" :style="style" :class="this.theme">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'scrollbar',
        // Object
        props: ['scrollOps'],
        data(){
            return{
                style:{},
                theme:''
            }
        },
        mounted(){
            this.theme=this.scrollOps.theme?this.scrollOps.theme:'default'
            const {width,height}=this.scrollOps
            this.style={width,height}
            if(this.scrollOps.width.match(/[\d]+/)[0]<window.screen.width){
                Object.assign(this.style,this.style,{"overflow-x":"hidden"})
            }
        },
        methods: {},
        watch: {

        }
    }
</script>

<style scoped>
    #scrollbar {
        overflow: scroll;
    }

    .default::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }
    .default::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #555;
    }
    .default::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        background: #EDEDED;
    }

    .red::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }
    .red::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: rgb(255, 141, 146);
    }
    .red::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 5px rgb(255, 141, 146);
        border-radius: 10px;
        background: #EDEDED;
    }
</style>
