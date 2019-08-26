<template>
    <div>
        <div class="container">
            <h2 class="">Choose Package</h2>
            <div class="row">
                <div class="box col-md-3" v-for="pack in packs" :key="pack.value">
                    <router-link 
                        :to="{
                            name: 'MealbyPack', 
                            params: { 
                                pack_id:pack.id,  
                            } 
                        }"
                        class="btn btn-danger">
                            <b>{{pack.type}}</b> <br><br>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint at cum deleniti facilis eum nesciunt ex magni explicabo numquam error vero enim blanditiis ad animi aspernatur facere quia, placeat recusandae.</p>
                    </router-link>
                </div>
            </div>                   
        </div>
    </div> 
</template>

<script>
export default {
    created(){
        this.$store.dispatch("setPackages");
    },
    computed: {
        packs(){
            return this.$store.state.packages;
        }
    }
}
</script>

<style lang="scss">
    .box{
        // border: 1px solid black;
        // border-radius: 5px;
        margin: 10px 0;
        div{
            padding:20px 40px;
        }
    }
    
</style>