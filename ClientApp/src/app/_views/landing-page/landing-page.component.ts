import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobService } from 'src/app/_services/job.service';
import { Observable, Subscription, filter, map, switchMap, take, tap } from 'rxjs';
import { JobListComponent } from "../job-list/job-list.component";
import { LetDirective, PushPipe } from '@ngrx/component';
import { JobFilterComponent } from '../job-filter/job-filter.component';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styles: [],
    imports: [CommonModule, JobListComponent,LetDirective,PushPipe,JobFilterComponent,HeaderComponent],
    changeDetection:ChangeDetectionStrategy.OnPush
  
})
export class LandingPageComponent {
   
  jobs$!:any;
  filters$!:any;
  


  constructor(private jobsService:JobService){}
  ngOnInit(){

   this.jobs$ = this.jobsService.getJobsVal;
   this.filters$ = this.jobsService.getFilter;
   
  }
}
