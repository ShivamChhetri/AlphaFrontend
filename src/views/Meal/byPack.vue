<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2">
                    <filterBy :isPack="$route.params.pack_id"></filterBy>
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
    created(){
        
    }
}
</script>


