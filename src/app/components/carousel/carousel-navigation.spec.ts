import { ComponentFixture, TestBed, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { CarouselNavigationComponent } from './carousel-navigation';
import { GifService } from 'src/app/services/gif.service';
import { LocalStorageService } from 'ngx-webstorage';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { vi, describe, beforeEach, afterEach, it, expect } from 'vitest';

describe('CarouselNavigationComponent', () => {
  let component: CarouselNavigationComponent;
  let fixture: ComponentFixture<CarouselNavigationComponent>;
  let gifServiceSpy: any;
  let localStorageServiceSpy: any;

  beforeEach(async () => {
    gifServiceSpy = {
      getGifs: vi.fn().mockReturnValue(of(['gif1', 'gif2'])),
      reset: vi.fn(),
      gifBufferLength: 50,
      noGifsFound: false,
      gifs: []
    };

    localStorageServiceSpy = {
      retrieve: vi.fn(),
      store: vi.fn()
    };

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
    if ((component as any)._intervalId) {
      clearInterval((component as any)._intervalId);
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should throttle fast clicks on nextGif', fakeAsync(() => {
    const nextGifSpy = vi.spyOn(component, 'nextGif');

    component.triggerNextGif();
    component.triggerNextGif();
    component.triggerNextGif();

    tick(100);
    component.triggerNextGif();

    tick(100);

    tick(1);
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
