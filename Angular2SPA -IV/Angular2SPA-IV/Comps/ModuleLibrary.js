"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var AppComponent_1 = require("./AppComponent");
var Routing_1 = require("./Routing");
var EmployeeModule_1 = require("../Employee/EmployeeModule");
var EmployeeTaskModule_1 = require("../EmployeeTask/EmployeeTaskModule");
var TaskModule_1 = require("../Task/TaskModule");
var PageNotFoundComponent_1 = require("./PageNotFoundComponent");
var ModuleLibrary = (function () {
    function ModuleLibrary() {
    }
    return ModuleLibrary;
}());
ModuleLibrary = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            EmployeeModule_1.EmployeeModule,
            Routing_1.RoutingModule,
            TaskModule_1.TaskModule,
            EmployeeTaskModule_1.EmployeeTaskModule,
        ],
        declarations: [
            AppComponent_1.AppComponent,
            //TaskListComponent,
            PageNotFoundComponent_1.PageNotFoundComponent
        ],
        bootstrap: [AppComponent_1.AppComponent]
    })
], ModuleLibrary);
exports.ModuleLibrary = ModuleLibrary;
//# sourceMappingURL=ModuleLibrary.js.map