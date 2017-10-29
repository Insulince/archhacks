export class NDB_Search_Response {
  list: NDB_Search_List;

  constructor(rawResponse: any) {
    this.list = new NDB_Search_List(rawResponse.list);
  }
}

export class NDB_Search_List {
  q: string;
  sr: string;
  ds: string;
  start: number;
  end: number;
  total: number;
  group: string;
  sort: string;
  item: Array<NDB_Search_Item> = [];

  constructor(rawList: any) {
    this.q = rawList.q;
    this.sr = rawList.sr;
    this.ds = rawList.ds;
    this.start = rawList.start;
    this.end = rawList.end;
    this.total = rawList.total;
    this.group = rawList.group;
    this.sort = rawList.sort;
    rawList.item.forEach(
      (rawItem: any): void => {
        this.item.push(new NDB_Search_Item(rawItem));
      }
    );
  }
}

export class NDB_Search_Item {
  offset: number;
  group: string;
  name: string;
  ndbno: string;
  ds: string;

  constructor(rawItem: any) {
    this.offset = rawItem.offset;
    this.group = rawItem.group;
    this.name = rawItem.name;
    this.ndbno = rawItem.ndbno;
    this.ds = rawItem.ds;
  }
}
