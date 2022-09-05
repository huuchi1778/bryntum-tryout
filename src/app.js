import  {Scheduler} from 'https://127.0.0.1:8000/lib/scheduler.wc.module.js';

const scheduler = new Scheduler({
  appendTo : document.getElementById('scheduler-container'),

  startDate : new Date(2022, 0, 1),
  endDate   : new Date(2022, 0, 10),

  resources : [
      { id : 1, name : 'Dan Stevenson' },
      { id : 2, name : 'Talisha Babin' }
  ],

  events : [
      { resourceId : 1, startDate : '2022-01-01', endDate : '2022-01-10' },
      { resourceId : 2, startDate : '2022-01-02', endDate : '2022-01-09' }
  ],

  columns : [
      { text : 'Name', field : 'name', width : 160 }
  ]
});