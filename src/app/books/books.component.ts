import {Component,} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { availableClasses, Book, BOOKS } from './books';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {

  myControl = new FormControl<string>('');
  options: string[] = availableClasses;
  filteredOptions: Observable<string[]>;

  ALL_BOOKS = BOOKS

  booksToDisplay$ = new BehaviorSubject<Book[]>([])

  constructor() {

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = value
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );

    const books = this.ALL_BOOKS.filter(book => book.used_classes?.length > 0)
    books.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

    this.booksToDisplay$.next(books)
  }


  displayFn(user: string): string {
    return user
  }

  private _filter(name: string): string[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSelect(event: MatAutocompleteSelectedEvent) {
    const selectedClass = event.option.value
    const classBooks = BOOKS.filter(book => book.used_classes.indexOf(selectedClass) >= 0)

    this.booksToDisplay$.next(classBooks)
  }
}
