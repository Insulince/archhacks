import {Dropdownable} from "./dropdownable";

export class DropdownItem implements Dropdownable {
  content: string;
  data: any;

  constructor(content: string, data: any) {
    this.content = content;
    this.data = data;
  }
}
