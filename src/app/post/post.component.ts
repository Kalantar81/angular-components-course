import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Post } from '../app.component';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  /** Default value - ChangeDetectionStrategy.Default
   * OnPush - works only when @Input objects/values changed
   * Look on app.component.ts in ngOnInit()
   */
  changeDetection: ChangeDetectionStrategy.OnPush,
  /** None - makes styles of component global */
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('myPost')
  post: Post;

  @Output()
  onRemove = new EventEmitter<number>();

  /** For #info look on app.component.html line */
  @ContentChild('info', {static: true})
  infoRef: ElementRef;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges ', changes);
  }

  ngOnInit() {
    this.infoRef.nativeElement.style.color = 'red';
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  /** Will be called after initialization of #info
   * look on app.component.html
   */
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  /** When content(#info) ready for use */
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  /** When all template(post.component.html) ready for work */
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  removePost(): void {
    this.onRemove.emit(this.post.id);
  }

}
