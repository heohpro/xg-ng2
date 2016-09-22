/**
 * Created by heqingyang on 16/9/22.
 */
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ApiService } from './shared';
import { AppComponent } from './app.component';

describe('App', () => {
    // provide our implementations or mocks to the dependency injector
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent],
            providers: [ApiService, provideRouter([])]
        });
    });

    it('should have an url', () => {
        let fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        expect(fixture.debugElement.componentInstance.url).toEqual('https://github.com/preboot/angular2-webpack');
    });

});
