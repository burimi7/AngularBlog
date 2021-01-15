import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './edit.component';
import {DebugElement} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from 'protractor';


describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [ EditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeAll(() => {
    const fixture = TestBed.createComponent(EditComponent);
    const app = fixture.componentInstance;
    expect(app.ArticleToEdit.title).toEqual('');
    expect(app.ArticleToEdit.picture).toEqual('');
    expect(app.ArticleToEdit.description).toEqual('');
    expect(app.ArticleToEdit.dtposted).toEqual('');
  })


afterEach(() => {
  const fixture = TestBed.createComponent(EditComponent);
    const app = fixture.componentInstance;
    expect(app.ArticleToEdit.title).not.toEqual('');
});


});
