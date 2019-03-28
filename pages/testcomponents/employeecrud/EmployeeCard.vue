<template>
  <div>
    <cdr-card>
        <p>My Awesome Employee</p>
        <cdr-row cols="2">
          <cdr-col>
            <div class="image-row">
                <cdr-img
                    :src="image"
                    :ratio='auto'
                />
            </div>
          </cdr-col>
          <cdr-col>
            <div class="text-column">
                <p>name: {{name}}</p>
                <p>age: {{age}}</p>
                <p>salary:{{salary}}</p>
                <p>employee id: {{_id}}</p>
            </div>
          </cdr-col>
        </cdr-row>
 
    </cdr-card>
  </div>
</template>

<script>
import { CdrCard } from '@rei/cdr-card'
import { CdrImg } from '@rei/cdr-img'
import { CdrCol, CdrRow } from '@rei/cdr-grid'

import "@rei/cdr-grid/dist/cdr-grid.css";

export default {
    name: 'EmployeeCard',
    components: {
        CdrCard,
        CdrImg,
        CdrCol,
        CdrRow
    },
    props: {
        _id: {
            type: String,
            required: false
        },
        /* Path to image */
        image: String,
        name: {
            type: String,
            required: true
        },
        /*number without commas, as a string */
        salary: {
            type: String,
            required: true
        },
        /*number without commas, as a string */
        age: {
            type: String,
            required: true
        }
    },
    computed: {
        getImage() {
            return props.image;
        }
    }
}
</script>

<style>
.image-column {
    justify-content: left;

}
.text-column {
    background-color: lightgray;
    text-align: left;
    padding: 10px;
    width: 100%;
  }
.stuff {
    display: block;
}
</style>