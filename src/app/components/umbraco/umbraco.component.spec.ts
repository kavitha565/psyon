import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmbracoComponent } from './umbraco.component';

describe('UmbracoComponent', () => {
  let component: UmbracoComponent;
  let fixture: ComponentFixture<UmbracoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmbracoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmbracoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
