"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/map");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var app_service_1 = require("./providers/app.service");
var AppComponent = (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.todos = [];
        this.task = {};
        this.updateTodos();
        this.initForm();
    }
    /**
     * initForm
     */
    AppComponent.prototype.initForm = function () {
        this.form = new forms_1.FormGroup({
            taskName: new forms_1.FormControl('')
        });
    };
    //i18n features 
    AppComponent.prototype.ngOnInit = function () {
        console.log("on init app");
    };
    /**
     * saveTodo
     */
    AppComponent.prototype.saveTodo = function (type, viewData) {
        var _this = this;
        if (type == 'save') {
            viewData = this.form.value;
        }
        this.appService.saveTodoService(type, viewData).subscribe(function (res) {
            _this.form.controls['taskName'].setValue("");
        }, function (error) {
        }, function () {
            _this.updateTodos();
        });
    };
    /**
     * remove
     */
    AppComponent.prototype.remove = function (data) {
        var _this = this;
        this.appService.removeTodo(data).subscribe(function (res) {
        }, function (error) {
        }, function () {
            _this.updateTodos();
        });
    };
    /**
     * updateTodos
     */
    AppComponent.prototype.updateTodos = function () {
        var _this = this;
        this.appService.getTodos().subscribe(function (res) {
            _this.todos = res;
            _this.todosLength = _this.todos.length;
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'todos-app',
            templateUrl: './app/app.html',
            styles: ['todos-app {height:100%;}']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9Bc3Nlc21lbnQvVG9kb0xpc3QvYXNzZXNzbWVudC9zcmMvbWFpbi93ZWJhcHAvIiwic291cmNlcyI6WyJzcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQSxpQ0FBOEI7QUFDOUIsd0NBQW1FO0FBQ25FLHNDQUFpRztBQUlqRyx1REFBcUQ7QUFVckQ7SUFNSSxzQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUpsQyxVQUFLLEdBQVMsRUFBRSxDQUFDO1FBR2pCLFNBQUksR0FBUSxFQUFFLENBQUM7UUFHbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUVwQixDQUFDO0lBRUQ7O09BRUc7SUFDSSwrQkFBUSxHQUFmO1FBQ08sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFTLENBQUM7WUFDckIsUUFBUSxFQUFNLElBQUksbUJBQVcsQ0FBQyxFQUFFLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGdCQUFnQjtJQUNoQiwrQkFBUSxHQUFSO1FBQ0csT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBS0Q7O09BRUc7SUFDSSwrQkFBUSxHQUFmLFVBQWdCLElBQVMsRUFBRSxRQUFjO1FBQXpDLGlCQVdDO1FBVkcsRUFBRSxDQUFBLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDZixRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0IsQ0FBQztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ3pELEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoRCxDQUFDLEVBQUUsVUFBQSxLQUFLO1FBRVIsQ0FBQyxFQUFFO1lBQ0MsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOztPQUVHO0lBQ0ksNkJBQU0sR0FBYixVQUFjLElBQVM7UUFBdkIsaUJBUUM7UUFQRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1FBRTlDLENBQUMsRUFBRSxVQUFBLEtBQUs7UUFFUixDQUFDLEVBQUU7WUFDQSxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxrQ0FBVyxHQUFsQjtRQUFBLGlCQUtDO1FBSkksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ3JDLEtBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBbkVRLFlBQVk7UUFQeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBQyxnQkFBZ0I7WUFDNUIsTUFBTSxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FFdkMsQ0FBQzt5Q0FRa0Msd0JBQVU7T0FOakMsWUFBWSxDQXFFeEI7SUFBRCxtQkFBQztDQUFBLEFBckVELElBcUVDO0FBckVZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlciwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMvU3ViamVjdCc7XHJcbmltcG9ydHtWaWV3RW5jYXBzdWxhdGlvbixJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSBcIi4vcHJvdmlkZXJzL2FwcC5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RvZG9zLWFwcCcsXHJcbiAgICB0ZW1wbGF0ZVVybDonLi9hcHAvYXBwLmh0bWwnLFxyXG4gICAgc3R5bGVzOiBbJ3RvZG9zLWFwcCB7aGVpZ2h0OjEwMCU7fSddXHJcbiAgIFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgIFxyXG4gICAgcHJpdmF0ZSB0b2RvcyA6IGFueSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBmb3JtICA6IEZvcm1Hcm91cDtcclxuICAgIHByaXZhdGUgdG9kb3NMZW5ndGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdGFzazogYW55ID0ge307XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcFNlcnZpY2U6IEFwcFNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVUb2RvcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdEZvcm0oKTtcclxuICAgICAgICBcclxuICAgIH0gICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIGluaXRGb3JtXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0Rm9ybSgpIHtcclxuICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcclxuICAgICAgICAgICAgICAgIHRhc2tOYW1lICAgIDogbmV3IEZvcm1Db250cm9sKCcnKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2kxOG4gZmVhdHVyZXMgXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwib24gaW5pdCBhcHBcIik7XHJcbiAgICB9XHJcbiBcclxuXHJcbiAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2F2ZVRvZG9cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNhdmVUb2RvKHR5cGU6IGFueSwgdmlld0RhdGE/OiBhbnkpIHtcclxuICAgICAgICBpZih0eXBlID09ICdzYXZlJyl7XHJcbiAgICAgICAgICAgIHZpZXdEYXRhID0gdGhpcy5mb3JtLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFwcFNlcnZpY2Uuc2F2ZVRvZG9TZXJ2aWNlKHR5cGUsIHZpZXdEYXRhKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyd0YXNrTmFtZSddLnNldFZhbHVlKFwiXCIpO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRvZG9zKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZW1vdmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZShkYXRhOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmFwcFNlcnZpY2UucmVtb3ZlVG9kbyhkYXRhKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG5cclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgdGhpcy51cGRhdGVUb2RvcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdXBkYXRlVG9kb3NcclxuICAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZVRvZG9zKCkge1xyXG4gICAgICAgICB0aGlzLmFwcFNlcnZpY2UuZ2V0VG9kb3MoKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy50b2RvcyA9IHJlcztcclxuICAgICAgICAgICAgdGhpcy50b2Rvc0xlbmd0aCA9IHRoaXMudG9kb3MubGVuZ3RoO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSJdfQ==