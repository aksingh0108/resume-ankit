import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultilevelCommentProjectComponent } from './multilevel-comment-project.component';

describe('MultilevelCommentProjectComponent', () => {
  let component: MultilevelCommentProjectComponent;
  let fixture: ComponentFixture<MultilevelCommentProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultilevelCommentProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultilevelCommentProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
