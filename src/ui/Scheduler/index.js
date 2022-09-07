import  {Scheduler} from 'https://127.0.0.1:8000/lib/scheduler.wc.module.js';

class SchedulerComponent {
  constructor({appendTo, resourceName}) {
    this.scheduler = new Scheduler({
      appendTo: appendTo,
      columns: resourceName
    });
  }
}

export {SchedulerComponent};
