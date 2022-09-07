import { SchedulerComponent } from "./ui/index.js";
import { ToolbarComponent } from "./ui/Toolbar/index.js";

const schedulerContainer = document.getElementById('scheduler-container');

const toolbar = new ToolbarComponent({
    appendTo: schedulerContainer
});

const scheduler = new SchedulerComponent({
    appendTo: schedulerContainer,
    resourceName: [
        { text : 'Crew', field : 'crew', width : 140 }
    ]
});
