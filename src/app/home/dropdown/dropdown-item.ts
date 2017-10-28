import {Dropdownable} from "./dropdownable";
import {Component} from "@angular/core";

export class DropdownItem implements Dropdownable {
  content: string;
  data: any;
  component: Component;

  constructor(content: string, component: Component, data: any) {
    this.content = content;
    this.data = data;
    this.component = component;
  }
}
