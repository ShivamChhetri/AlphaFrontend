<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2 col-xs-12">
                    <filterBy></filterBy>
                </div>
                <div class="col-md-10 col-xs-12 meal">
                    <showMeal></showMeal>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import filterBy from "./filterBy.vue";
import showMeal from "./showMeal.vue";
export default {
    components:{
        'filterBy':filterBy,
        'showMeal':showMeal
    }
}
</script>