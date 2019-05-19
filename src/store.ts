import { observable, action } from "mobx";

class Store {
  @observable
  loggedIn: boolean = false;

  constructor() {}
}

export default new Store();
