import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
  private drawer = true;
  private items = [{ title: 'Home', icon: 'dashboard' },
  { title: 'User Profile', icon: 'account_circle' }];

  private cardItems = [
    {
      title: 'Daily Sales',
      desc: 'increase in today\' sales',
      time: 'updated 4minutes age',
    },
    {
      title: 'Email Subscription',
      desc: 'Last Campaign Performance',
      time: 'updated 10 minutes ago',
    },
    {
      title: 'Completed Tasks',
      desc: 'Last Last Campaign Performance',
      time: 'campaign sent 26 minutes ago',
    },
  ];

  private click(title: string) {
    console.log(title);
  }
  private mounted() {
    console.log('mounted');
  }
}
