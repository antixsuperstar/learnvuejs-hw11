<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h4>Exercise 1</h4>
                <div class="row">
                    <div class="col-xs-6">
                        <input
                                type="text"
                                class="form-control"
                                v-model="ex1">
                    </div>
                    <div class="col-xs-6">
                        <p>{{ ex1 | reverse }}</p>
                    </div>
                </div>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <h4>Exercise 2</h4>
                <div class="row">
                    <div class="col-xs-6">
                        <input
                                type="text"
                                class="form-control"
                                v-model="ex2">
                    </div>
                    <div class="col-xs-6">
                        <p>{{ ex2 | add-length }}</p>
                    </div>
                </div>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h4>Exercise 3</h4>
                <div class="row">
                    <div class="col-xs-6">
                        <input
                                type="text"
                                class="form-control"
                                v-model="ex3_1">
                    </div>
                    <div class="col-xs-6">
                        <p>{{ ex3_1_filtered }}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-6">
                        <input
                                type="text"
                                class="form-control"
                                v-model="ex3_2">
                    </div>
                    <div class="col-xs-6">
                        <p>{{  ex3_2_filtered  }}</p>
                    </div>
                </div>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <h4>Exercise 4</h4>
                <div class="row">
                    <div class="col-xs-6">
                        <input
                                type="text"
                                class="form-control"
                                v-model="ex4_2">
                    </div>
                    <div class="col-xs-6">
                        <p>{{  ex4_2_filtered  }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { ex4 } from "./ex4Mixin";

    export default {
        data() {
            return {
                ex1: '',
                ex2: '',
                ex3_1: '',
                ex3_2: ''
            }
        },
        filters: {
            reverse: txt => txt.split('').reverse().join(''),
        },
        computed: {
            ex3_1_filtered() {
                return this.ex3_1.split('').reverse().join('');
            },
            ex3_2_filtered() {
                return this.ex3_2 + ' (' + this.ex3_2.length + ')';
            }
        },
        mixins: [ex4]
    }
</script>

<style>
</style>
