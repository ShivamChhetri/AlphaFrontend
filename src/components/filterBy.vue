<template>
    <div>
        <div class="customBox filterBox">
            <h4>Filter by:</h4>
            <hr>
            <div class="dropdown">
                <b>Days</b>
                <div class="inputDiv">
                    <input type="radio" @change="changeData" value='1' v-model="filterData.days">Today<br>
                    <input type="radio" @change="changeData" value='2' v-model="filterData.days">Till tomorrow<br>
                    <input type="radio" @change="changeData" value='7' v-model="filterData.days">This week<br>
                    <input type="radio" @change="changeData" value='null' v-model="filterData.days">All<br>
                </div>
            </div>
            <hr>
            <div class="dropdown">
                <b>Meal</b>
                <div class="inputDiv">
                    <input type="radio" @change="changeData" value='breakfast' v-model="filterData.meal_type">Breakfast<br>
                    <input type="radio" @change="changeData" value='lunch' v-model="filterData.meal_type">Lunch<br>
                    <input type="radio" @change="changeData" value='dinner' v-model="filterData.meal_type">Dinner<br>
                    <input type="radio" @change="changeData" value='null' v-model="filterData.meal_type">All<br>
                </div>
            </div>
            <hr>
            <div class="dropdown">
                <b>Food Preference</b>
                <div class="inputDiv">
                    <input type="radio" @change="changeData" value='1' v-model="filterData.preference">Veg<br>
                    <input type="radio" @change="changeData" value='0' v-model="filterData.preference">NonVeg<br>
                    <input type="radio" @change="changeData" value='null' v-model="filterData.preference">Both<br>
                </div>
            </div>
            <hr>
            <div v-if="!isPack" >
                <div class="dropdown">
                    <b>Packages</b>
                    <div class="inputDiv">
                        <div v-for="pack in packs" :key="pack.value">
                            <input type="radio" @change="changeData" :value="pack.id" v-model="filterData.package_id">{{pack.type}}<br>
                        </div>
                        <input type="radio" @change="changeData" value='null' v-model="filterData.package_id">All<br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['isPack','isDist'],
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
    computed:{
        packs(){
            return this.$store.state.packages;
        }
    },
    created(){
        if(this.isPack){
            this.filterData.package_id=this.isPack;
            this.changeData();
        }else if(this.isDist){
            this.filterData.dist_id=this.isDist;
            this.changeData();
        }else{
            this.$store.dispatch('allMeal');
        }
        // for geting packages name(details)
        this.$store.dispatch("setPackages");
    },
    methods: {
        changeData(){
            for(let key in this.filterData){
                if(this.filterData[key]==='null'){
                    this.filterData[key]=null;
                }
            }
            if(this.filterData.days===null){
                // if day is not required
                this.$store.dispatch('filterMeal',this.filterData);
            }else{
                // for days filter
                this.$store.dispatch('filterDay',this.filterData);
            }
        }
    },
}
</script>

<style scoped lang="scss">
    .filterBox{
        padding: 3%;
    }
    @media(max-width:768px){
        .inputDiv{
            display: flex;
        }
    }
</style>