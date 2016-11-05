import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './components/app/app.component';

import { Center } from './components/app/center/center.component';
import { List } from './components/app/list/list.component';
import { Item } from './components/app/list/item/item.component';
import { YetAnotherComponent } from './components/app/yet-another-component/yet-another-component.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App, Center, List, Item, YetAnotherComponent ],
  bootstrap:    [ App ],
})
export class AppModule { }
