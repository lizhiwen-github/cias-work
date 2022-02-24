<template>
    <div>
        <p>姓名：<input type="text" v-model="datass.name"/></p>
        <p>电话：<input type="text" v-model="datass.tel"/></p>
        <p>邮箱：<input type="text" v-model="datass.email"/></p>
        <button @click="other()">下一步</button>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
    export default {
        data(){
            return{
                datass:{
                    name:'',
                    tel:'',
                    email:'@'
                }
            }
        },
        methods:{ 
            ...mapMutations(['getstate']),
            other(){
              this.getstate(this.datass);
             //this.$store.commit('getstate',this.datass);
              this.$router.push('/userInfolist');
            }
        }
    }
</script>

<style lang="less" scoped>
    button{
        cursor: pointer;
    }
</style>