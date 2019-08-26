<template>
    <div>
        <div class="wrapper mr-lg-1">
            <div class="box p-2 customBox" v-for="meal in meals " :key="meal.value">
                <img class="img-fluid img-thumbnail" :src="`http://localhost:3030/Uploads/${meal.meal_pic_1}`" alt="#">
                <h2>{{meal.meal_name}}</h2>
                <span>{{meal.meal_type}}</span>
                <span>  {{meal.package_id}}</span>
                <p>{{meal.meal_date | parseDate}}</p>
                <router-link 
                    :to="{
                            name:'MealbyDist',
                            params:{
                                dist_id:meal.dist_id
                            }
                    }"
                >
                    <footer style="float:right">by {{meal.service_name}}</footer>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        meals(){
            return this.$store.state.meals;
        }
    },
    filters:{
        parseDate(value){
            if(value===undefined){
                return;
            }
            let date= new Date(value);
            return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
        }
    }
}
</script>

<style scoped lang="scss">
    .wrapper{
        display:grid;
        grid-template-columns: repeat(3,1fr);
        grid-column-gap: 3%;
    }
    @media(max-width: 768px){
        .wrapper{
            grid-template-columns: repeat(1,1fr);
        }
    }
    .box{
        width:100%;
        height:50vh;
        text-align: center;
        img{
            width:100%;
            height: 50%;
            object-fit: contain;
        }
    }
</style>