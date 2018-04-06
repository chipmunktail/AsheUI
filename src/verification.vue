<template>
    <transition name="fade">
        <div id="alert" v-if="view">
            <div class="box">
                <div class="info">
                    <input title="com" type="tel" class="com"  maxlength="1" @click="clear" @input="input($event,i)" v-for="n,i in inputNumber"/>
                </div>
                <div class="operation">
                    <!--<div @click="close">取消</div>-->
                    <!--<div class="green" @click="getVerificationCode" >{{hint}}</div>-->
                    <!--<div class="orange" @click="verification" >验证</div>-->
                    <input type="button" class="green" :value="hint" @click="getVerificationCode" :disabled=disabled />
                    <input type="button" class="orange" value="验证" @click="verification" />
                </div>
            </div>

            <div class="iconfont icon-close close" @click="close">X</div>

            <div class="alert-mask"></div>
        </div>
    </transition>
</template>

<script>
    import $ from 'jquery'
    //      todo 点击获取验证码后，变成倒计时
    //      todo toggle控制权给该组件
    //      输入：msg，toggle，
    //      输出：取消？，获取验证码，返回验证码，
    export default {
        name: 'd-verification',
        props:['info','view'],
        data(){
            return{
                code:[],
                inputNumber:4,
                hint:'获取验证码',
                disabled:false,
                second:60
            }
        },
        methods:{
            close: function () {
                this.$emit('closeAlert')
            },
//      输入验证
            input(e,i){
                let c=$('.com');
                c.eq(i+1).focus();

                if(typeof c.eq(i).val()==='number'){
                    return
                }
                this.code.push(+e.data);
                if(i===3&&c.eq(3).val().length===0){
                    this.clear()
                }
            },
//      点击清空验证码
            clear(){
                let c=$('.com');
                this.code=[];
                c.val('');
                c.eq(0).focus();
            },
//      获取验证码
            getVerificationCode() {
                this.disabled=true;
                this.second=60;
                const interval=setInterval(()=>{
                    this.second--;
                    this.hint=this.second+'秒后重新获取';
                    if(this.second<=0){
                        this.disabled=false;
                        this.hint='获取验证码';
                        clearInterval(interval);
                    }
                },1000);
                this.$emit('getVerificationCode');
            },
//       验证
            verification(){
                if(this.code.length<this.inputNumber)return;
                this.$emit('verification',this.code);
            }
        }
    }
</script>

<style scoped>
    #alert {
        width: 100%;
        height: 100%;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        display: flex;
        align-items: center;
        flex-direction: column;
        position: fixed;
        top:0;
        left:0;
        z-index: 10;
    }
    .alert-mask{
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        position: fixed;
        top:0;
        left:0;
        z-index: 10;
    }

    .orange{
        background-color: #ff8a56;
        color: #ffffff;
    }
    .green{
        background-color: #09bb07;
        color: #ffffff;
    }

    .box{
        position: relative;
        top:20%;
        background-color: #ffffff;
        width: 300px;
        height: 150px;
        border-radius: 10px;
        padding: 10px;
        z-index: 11;
    }

    .info{
        font-size: 16px;
        height: 80px;
        display: flex;
        justify-content: space-around;
    }

    .operation{
        height: 70px;
        line-height: 70px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .operation div{
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        min-width: 100px;
        width: auto;
        padding: 0 5px;
        border: 0.5px solid #dbdbdb;
        font-size: 16px;
    }

    .operation input{
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        min-width: 100px;
        width: auto;
        padding: 0 10px;
        border: 0.5px solid #dbdbdb;
        font-size: 16px;
        margin: 0;
        outline: none;
    }

    .close{
        height: 50px;
        width: 50px;
        border: 1px solid #ffffff;
        text-align: center;
        line-height: 50px;
        color: #ffffff;
        border-radius: 50px;
        font-size: 30px;
        position: relative;
        top: 50%;
        z-index: 11;
    }

    .com{
        padding: 0;
        margin: 0;
        border: 0;
        background-color: #a9acb1;
        width: 50px;
        height: 50px;
        border-radius: 3px;
        font-size: 25px;
        text-align: center;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
        opacity: 0
    }
</style>
