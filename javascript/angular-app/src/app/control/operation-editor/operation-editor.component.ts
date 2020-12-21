import { Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-operation-editor',
  templateUrl: './operation-editor.component.html',
  styleUrls: ['./operation-editor.component.css']
})
export class OperationEditorComponent implements OnInit {
  @Input() selectedCategory: string;
  constructor() { }
  ngOnChanges(): void {
    
    
  }
  ngOnInit(): void {
  }

}
