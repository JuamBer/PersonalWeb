import { Component, OnInit } from '@angular/core';
import { Tool } from 'src/models/tool.model';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  tools: Tool[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tools.push({
      name: 'VSCODE'
    });
  }

}
