<template>
    <div id="alert">
        {{msg}}
    </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        name: 'd-slide-down',
//        String Boolean String
        props: ['msg', 'switch_', 'speed'],
        methods: {
            show() {
                this.animation('0');
                setTimeout(() => {
                    this.animation('-30px')
                }, 1000)
            },
            animation(px) {
                let speed = 'normal';
                this.speed === 'slow' || this.speed === 'fast' ? speed = this.speed : speed;
                $('#alert').animate({top: px},speed);
            }
        },
        watch: {
            'switch_': function (val, oldVal) {
                this.show();
            }
        }
    }
</script>

<style scoped>
    #alert {
        position: fixed;
        top: -30px;
        width: 100%;
        height: 30px;
        line-height: 30px;
        background-color: rgba(51, 51, 51, 0.9);
        color: #ffffff;
        text-align: center;
        z-index: 99;
    }
</style>
