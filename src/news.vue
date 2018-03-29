<template>
    <div id="news">
        <!--左图片，右标题-->
        <section v-if="newsObj.type===1" class="lirt box">
            <div class="img-container">
                <div class="img" :style="'background-image: url('+newsObj.imgList[0]+')'"></div>
            </div>
            <div class="content-container">
                <h3 class="content">
                    {{newsObj.title}}
                </h3>
                <div class="remark">
                    {{newsObj.time}} {{newsObj.author}}
                </div>
            </div>
        </section>
        <!--左标题，右图片-->
        <section v-if="newsObj.type===2" class="ltri box">
            <div class="content-container">
                <h3 class="content">
                    {{newsObj.title}}
                </h3>
                <div class="remark">
                    {{newsObj.time}} {{newsObj.author}}
                </div>
            </div>

            <div class="img-container">
                <div class="img" :style="'background-image: url('+newsObj.imgList[0]+')'"></div>
            </div>
        </section>
        <!--无图片-->
        <section v-if="newsObj.type===3" class="noi box">
            <div class="content-container">
                <h3 class="content">
                    {{newsObj.title}}
                </h3>
                <div class="remark">
                    {{newsObj.time}} {{newsObj.author}}
                </div>
            </div>
        </section>
        <!--上标题，下图片列表-->
        <section v-if="newsObj.type===4" class="utdl">
            <div class="content-container">
                <h3 class="content">
                    {{newsObj.title}}
                </h3>
            </div>
            <div class="img-container">
                <div class="img" v-for="n in newsObj.imgList" :style="'background-image: url('+n+')'"></div>
            </div>
            <div class="remark">
                {{newsObj.time}} {{newsObj.author}}
            </div>
        </section>
        <!--上标题，下大图-->
        <section v-if="newsObj.type===5" class="utdi">
            <div class="content-container">
                <h3 class="content">
                    {{newsObj.title}}
                </h3>
            </div>
            <div class="img-container">
                <div class="img" :style="'background-image: url('+newsObj.imgList[0]+')'"></div>
            </div>
            <div class="remark">
                {{newsObj.time}} {{newsObj.author}}
            </div>

        </section>
    </div>
</template>

<script>
    export default {
//    数据格式和属性：
//    - type: Number 面板类型，1.左图片，右标题 2.左标题，右图片 3.无图片 4.上标题，下图片列表 5.上标题，下大图
//    - imgList: Array 图片列表
//    - title: String 文章标题
//    - time: String 文章时间
//    - author: String 作者等其他信息
        name: 'd-news',
        props:['newsObj'],
        data() {
            return {
            }
        },
        mounted() {
        },
        methods: {}
    }
</script>

<style scoped lang="less">
    #news {
        height: 100%;
    }

    .box {
        background-color: #ffffff;
        margin: 0 15px;
        padding: 15px 0;
        height: 12%;
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid rgba(221, 221, 221, 0.6);
    }

    .lirt {
        .img-container {
            width: 33%;
        }

        .img {
            text-align: center;
            vertical-align: middle;
            display: inline-block;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center center;
            /*background-image: url("../assets/01.jpg");*/
        }

        .content-container {
            width: 67%;
            padding-left: 10px;
        }

        .content {
            color: #222;
            font-size: 17px;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: normal;
            display: -webkit-box;
            font-family: 'STHeiti', 'Microsoft YaHei', 'Helvetica', 'Arial', sans-serif;
            word-break: break-all;
            align-self: center;
        }

        .remark {
            font-size: 12px;
            color: #999;
            margin-top: 6px;
            align-self: center;
        }
    }

    .ltri {
        .img-container {
            width: 33%;
        }

        .img {
            text-align: center;
            vertical-align: middle;
            display: inline-block;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center center;
            /*background-image: url("../assets/01.jpg");*/
        }

        .content-container {
            width: 67%;
            padding-right: 10px;
        }

        .content {
            color: #222;
            font-size: 17px;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: normal;
            display: -webkit-box;
            font-family: 'STHeiti', 'Microsoft YaHei', 'Helvetica', 'Arial', sans-serif;
            word-break: break-all;
            align-self: center;
        }

        .remark {
            font-size: 12px;
            color: #999;
            margin-top: 6px;
            align-self: center;
        }
    }

    .noi {
        .content-container {
            width: 100%;
            padding-right: 10px;
        }

        .content {
            color: #222;
            font-size: 17px;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: normal;
            display: -webkit-box;
            font-family: 'STHeiti', 'Microsoft YaHei', 'Helvetica', 'Arial', sans-serif;
            word-break: break-all;
            align-self: center;
        }

        .remark {
            font-size: 12px;
            color: #999;
            margin-top: 6px;
            align-self: center;
        }
    }

    .utdl {
        background-color: #ffffff;
        margin: 0 15px;
        padding: 15px 0;
        height: auto;
        border-bottom: 1px solid rgba(221, 221, 221, 0.6);
        .content-container {
            width: 100%;
            padding-right: 10px;
        }

        .content {
            color: #222;
            font-size: 17px;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: normal;
            display: -webkit-box;
            font-family: 'STHeiti', 'Microsoft YaHei', 'Helvetica', 'Arial', sans-serif;
            word-break: break-all;
            align-self: center;
        }

        .remark {
            font-size: 12px;
            color: #999;
            margin-top: 6px;
            align-self: center;
        }

        .img-container {
            margin-top: 5px;
            width: 100%;
            height: 75px;
            display: flex;
            justify-content: flex-start;
        }

        .img {
            text-align: center;
            vertical-align: middle;
            display: inline-block;
            width: 33%;
            height: 100%;
            margin-left: 0.3%;
            background-size: cover;
            background-position: center center;
            /*background-image: url("../assets/01.jpg");*/
        }
    }

    .utdi {
        background-color: #ffffff;
        margin: 0 15px;
        padding: 15px 0;
        height: auto;
        border-bottom: 1px solid rgba(221, 221, 221, 0.6);
        .content-container {
            width: 100%;
            padding-right: 10px;
        }

        .content {
            color: #222;
            font-size: 17px;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: normal;
            display: -webkit-box;
            font-family: 'STHeiti', 'Microsoft YaHei', 'Helvetica', 'Arial', sans-serif;
            word-break: break-all;
            align-self: center;
        }

        .remark {
            font-size: 12px;
            color: #999;
            margin-top: 6px;
            align-self: center;
        }

        .img-container {
            margin-top: 5px;
            width: 100%;
            height: 175px;
            display: flex;
            justify-content: space-around;
        }

        .img {
            text-align: center;
            vertical-align: middle;
            display: inline-block;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center center;
            /*background-image: url("../assets/01.jpg");*/
        }
    }
</style>
