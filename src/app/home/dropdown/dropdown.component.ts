import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {DropdownItem} from "./dropdown-item";

declare let $: any;

@Component({
  selector: "arch-hacks-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"]
})
export class DropdownComponent implements OnInit {
  @Input()
  dropdownItems: Array<DropdownItem> = [];

  @Output()
  onChoose: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  clicked(dropdownItem: DropdownItem): void {
    this.onChoose.emit(dropdownItem.data.ndbno);
  }

}
