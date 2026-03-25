import { ComponentFixture, TestBed, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { CarouselNavigationComponent } from './carousel-navigation';
import { GifService } from 'src/app/services/gif.service';
import { LocalStorageService } from 'ngx-webstorage';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CarouselNavigationComponent', () => {
  let component: CarouselNavigationComponent;
  let fixture: ComponentFixture<CarouselNavigationComponent>;
  let gifServiceSpy: jasmine.SpyObj<GifService>;
  let localStorageServiceSpy: jasmine.SpyObj<LocalStorageService>;

  beforeEach(async () => {
    gifServiceSpy = jasmine.createSpyObj('GifService', ['getGifs', 'reset'], {
        gifBufferLength: 50,
        noGifsFound: false,
        gifs: []
    });
    gifServiceSpy.getGifs.and.returnValue(of(['gif1', 'gif2']));
    localStorageServiceSpy = jasmine.createSpyObj('LocalStorageService', ['retrieve', 'store']);

    await TestBed.configureTestingModule({
      declarations: [ CarouselNavigationComponent ],
      providers: [
        { provide: GifService, useValue: gifServiceSpy },
        { provide: LocalStorageService, useValue: localStorageServiceSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    // Clear the interval set in restartInterval
    if ((component as any)._intervalId) {
      clearInterval((component as any)._intervalId);
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should throttle fast clicks on nextGif', fakeAsync(() => {
    const nextGifSpy = spyOn(component, 'nextGif').and.callThrough();

    component.triggerNextGif();
    component.triggerNextGif();
    component.triggerNextGif();

    tick(100);
    component.triggerNextGif();

    tick(100); // Now we are at 200ms total

    // throttleTime(200) with leading:true, trailing:false
    // should allow the first click immediately, then ignore until 200ms have passed.
    // However, throttleTime logic can be tricky with exact timing in fakeAsync.
    // Let's check after the throttle period.

    tick(1); // 201ms
    component.triggerNextGif();
    tick(0);

    expect(nextGifSpy).toHaveBeenCalledTimes(2);
    discardPeriodicTasks();
  }));

  it('should navigate and load in background when near end', fakeAsync(() => {
    (component as any)._index = 45;
    component.nextGif();

    expect(gifServiceSpy.getGifs).toHaveBeenCalled();
    expect(component.index).toBe(46);
    discardPeriodicTasks();
  }));
});
