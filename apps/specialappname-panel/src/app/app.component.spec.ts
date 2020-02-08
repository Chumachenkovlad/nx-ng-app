import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance as AppComponent;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'specialappname-panel'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance as AppComponent;
    expect(app.title).toEqual('specialappname-panel');
  });
});
