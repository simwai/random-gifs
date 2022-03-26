import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core'
import { LocalStorage, LocalStorageService } from 'ngx-webstorage'
import { GifService } from 'src/app/services/gif.service'
import { environment } from 'src/environments/environment'

@Component({
  selector: 'carousel-navigation',
  templateUrl: './carousel-navigation.html',
  styleUrls: ['./carousel-navigation.scss'],
  host: {
    class: 'h-full flex flex-col justify-center items-center'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselNavigationComponent implements OnInit {
  // tslint:disable no-floating-promises
  @LocalStorage('bgColor') public bgColor: string

  public gifs: string[] = []

  private _index = 0
  private _intervalId: any

  private _isLoadGifsRunning = false

  constructor(
    private readonly _localStorageService: LocalStorageService,
    private readonly _gifService: GifService,
    private readonly _ngZone: NgZone,
    private readonly _cdRef: ChangeDetectorRef
  ) {}

  public get currentGif(): string {
    console.log(this.gifs[this.index])

    return this.gifs[this.index]
  }

  public get index(): number {
    return this._index
  }

  public set index(value: number) {
    this._index = value

    this._cdRef.detectChanges()
  }

  public ngOnInit(): void {
    this.gifs = []
    this.index = 0;

    (async () =>  {
      await this.loadGifs()
    })()
  }

  public async loadGifs(): Promise<void> {
    this._isLoadGifsRunning = true

    const keyword = this._localStorageService.retrieve('keyword') ?? environment.keyword
    const gifUrls = await this._gifService.getGifs(keyword).toPromise()

    this.gifs = gifUrls

    this.restartInterval()
    this._cdRef.detectChanges()

    this._isLoadGifsRunning = false
  }

  public async nextGif(): Promise<void> {
    // load gifs before the end is reached
    if (!this.gifs[this.index + 5] && !this._isLoadGifsRunning) {
      await this.loadGifs()
    } else {
      this.restartInterval()
    }

    this.index++

    console.log(this.index)
    console.log('gifsLength: ' + this._gifService.gifs.length)
  }

  public previousGif(): void {
    if ((this.index - 1) < 0) {
      console.log(this.index)

      return
    }

    this.restartInterval()
    this.index--

    console.log(this.index)
  }

  public restartInterval(): void {
    this._ngZone.runOutsideAngular(() => {
    clearInterval(this._intervalId)

    this._intervalId = setInterval(async () => {
          if (!this.gifs[this.index + 5]) {
            await this.loadGifs()
          }

          this.index++
          console.log(this.index)
      }, this._localStorageService.retrieve('interval') ?? environment.interval * 1000)
    })
  }
}
