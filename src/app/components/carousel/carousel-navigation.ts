import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core'
import { LocalStorage, LocalStorageService } from 'ngx-webstorage'
import { Subject } from 'rxjs'
import { debounceTime } from 'rxjs/operators'
import { GifService } from 'src/app/services/gif.service'
import { environment } from 'src/environments/environment'

@Component({
  selector: 'carousel-navigation',
  templateUrl: './carousel-navigation.html',
  styleUrls: ['./carousel-navigation.scss'],
  host: {
    class: 'flex flex-col w-full h-full justify-center items-center'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselNavigationComponent implements OnInit {
  @LocalStorage('bgColor') public bgColor: string
  public gifs: string[] = []
  private _index = 0
  private _intervalId: any
  private _isLoadGifsRunning = false
  private nextGifSubject = new Subject<string>()
  private previousGifSubject = new Subject<string>()

  constructor(
    public readonly gifService: GifService,
    private readonly _localStorageService: LocalStorageService,
    private readonly _ngZone: NgZone,
    private readonly _cdRef: ChangeDetectorRef
  ) {
    this.nextGifSubject.pipe(debounceTime(300)).subscribe(async () => this.nextGif())
    this.previousGifSubject.pipe(debounceTime(300)).subscribe(() => this.previousGif())
  }

  public get currentGif(): string {
    return this.gifs[this.index]
  }

  public get index(): number {
    return this._index
  }

  public set index(value: number) {
    if (value < 0 || value >= this.gifService.gifBufferLength) {
      return
    }
    this._index = value
    this._cdRef.detectChanges()
  }

  public async ngOnInit(): Promise<void> {
    await this.loadGifs()
    this.restartInterval()
  }

  public async loadGifs(): Promise<void> {
    if (this._isLoadGifsRunning) { return }
    this._isLoadGifsRunning = true

    const keyword = this._localStorageService.retrieve('keyword') ?? environment.keyword
    this.gifs = await this.gifService.getGifs(keyword).toPromise()

    this._isLoadGifsRunning = false
  }

  public triggerNextGif(): void {
    this.nextGifSubject.next()
  }

  public triggerPreviousGif(): void {
    this.previousGifSubject.next()
  }

  public restartInterval(): void {
    this._ngZone.runOutsideAngular(() => {
      clearInterval(this._intervalId)

      this._intervalId = setInterval(async () => {
        await this.nextGif()
      }, this._localStorageService.retrieve('interval') ?? environment.interval * 1000)
    })
  }

  public async nextGif(): Promise<void> {
    if (this._isLoadGifsRunning) { return }

    if (this.index >= (this.gifService.gifBufferLength - 5)) {
      await this.loadGifs()
      this.index = 0
      console.log('Loading gifs triggered by nextGif()')
    }

    this.restartInterval()

    this.index++
    console.log('Next gif index:', this.index)
    console.log('GifsLength: ', this.gifService.gifs.length)
  }

  public previousGif(): void {
    if (this._isLoadGifsRunning) { return }

    this.index--
    this.restartInterval()

    console.log('Previous gif index:', this.index)
    console.log('GifsLength: ', this.gifService.gifs.length)
  }
}
