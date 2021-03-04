import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import { BookCreateComponent } from './../book-create/book-create.component';
import { BookEditComponent } from '../book-edit/book-edit.component';
import { BookDeleteComponent } from '../book-delete/book-delete.component';
import {Router} from '@angular/router';
import { BookDetailComponent } from '../book-detail/book-detail.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: any;
  displayedColumns = ['isbn', 'title', 'author'];
  dataSource = new BookDataSource(this.api);

  constructor(private router:Router,private api: ApiService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.api.getBooks()
      .subscribe(res => {
        console.log(res);
        this.books = res;
      }, err => {
        console.log(err);
      });
  }
  openAddNewBookPopup() {
    const dialogRef = this.dialog.open(BookCreateComponent, {
      width: '400px',
      height:'550px',
      data: {
        onAdd: () => this.getAllBooks()
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEditBookPopup(book) {
    const dialogRef = this.dialog.open(BookEditComponent, {
      width: '400px',
      height:'550px',
      data: {
        book:book,
        onUpdate: () => this.getAllBooks()
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDeleteBookPopup(bookId) {
    const dialogRef = this.dialog.open(BookDeleteComponent, {
      width: '400px',
      height:'250px',
      data: {
        id:bookId
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result) {
        this.api.deleteBook(bookId)
        .subscribe(res => {
            console.log(res);
            this.getAllBooks();
          }, (err) => {
            console.log(err);
          }
        );
      }
    });
  }

  openDetailsPopup(book) {
    const dialogRef = this.dialog.open(BookDetailComponent, {
      width: '400px',
      height:'600px',
      data: {
        book: book,
        editBook:() => this.openEditBookPopup(book),
        deleteBook:() => this.openDeleteBookPopup(book._id)
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}



export class BookDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super();
  }

  connect() {
    return this.api.getBooks();
  }

  disconnect() {

  }
}
