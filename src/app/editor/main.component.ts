import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

import { DummyService } from '../service/dummy.service';
import { Draggable } from '../model/draggable';
import { Form } from '../model/form';
import { FormService } from '../service/form.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']

})

export class MainComponent {

  private formService: FormService;
  draggables: Draggable[] = [];
  form: Form;

  constructor(dragulaService: DragulaService, draggableService: DummyService, formService: FormService) {
        this.formService = formService;
        //this.dragulaService.createGroup('COPYABLE', {
        dragulaService.setOptions('main-bag', {
          copy: function (el, source) {
            // To copy only elements in left container, the right container can still be sorted
            return source.id === 'left';
          },
          copySortSource: false,
          accepts: function(el, target, source, sibling) {
            return (source.id === 'left' || source.id.includes('cell') && target.id.includes('cell')) && formService.isFree(target.id);
          }
        });

        dragulaService.drag.subscribe((value) => {
          const [bagName, e, source] = value;
          if (source.id.includes('cell')) {
            const cellId = source.id;
            //TODO a faire dans le drop après avoir stocké la ref de la cell source
            this.form.removeElementFromCell(cellId);
          }
        });


        dragulaService.drop.subscribe((value) => {
          const cellId = value[2].id;

          const draggableId = value[1].dataset.id;
          const dropped = this.draggables.filter(draggable => draggable.name === draggableId);
          const model = dropped[0].clone();
          this.form.addElementToCell(model, cellId);
          const component = value[1];
          dropped[0].properties[0].value = 'zob';
          console.log(this.form);
        });

        //draggableService.getDraggables().subscribe(draggables => this.draggables = draggables);
        this.draggables = draggableService.getDraggables();
        this.form = this.formService.getForm();
      }


      addLine(): void {
        this.formService.addLine();
      }
}