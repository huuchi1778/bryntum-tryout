import  {Scheduler, Toolbar, Button} from 'https://127.0.0.1:8000/lib/scheduler.wc.module.js';

const schedulerContainer = document.getElementById('scheduler-container');

const customToolBar = new Toolbar({
    appendTo: schedulerContainer,
    height: '30px',
    items: [
        { text : 'Add', icon : 'b-fa b-fa-plus' },
        { text : 'Delete', icon : 'b-fa b-fa-trash' }
    ]
})

const scheduler = new Scheduler({
  appendTo : schedulerContainer,

  startDate : new Date(2022, 0, 1),
  endDate   : new Date(2022, 0, 10),

  resources : [
      { id : 1, name : 'Dan Stevenson' },
      { id : 2, name : 'Talisha Babin' }
  ],

  events : [
      { resourceId : 1, startDate : '2022-01-01', endDate : '2022-01-10' },
      { resourceId : 1, startDate : '2022-01-02', endDate : '2022-01-09' }
  ],

  columns : [
      { text : 'Name', field : 'name', width : 160 }
  ]
});

