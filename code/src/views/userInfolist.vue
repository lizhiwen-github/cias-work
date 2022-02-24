<template>
    <div>
        <p>姓名：{{ userObj.name }}</p>
        <p>电话：{{ userObj.tel }}</p>
        <p>邮箱：{{ userObj.email }}</p>
        <button>返回修改</button>
        <button>确认提交</button>
    </div>
</template>

<script>
import  {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
    export default {
        // created(){
        //     console.log(this.$store.state.userObj,'55555');
        // }
        computed:{
			...mapState(['userObj'])
		}
    }
</script>

<style lang="less" scoped>
    button{
        cursor: pointer;
    }
</style>