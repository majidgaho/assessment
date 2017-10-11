
import { Http, Response, Headers } from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Component, Renderer, ViewChild, AfterViewInit, ElementRef,OnInit } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import{ViewEncapsulation,Inject} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { AppService } from "./providers/app.service";


@Component({
    selector: 'todos-app',
    templateUrl:'./app/app.html',
    styles: ['todos-app {height:100%;}']
   
})

export class AppComponent implements OnInit {
   
    private todos : any = [];
    private form  : FormGroup;
    private todosLength: number;
    private task: any = {};
    constructor(private appService: AppService) {

        this.updateTodos();
        this.initForm();
        
    }   

    /**
     * initForm
     */
    public initForm() {
           this.form = new FormGroup({
                taskName    : new FormControl('')
            });
    }

    //i18n features 
    ngOnInit() {
       console.log("on init app");
    }
 

   

    /**
     * saveTodo
     */
    public saveTodo(type: any, viewData?: any) {
        if(type == 'save'){
            viewData = this.form.value;
        }
        this.appService.saveTodoService(type, viewData).subscribe(res => {
            this.form.controls['taskName'].setValue("");
        }, error => {

        }, () => {
            this.updateTodos();
        });
    }

    /**
     * remove
     */
    public remove(data: any) {
        this.appService.removeTodo(data).subscribe(res => {
            
        }, error => {

        }, () => {
           this.updateTodos();
        });
    }

    /**
     * updateTodos
     */
    public updateTodos() {
         this.appService.getTodos().subscribe(res => {
            this.todos = res;
            this.todosLength = this.todos.length;
        });
    }

}