import { Component, Input,Output,OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
title = "My Task List";
arrayAnime:any[] = ["alex","cele","aln"];

}


