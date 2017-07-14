import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CarrotJuiceService } from "./carrot-juice.service";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/from';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [CarrotJuiceService],
      imports: [HttpModule]
    }).compileComponents();
  }));

  describe('just the logic', () => {
    it('should create the app', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }));

    it(`should have as title 'app'`, async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('Testilicious');
    }));

    it(`should add a new item through addItem() to the items array`, async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance as AppComponent;
      expect(app.items).toBeTruthy();
      expect(app.items.length).toBe(0);
      
      app.todoName = 'Leave at 3pm';
      app.addItem();

      expect(app.todoName).toBe('');
      expect(app.items.length).toBe(1);
      expect(app.items[0]).toBe('Leave at 3pm');
    }));

    it(`should use the CJS when AppComponent#makeJuiceFromTheWeb gets called`, async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const service = fixture.debugElement.injector.get(CarrotJuiceService);
      const spy = spyOn(service, 'makeJuiceFromTheWeb')
        .and.returnValue(Observable.from(['not a good source of vitamins and minerals']));

      const component = fixture.debugElement.componentInstance as AppComponent;
      component.juiceIt();
      expect(component.juice).toBe('not a good source of vitamins and minerals');
    }));
  });

  describe('lovely ui', () => {
    it('should render title in a h1 tag', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent)
        .toContain('Welcome to Testilicious!');
    }));

    it('should render a difrernt title in a h1 tag when I change it', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const comp = fixture.debugElement.componentInstance as AppComponent;
      comp.title = 'Bob';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent)
        .toContain('Welcome to Bob!');
    }));

    it('should render my items in the list', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const comp = fixture.debugElement.componentInstance as AppComponent;
      comp.items.push('one');
      comp.items.push('two');
      comp.items.push('three');
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      let items = compiled.querySelectorAll('li.todoItem');
      expect(items.length).toBe(3);
    }));
  });
});
