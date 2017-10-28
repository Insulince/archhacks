import {Component, Input, OnInit} from "@angular/core";
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

  constructor() {
  }

  ngOnInit(): void {
 }
}
