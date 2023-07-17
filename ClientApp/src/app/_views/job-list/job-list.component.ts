import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetDirective } from '@ngrx/component';
import { JobModel } from 'src/app/_models/job.model';
import { JobService } from 'src/app/_services/job.service';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-list.component.html',
  styles: [
  ]
})
export class JobListComponent {
  @Input() jobs!:any;


  constructor(private jobService:JobService){}
  ngAfterViewInit(){
  }
   

  addFilter(item:string){
   this.jobService.addFilter(item);
   
  }

}
