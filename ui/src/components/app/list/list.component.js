import { Component } from '@angular/core';
import { Item } from './item/item.component'

@Component({
    selector: 'list',
    styles: [ require('./list.style.css') ],
    template: require('./list.template.html'),
    directives: [ Item ]
})
export class List {

}

