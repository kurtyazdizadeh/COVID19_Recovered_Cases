class StateList {
  constructor(stateListElement) {
    this.renderStates = this.renderStates.bind(this);

    this.stateListElement = stateListElement;
  }
  renderStates(states){
    this.list = document.querySelector('.state-list');

    for (var state in states) {
      var listItem = document.createElement('button');
      listItem.className = 'list-group-item list-group-item-action';
      listItem.textContent = states[state];

      this.list.appendChild(listItem);
    }
  }

}
