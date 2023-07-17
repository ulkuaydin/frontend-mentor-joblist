import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobService } from 'src/app/_services/job.service';

@Component({
  selector: 'app-job-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-filter.component.html',
  styles: [
  ]
})
export class JobFilterComponent {
@Input() filters!:any;

  
   constructor(private jobService:JobService){}

  ngOnInit(){
    this.filters = this.jobService.filter;
  }
  clear(){
    this.jobService.clearFilter();
  }
  remove(item:string){
    this.jobService.removeFilter(item);
  
  }
}
