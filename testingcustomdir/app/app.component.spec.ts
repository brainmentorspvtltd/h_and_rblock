import { MyService } from './app.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
describe('Testing App Component',()=>{
//let appComponent:AppComponent;
let fixture:ComponentFixture<AppComponent>;
// The Component Instance can only be access with in the fixture


// This is a Setup method which will call Before any Test Case
beforeEach(()=>{
  // TestBed Actually do the same Job as done by NgModule in Angular
  TestBed.configureTestingModule({
    declarations:[AppComponent]
  });
  fixture = TestBed.createComponent(AppComponent);


});
it('should create the app object',()=>{
  const appObject = fixture.componentInstance; // Create Component Instance
  expect(appObject).toBeTruthy();  // Checking Object is Present...
});
it('should h1 element same as Amit',()=>{

  fixture.detectChanges();
  const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('h1').innerText).toContain('Amit');


});

it('should button click and increase the value',()=>{
  const appObject = fixture.componentInstance;
  const compiled = fixture.debugElement.nativeElement;
  fixture.detectChanges();

  const button = compiled.querySelector('button');
  fixture.detectChanges();
  console.log('Button is ',button);

button.click();
  expect(appObject.result).toBeGreaterThanOrEqual(100);
  //expect(compiled.querySelector('h1').textContent).toContain('Amit');


});

it('test service',()=>{
  const service = new MyService();
  const result = service.getData();
  expect(result).toContain("service");
});


// This is a Tear Method which will call After any TestCase
afterEach(()=>{

})

});
