(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = '/api';
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getBooks = function () {
        return this.http.get(apiUrl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getBook = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postBook = function (data) {
        return this.http.post(apiUrl, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateBook = function (id, data) {
        var url = apiUrl + "/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteBook = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-title {\r\n    color: #3f51b5;\r\n    text-align: center;\r\n}\r\n\r\n.container {\r\n    width: 90%;\r\n    margin: 0 auto;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"main-title\">Library Management System</h1>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book-detail/book-detail.component */ "./src/app/book-detail/book-detail.component.ts");
/* harmony import */ var _book_create_book_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book-create/book-create.component */ "./src/app/book-create/book-create.component.ts");
/* harmony import */ var _book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./book-edit/book-edit.component */ "./src/app/book-edit/book-edit.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _book_delete_book_delete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./book-delete/book-delete.component */ "./src/app/book-delete/book-delete.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    {
        path: 'books',
        component: _book_book_component__WEBPACK_IMPORTED_MODULE_6__["BookComponent"],
        data: { title: 'Book List' }
    },
    {
        path: 'book-details/:id',
        component: _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_7__["BookDetailComponent"],
        data: { title: 'Book Details' }
    },
    {
        path: 'book-create',
        component: _book_create_book_create_component__WEBPACK_IMPORTED_MODULE_8__["BookCreateComponent"],
        data: { title: 'Create Book' }
    },
    {
        path: 'book-edit/:id',
        component: _book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_9__["BookEditComponent"],
        data: { title: 'Edit Book' }
    },
    {
        path: '',
        redirectTo: '/books',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_6__["BookComponent"],
                _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_7__["BookDetailComponent"],
                _book_create_book_create_component__WEBPACK_IMPORTED_MODULE_8__["BookCreateComponent"],
                _book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_9__["BookEditComponent"],
                _book_delete_book_delete_component__WEBPACK_IMPORTED_MODULE_13__["BookDeleteComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"].forRoot()
            ],
            entryComponents: [_book_create_book_create_component__WEBPACK_IMPORTED_MODULE_8__["BookCreateComponent"], _book_delete_book_delete_component__WEBPACK_IMPORTED_MODULE_13__["BookDeleteComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-create/book-create.component.css":
/*!*******************************************************!*\
  !*** ./src/app/book-create/book-create.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n\n.example-full-width {\n    width: 100%;\n}\n\n.example-full-width:nth-last-child() {\n    margin-bottom: 10px;\n}\n\n.button-row {\n    margin: 10px 0;\n}"

/***/ }),

/***/ "./src/app/book-create/book-create.component.html":
/*!********************************************************!*\
  !*** ./src/app/book-create/book-create.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h1 class=\"modal-title\">Add Book</h1>\n    <div class=\"button-row\">\n        <a (click)=\"closeDialog()\" color=\"primary\">\n            <mat-icon>close</mat-icon>\n        </a>\n    </div>\n</div>\n\n<form (ngSubmit)=\"onFormSubmit(bookForm.value)\" [formGroup]=\"bookForm\">\n    <mat-form-field class=\"example-full-width\">\n        <input [errorStateMatcher]=\"matcher\" formControlName=\"isbn\" matInput placeholder=\"ISBN\">\n        <mat-error>\n            <span *ngIf=\"!bookForm.get('isbn').valid && bookForm.get('isbn').touched\">Please enter ISBN</span>\n        </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n        <input [errorStateMatcher]=\"matcher\" formControlName=\"title\" matInput placeholder=\"Title\">\n        <mat-error>\n            <span *ngIf=\"!bookForm.get('title').valid && bookForm.get('title').touched\">Please enter Book Title</span>\n        </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n        <input [errorStateMatcher]=\"matcher\" formControlName=\"author\" matInput placeholder=\"Author\">\n        <mat-error>\n            <span *ngIf=\"!bookForm.get('author').valid && bookForm.get('author').touched\">Please enter Book Author</span>\n        </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n        <textarea [errorStateMatcher]=\"matcher\" formControlName=\"description\" matInput placeholder=\"Description\"></textarea>\n        <mat-error>\n            <span *ngIf=\"!bookForm.get('description').valid && bookForm.get('description').touched\">Please enter Book Description</span>\n        </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n        <input [errorStateMatcher]=\"matcher\" formControlName=\"publisher\" matInput placeholder=\"Publisher\">\n        <mat-error>\n            <span *ngIf=\"!bookForm.get('publisher').valid && bookForm.get('publisher').touched\">Please enter Publisher</span>\n        </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n        <input [errorStateMatcher]=\"matcher\" formControlName=\"coverphoto\" matInput placeholder=\"Cover Photo\">\n        <mat-error>\n            <span *ngIf=\"!bookForm.get('coverphoto').valid && bookForm.get('coverphoto').touched\">Please enter source of cover photo.</span>\n        </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n        <input [errorStateMatcher]=\"matcher\" formControlName=\"published_year\" matInput placeholder=\"Published Year\">\n        <mat-error>\n            <span *ngIf=\"!bookForm.get('published_year').valid && bookForm.get('published_year').touched\">Please enter Published Year</span>\n        </mat-error>\n    </mat-form-field>\n    <div class=\"button-row\">\n        <button [disabled]=\"!bookForm.valid\" color=\"primary\" mat-raised-button type=\"submit\">\n      <mat-icon>save</mat-icon>\n    </button>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/book-create/book-create.component.ts":
/*!******************************************************!*\
  !*** ./src/app/book-create/book-create.component.ts ***!
  \******************************************************/
/*! exports provided: BookCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCreateComponent", function() { return BookCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var BookCreateComponent = /** @class */ (function () {
    function BookCreateComponent(router, api, formBuilder, dialogRef, data) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isbn = '';
        this.title = '';
        this.description = '';
        this.author = '';
        this.publisher = '';
        this.published_year = '';
        this.coverphoto = '';
        this.matcher = new _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"]();
    }
    BookCreateComponent.prototype.ngOnInit = function () {
        this.bookForm = this.formBuilder.group({
            'isbn': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'title': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'description': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'author': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'coverphoto': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'publisher': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'published_year': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    BookCreateComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.postBook(form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.data.onAdd();
            _this.closeDialog();
        }, function (err) {
            console.log(err);
        });
    };
    BookCreateComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    BookCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-create',
            template: __webpack_require__(/*! ./book-create.component.html */ "./src/app/book-create/book-create.component.html"),
            styles: [__webpack_require__(/*! ./book-create.component.css */ "./src/app/book-create/book-create.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], BookCreateComponent);
    return BookCreateComponent;
}());



/***/ }),

/***/ "./src/app/book-delete/book-delete.component.css":
/*!*******************************************************!*\
  !*** ./src/app/book-delete/book-delete.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book-delete/book-delete.component.html":
/*!********************************************************!*\
  !*** ./src/app/book-delete/book-delete.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h1 class=\"modal-title\">Delete Book</h1>\n    <div class=\"button-row\">\n        <a (click)=\"closePopup()\" color=\"primary\">\n            <mat-icon>close</mat-icon>\n        </a>\n    </div>\n</div>\n<div class=\"modal-content\">\n    <div mat-dialog-content>\n        <p>Do you want to delete the book?</p>\n    </div>\n    <div mat-dialog-actions>\n        <button mat-raised-button color=\"primary\" (click)=\"closePopup()\">Cancel</button>\n        <button mat-raised-button colror=\"accent\" (click)=\"onDelete()\">Yes</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/book-delete/book-delete.component.ts":
/*!******************************************************!*\
  !*** ./src/app/book-delete/book-delete.component.ts ***!
  \******************************************************/
/*! exports provided: BookDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDeleteComponent", function() { return BookDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var BookDeleteComponent = /** @class */ (function () {
    function BookDeleteComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    BookDeleteComponent.prototype.ngOnInit = function () {
    };
    BookDeleteComponent.prototype.closePopup = function () {
        this.dialogRef.close(false);
    };
    BookDeleteComponent.prototype.onDelete = function () {
        this.dialogRef.close(true);
    };
    BookDeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-delete',
            template: __webpack_require__(/*! ./book-delete.component.html */ "./src/app/book-delete/book-delete.component.html"),
            styles: [__webpack_require__(/*! ./book-delete.component.css */ "./src/app/book-delete/book-delete.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], BookDeleteComponent);
    return BookDeleteComponent;
}());



/***/ }),

/***/ "./src/app/book-detail/book-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/book-detail/book-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n    max-width: 500px;\n}\n\n.button-row {\n    margin: 10px 0;\n}\n\n.actions button {\n    margin-right: 10px;\n}\n\ndt {\n    font-weight: bold;\n}"

/***/ }),

/***/ "./src/app/book-detail/book-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/book-detail/book-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h1 class=\"modal-title\">{{book.title}}</h1>\n    <div class=\"button-row\">\n        <a (click)=\"closeDialog()\" color=\"primary\">\n            <mat-icon>close</mat-icon>\n        </a>\n    </div>\n</div>\n<div class=\"example-card\">\n    <img [src]=\"book.coverphoto\" alt=\"\" width=\"100%\">\n    <p>{{book.description}}</p>\n    <div class=\"content\">\n        <dl>\n            <dt>ISBN:</dt>\n            <dd>{{book.isbn}}</dd>\n            <dt>Author:</dt>\n            <dd>{{book.author}}</dd>\n            <dt>Publisher:</dt>\n            <dd>{{book.publisher}}</dd>\n            <dt>Publish Year:</dt>\n            <dd>{{book.published_year}}</dd>\n            <dt>Update Date:</dt>\n            <dd>{{book.updated_date | date}}</dd>\n        </dl>\n    </div>\n    <div class=\"actions\">\n        <button mat-raised-button color=\"accent\" (click)=\"openEditBookPopup()\">Edit</button>\n        <button mat-raised-button color=\"warn\" (click)=\"deleteBook()\">Delete</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/book-detail/book-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/book-detail/book-detail.component.ts ***!
  \******************************************************/
/*! exports provided: BookDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailComponent", function() { return BookDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var BookDetailComponent = /** @class */ (function () {
    function BookDetailComponent(route, api, router, dialogRef, data) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.book = {
            isbn: String,
            title: String,
            author: String,
            description: String,
            published_year: String,
            publisher: String,
            coverphoto: String,
            updated_date: Date,
        };
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        this.book = this.data['book'];
    };
    BookDetailComponent.prototype.getBookDetails = function (id) {
        var _this = this;
        this.api.getBook(id)
            .subscribe(function (data) {
            console.log(data);
            _this.book = data;
        });
    };
    BookDetailComponent.prototype.deleteBook = function (id) {
        this.data.deleteBook();
        this.dialogRef.close();
    };
    BookDetailComponent.prototype.openEditBookPopup = function () {
        this.data.editBook();
        this.dialogRef.close();
    };
    BookDetailComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    BookDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-detail',
            template: __webpack_require__(/*! ./book-detail.component.html */ "./src/app/book-detail/book-detail.component.html"),
            styles: [__webpack_require__(/*! ./book-detail.component.css */ "./src/app/book-detail/book-detail.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], BookDetailComponent);
    return BookDetailComponent;
}());



/***/ }),

/***/ "./src/app/book-edit/book-edit.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-edit/book-edit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-full-width:nth-last-child() {\n  margin-bottom: 10px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/book-edit/book-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-edit/book-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- write code to edit and save book i this component -->\n<div class=\"modal-header\">\n    <h1 class=\"modal-title\">Edit Book</h1>\n    <div class=\"button-row\">\n        <a (click)=\"closeDialog()\" color=\"primary\">\n            <mat-icon>close</mat-icon>\n        </a>\n    </div>\n</div>\n\n<form (ngSubmit)=\"onFormSubmit(bookForm.value)\" [formGroup]=\"bookForm\">\n    <mat-form-field class=\"example-full-width\">\n        <input [errorStateMatcher]=\"matcher\" formControlName=\"isbn\" matInput placeholder=\"ISBN\">\n        <mat-error>\n            <span *ngIf=\"!bookForm.get('isbn').valid && bookForm.get('isbn').touched\">Please enter ISBN</span>\n        </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n        <input [errorStateMatcher]=\"matcher\" formControlName=\"title\" matInput placeholder=\"Title\">\n        <mat-error>\n            <span *ngIf=\"!bookForm.get('title').valid && bookForm.get('title').touched\">Please enter Book Title</span>\n        </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n        <input [errorStateMatcher]=\"matcher\" formControlName=\"author\" matInput placeholder=\"Author\">\n        <mat-error>\n            <span *ngIf=\"!bookForm.get('author').valid && bookForm.get('author').touched\">Please enter Book Author</span>\n        </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n        <textarea [errorStateMatcher]=\"matcher\" formControlName=\"description\" matInput placeholder=\"Description\"></textarea>\n        <mat-error>\n            <span *ngIf=\"!bookForm.get('description').valid && bookForm.get('description').touched\">Please enter Book Description</span>\n        </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n        <input [errorStateMatcher]=\"matcher\" formControlName=\"publisher\" matInput placeholder=\"Publisher\">\n        <mat-error>\n            <span *ngIf=\"!bookForm.get('publisher').valid && bookForm.get('publisher').touched\">Please enter Publisher</span>\n        </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n        <input [errorStateMatcher]=\"matcher\" formControlName=\"published_year\" matInput placeholder=\"Published Year\">\n        <mat-error>\n            <span *ngIf=\"!bookForm.get('published_year').valid && bookForm.get('published_year').touched\">Please enter Published Year</span>\n        </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n        <input [errorStateMatcher]=\"matcher\" formControlName=\"coverphoto\" matInput placeholder=\"Cover Photo\">\n        <mat-error>\n            <span *ngIf=\"!bookForm.get('coverphoto').valid && bookForm.get('coverphoto').touched\">Please enter source of cover photo.</span>\n        </mat-error>\n    </mat-form-field>\n    <div class=\"button-row\">\n        <button [disabled]=\"!bookForm.valid\" color=\"primary\" mat-raised-button type=\"submit\">\n    <mat-icon>save</mat-icon>\n  </button>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/book-edit/book-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-edit/book-edit.component.ts ***!
  \**************************************************/
/*! exports provided: BookEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookEditComponent", function() { return BookEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var BookEditComponent = /** @class */ (function () {
    function BookEditComponent(router, api, formBuilder, dialogRef, data) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isbn = '';
        this.title = '';
        this.description = '';
        this.author = '';
        this.publisher = '';
        this.published_year = '';
        this.matcher = new _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"]();
    }
    BookEditComponent.prototype.ngOnInit = function () {
        this.book = this.data['book'];
        this.bookForm = this.formBuilder.group({
            'isbn': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'title': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'description': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'author': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'coverphoto': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'publisher': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'published_year': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        if (this.book) {
            this.populateForm();
        }
    };
    BookEditComponent.prototype.populateForm = function () {
        this.bookForm.setValue({
            isbn: this.book['isbn'],
            title: this.book['title'],
            description: this.book['description'],
            author: this.book['author'],
            publisher: this.book['publisher'],
            published_year: this.book['published_year'],
            coverphoto: this.book['coverphoto'],
        });
    };
    BookEditComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.updateBook(this.book._id, form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.data.onUpdate();
            _this.closeDialog();
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    BookEditComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    BookEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-edit',
            template: __webpack_require__(/*! ./book-edit.component.html */ "./src/app/book-edit/book-edit.component.html"),
            styles: [__webpack_require__(/*! ./book-edit.component.css */ "./src/app/book-edit/book-edit.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], BookEditComponent);
    return BookEditComponent;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n    display: flex;\n    flex-direction: column;\n    max-height: 500px;\n    min-width: 300px;\n    overflow: auto;\n    color: white;\n}\n\n.isbn-col {\n    flex: 0 0 100px !important;\n    white-space: unset !important;\n}\n\n.button-row {\n    margin: 10px 0;\n    position: absolute;\n    top: 12px;\n    right: 20px;\n}\n\n.main-container {\n    margin-top: 20px;\n    display: flex;\n    width: 100%;\n    align-items: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n\n.main-container mat-card {\n    width: 25%;\n    cursor: pointer;\n}\n\n.example-card {\n    max-width: 250px;\n    box-shadow: 0 3px 3px #ccc !important;\n    background: #3394aa !important;\n    margin: 10px;\n    flex-basis: 25%;\n}\n\n.example-header-image {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n}\n\nmat-card-header {\n    margin-bottom: 20px;\n}\n\n.mat-card-avatar {\n    width: 55px;\n    height: 55px;\n    -o-object-fit: fill;\n       object-fit: fill;\n}\n\n.mat-card-content p {\n    color: white;\n}\n\n.mat-card-title {\n    color: white;\n    font-size: 24px;\n    font-weight: 700;\n}\n\n.mat-card-subtitle {\n    color: #111;\n    font-style: italic;\n}"

/***/ }),

/***/ "./src/app/book/book.component.html":
/*!******************************************!*\
  !*** ./src/app/book/book.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n    <button color=\"primary\" mat-raised-button (click)=\"openAddNewBookPopup()\"><mat-icon>add</mat-icon></button>\n</div>\n<div class=\"main-container\">\n    <mat-card class=\"example-card\" *ngFor=\"let book of books;let i=index\">\n        <mat-card-header>\n            <img mat-card-avatar [src]=\"book.coverphoto\" alt={{book.title}} />\n            <mat-card-title>{{book.title}}</mat-card-title>\n            <mat-card-subtitle>{{book.author}}</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content (click)=\"openDetailsPopup(book)\">\n            <p>{{book.description}}</p>\n        </mat-card-content>\n        <mat-card-actions align=\"end\">\n            <button mat-raised-button color=\"accent\" (click)=\"openEditBookPopup(book)\">Edit</button>\n            <button mat-raised-button color=\"warn\" (click)=\"openDeleteBookPopup(book._id)\">Delete</button>\n        </mat-card-actions>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent, BookDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDataSource", function() { return BookDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _book_create_book_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../book-create/book-create.component */ "./src/app/book-create/book-create.component.ts");
/* harmony import */ var _book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../book-edit/book-edit.component */ "./src/app/book-edit/book-edit.component.ts");
/* harmony import */ var _book_delete_book_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../book-delete/book-delete.component */ "./src/app/book-delete/book-delete.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../book-detail/book-detail.component */ "./src/app/book-detail/book-detail.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BookComponent = /** @class */ (function () {
    function BookComponent(router, api, dialog) {
        this.router = router;
        this.api = api;
        this.dialog = dialog;
        this.displayedColumns = ['isbn', 'title', 'author'];
        this.dataSource = new BookDataSource(this.api);
    }
    BookComponent.prototype.ngOnInit = function () {
        this.getAllBooks();
    };
    BookComponent.prototype.getAllBooks = function () {
        var _this = this;
        this.api.getBooks()
            .subscribe(function (res) {
            console.log(res);
            _this.books = res;
        }, function (err) {
            console.log(err);
        });
    };
    BookComponent.prototype.openAddNewBookPopup = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_book_create_book_create_component__WEBPACK_IMPORTED_MODULE_4__["BookCreateComponent"], {
            width: '400px',
            height: '550px',
            data: {
                onAdd: function () { return _this.getAllBooks(); }
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    BookComponent.prototype.openEditBookPopup = function (book) {
        var _this = this;
        var dialogRef = this.dialog.open(_book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_5__["BookEditComponent"], {
            width: '400px',
            height: '550px',
            data: {
                book: book,
                onUpdate: function () { return _this.getAllBooks(); }
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    BookComponent.prototype.openDeleteBookPopup = function (bookId) {
        var _this = this;
        event.preventDefault();
        var dialogRef = this.dialog.open(_book_delete_book_delete_component__WEBPACK_IMPORTED_MODULE_6__["BookDeleteComponent"], {
            width: '400px',
            height: '250px',
            data: {
                id: bookId
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
            if (result) {
                _this.api.deleteBook(bookId)
                    .subscribe(function (res) {
                    console.log(res);
                    _this.getAllBooks();
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    BookComponent.prototype.openDetailsPopup = function (book) {
        var _this = this;
        var dialogRef = this.dialog.open(_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_8__["BookDetailComponent"], {
            width: '400px',
            height: '600px',
            data: {
                book: book,
                editBook: function () { return _this.openEditBookPopup(book); },
                deleteBook: function () { return _this.openDeleteBookPopup(book._id); }
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], BookComponent);
    return BookComponent;
}());

var BookDataSource = /** @class */ (function (_super) {
    __extends(BookDataSource, _super);
    function BookDataSource(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        return _this;
    }
    BookDataSource.prototype.connect = function () {
        return this.api.getBooks();
    };
    BookDataSource.prototype.disconnect = function () {
    };
    return BookDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["DataSource"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\UMKC\spring21\web-programming\ICP7\source\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map