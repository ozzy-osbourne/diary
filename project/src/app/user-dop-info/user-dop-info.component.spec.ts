import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDopInfoComponent } from './user-dop-info.component';

describe('UserDopInfoComponent', () => {
  let component: UserDopInfoComponent;
  let fixture: ComponentFixture<UserDopInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDopInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDopInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
