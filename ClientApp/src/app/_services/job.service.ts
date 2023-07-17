import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, ReplaySubject, map, shareReplay, tap } from 'rxjs';
import { JobModel } from '../_models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
 
  public filter:BehaviorSubject<any[]> = new BehaviorSubject<any[]>(['HTML']);
  public jobs = new ReplaySubject<any>(1);
  constructor(private http:HttpClient ) { }
  
  getJobs =  this.http.get<any>(`assets/data.json`).pipe(map((response)=> response || []),shareReplay(1));
  

  public addFilter(item:any) : void{
    
    !this.filter.getValue().includes(item) ? (this.filter.next([...this.filter.getValue(),item]),this.getJobsVal) : '';
    
  }
  public removeFilter(item:any):void{
 
    this.filter.getValue().includes(item) ? (this.filter.next(this.filter.getValue().filter(value => value !== item)),this.getJobsVal) : '';
  }
   
 public get getFilter(){

    return this.filter.getValue();
  }
  
  public clearFilter(){
   
    this.filter.getValue().splice(0,this.filter.getValue().length);
    this.getJobsVal;
  }

  public get getJobsVal(){

    this.getJobs.subscribe(response =>{
      this.jobs.next(response.filter((value:any) => this.getFilter.every((x:any)=> value.languages.includes(x) || value.tools.includes(x) || value.role.includes(x) || value.level.includes(x) ) ));
    });
  
   
    return this.jobs.asObservable();
  }
}
