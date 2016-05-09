'use strict';

function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  if(!listA || !listB) {
    return listA || listB;
  }
  else if(listA.next !== null) {
    listA.next = append(listA.next, listB);
    return listA;
  }
}

function append(listA, listB) {
  if(!listA) {
    return listB;
  }
  listA.next = append(listA.next, listB);
  return listA;
}


append({ data: 1, next: { data: 2, next: { data: 3, next: null } } },{ data: 4, next: { data: 5, next: { data: 6, next: null } } });
