<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2">
                    <filterBy :isDist="$route.params.dist_id"></filterBy>
                </div>
                <div class="col-md-10">
                    <showMeal></showMeal>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import showMeal from "../../components/showMeal.vue";
import filterBy from "../../components/filterBy.vue";
export default {
    components:{
        'showMeal':showMeal,
        'filterBy':filterBy
    },
    data(){
        return{
            filterData:{
                meal_type:null,
                preference:null,
                package_id:null,
                days:null,
                dist_id:null
            }
        }
    },
    created(){
        // this.filterData.dist_id=this.$route.params.dist_id;
        // console.log(this.filterData.dist_id);
        // axios.post("/allMeals/filterByDist",this.filterData)
        // .then(result=>{
        //     console.log(result.data);
        //     this.$store.commit('changeMealData',result.data);
        // }).catch(err=>{
        //     console.log(err);
        // });
    }
}
</script>


