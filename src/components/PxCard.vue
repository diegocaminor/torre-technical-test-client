<template>
  <div>

    <div class="wrapper">
      <div class="torre-card company">
        <div class="torre-card__image torre-card__image--company">
          <img :src="imgSrc ? imgSrc : 'https://torre-media.s3-us-west-2.amazonaws.com/subtorres/Gig/torre.png'" :alt="imgAlt" />
        </div>
        <div class="torre-card__type torre-card__type--company">{{ jobType }}</div>
        <div class="torre-card__unit-name">{{title}}</div>
        <div class="torre-card__unit-description">
          {{ jobPosition }}
        </div>

        <div class="torre-card__unit-stats torre-card__unit-stats--company clearfix">
          <div v-if="compensation" class="one-third">
            <div v-if="compensation.data">
              <div v-if="compensation.data.maxAmount" class="stat large-text">{{ compensation.data.periodicity | capitalize }} <small>{{ compensation.data.currency }}</small> {{ compensation.data.maxAmount | salary }} <span>💰</span></div>
              <div v-else class="stat">Max - <span>💰</span></div>
              <div class="stat-value">Salary</div>
            </div>
            <div v-else>
              <div class="stat">Soon 💰</div>
              <div class="stat-value">Salary</div>
            </div>
          </div>
          <div v-else class="one-third">
            <div class="stat">Soon 💰</div>
            <div class="stat-value">Salary</div>
          </div>

          <div class="one-third">
            <div class="stat">{{ status }} 💡</div>
            <div class="stat-value">Status</div>
          </div>

          <div class="one-third no-border">
            <div  v-if="isRemote" class="stat">Yes 👨‍💻</div>
            <div  v-else class="stat">No 🧑‍💼</div>
            <div class="stat-value">Remote</div>
          </div>

        </div>

      </div> <!-- end torre-card -->
    </div> <!-- end wrapper -->
    <!-- <b-card
        :title="title"
        :img-src="imgSrc"
        :img-alt="imgAlt"
        img-height="200"
        img-width="200"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-5"
      >
        <b-card-text>
          <b>Job position:</b> {{ jobPosition }} <br>
          <b>Type:</b> {{ jobType }} <br>
        </b-card-text>
      </b-card> -->
  </div>
</template>

<script>
export default {
  name: "PxCard",
  props: {
    title: String,
    imgSrc: String,
    imgAlt: String,
    jobPosition: String,
    jobType: String,
    compensation: Object,
    isRemote: Boolean,
    status: String
  },
}
</script>


<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Lato:400,700,900);
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body {
    background: linear-gradient(to bottom, rgba(140, 122, 122, 1) 0%, rgba(175, 135, 124, 1) 65%, rgba(175, 135, 124, 1) 100%) fixed;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/coc-background.jpg') no-repeat center center fixed;
    background-size: cover;
    font: 14px/20px "Lato", Arial, sans-serif;
    color: #9e9e9e;
    margin-top: 30px;
  }
  .slide-container {
    margin: auto;
    width: 600px;
    text-align: center;
  }
  .wrapper {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .wrapper:focus {
    outline: 0;
  }
  .torre-card {
    background: white;
    width: 300px;
    display: inline-block;
    margin: auto;
    border-radius: 19px;
    position: relative;
    text-align: center;
    box-shadow: -1px 15px 30px -12px black;
    z-index: 9999;
  }
  .torre-card__image {
    position: relative;
    height: 230px;
    margin-bottom: 35px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
  }
  .torre-card__image--company img {
    background-size: cover;
    height: 250px;
    width: 300px;
    opacity: 0.6;
    filter: grayscale(100%);
    transition: 0.3s;
    /* width: 345px;
    position: absolute;
    top: -28px;
    left: -10px; */
  }
  .torre-card__image--company img:hover {
    opacity: 1;
    cursor: pointer;
    filter: grayscale(0%);
  }
  .torre-card__type {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 3px;
  }
  .torre-card__type--company {
    color: #224569;
  }
  .torre-card__unit-name {
    font-size: 26px;
    color: black;
    font-weight: 900;
    margin-bottom: 5px;
  }
  .torre-card__unit-description {
    padding: 20px;
    margin-bottom: 10px;
  }
  .torre-card__unit-stats--company {
    background: #224569;
  }
  .torre-card__unit-stats--company .one-third {
    border-right: 1px solid #003264;
  }
  .torre-card__unit-stats {
    color: white;
    font-weight: 700;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
  }
  .torre-card__unit-stats .one-third {
    width: 33%;
    float: left;
    padding: 20px 15px;
  }
  .torre-card__unit-stats small {
    font-size: 8px !important;
  }
  .torre-card__unit-stats span {
    font-size: 24px !important;
  }
  .torre-card__unit-stats .large-text {
    font-size: 15px !important;
  }
  .torre-card__unit-stats .stat {
    position: relative;
    font-size: 24px;
    margin-bottom: 10px;
  }
  .torre-card__unit-stats .stat-value {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 12px;
  }
  .torre-card__unit-stats .no-border {
    border-right: none;
  }
  .clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }
</style>