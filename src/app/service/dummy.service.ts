import { Injectable } from '@angular/core';
import { Draggable } from '../model/draggable';


@Injectable({ providedIn: 'root' })
export class DummyService {



  constructor() { }

  getDraggables ():  Draggable[] {
      // tslint:disable-next-line:max-line-length
    const d1 = '{"type":"input","name":"input","template":"<div [attr.data-id]=\\"draggable.name\\">{{draggable.properties[0].value}}  <input type=\'text\' placeholder=\\"{{draggable.properties[1].value}}\\"/> </div>","html":"<div>${label}  <input type=\'text\' placeholder=\'${placeholder}\' /> </div>","properties":[{"key" : "label", "value" : "label"}, {"key" : "placeholder", "value" : "placeholder"}]}';
    // tslint:disable-next-line:max-line-length
    const d2 = '{"type":"button","name":"button","template":"<div [attr.data-id]=\\"draggable.name\\"><button type=\'button\'>{{draggable.properties[0].value}}</button></div>","html":"<div><button type=\'button\'>${label}</button></div>","properties":[{"key" : "label", "value" : "label"}]}';


    // tslint:disable-next-line:max-line-length
    const d3 = '{"type":"list","name":"list","template":"<div [attr.data-id]=\\"draggable.name\\"><select><option *ngFor=\\"let v of draggable.values[0].values\\" [value]=\\"v\\">{{v}}</option></select></div>", "html":"<div>TODO</div>","values":  [{"key" : "options", "values" : ["name1", "name2"]}]}';

    const drag1: Draggable = Object.assign(new Draggable(), JSON.parse(d1));
    const drag2: Draggable = Object.assign(new Draggable(), JSON.parse(d2));
    const drag3: Draggable = Object.assign(new Draggable(), JSON.parse(d3));
    return Array.of(drag1, drag2, drag3);
  }


}





