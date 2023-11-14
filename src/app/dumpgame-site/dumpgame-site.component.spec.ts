import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumpgameSiteComponent } from './dumpgame-site.component';

describe('DumpgameSiteComponent', () => {
  let component: DumpgameSiteComponent;
  let fixture: ComponentFixture<DumpgameSiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DumpgameSiteComponent]
    });
    fixture = TestBed.createComponent(DumpgameSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
