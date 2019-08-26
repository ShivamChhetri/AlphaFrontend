<template>
    <div>
        <div class="container">
            <h2 class="">Choose Distributor</h2>
            <div class="row">
                <div class="box col-md-3" v-for="dist in dists" :key="dist.value">
                    <router-link 
                        :to="{
                            name: 'MealbyDist', 
                            params: { 
                                dist_id:dist.id,  
                            } 
                        }"
                        class="btn btn-danger">
                            <b>{{dist.service_name}}</b> <br><br>
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
        this.$store.dispatch("setDistributors");
    },
    computed: {
        dists(){
            return this.$store.state.distributors;
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