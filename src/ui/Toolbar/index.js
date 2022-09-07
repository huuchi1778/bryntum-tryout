import  {Toolbar, Button, Combo} from 'https://127.0.0.1:8000/lib/scheduler.wc.module.js';

class ToolbarComponent{
  constructor({appendTo}){
    const toolbar = new Toolbar({
      appendTo: appendTo,
      height: '30px',
      items: [
        this._createAddButton(),
        this._createViewDropdown() 
      ]
    })

  }

  _createAddButton() {
    return new Button({
      icon    : 'b-fa-plus-circle',
      text    : 'Add',
      color   : 'b-gray',
      onClick: (event) => {
        const eventName = new CustomEvent("toolbar:create-button-click", event);
        document.dispatchEvent(eventName);
      }
    })
  }

  _createViewDropdown() {
    const dropdown = new Combo({
      items: ['Crew', 'Equipment'],
      value: 'Crew',
      placeholder : 'Select view',
      editable: false,
    });

    dropdown.addListener('change', (event) => {
      const eventName = new CustomEvent("toolbar:view-dropdown-change", event);
      document.dispatchEvent(eventName);
    });

    return dropdown;
  }
}

export {ToolbarComponent};
