import { Observable, SchedulerLike, shareReplay } from 'rxjs';

export class SharedReplayRefresh<T> {
	private sharedReplay$: Observable<T>;
	private subscriptionTime: number;

	sharedReplayTimerRefresh(
		source: Observable<T>,
		bufferSize = 1,
		windowTime = 3000000,
		scheduler?: SchedulerLike
	): Observable<T> {
		const currentTime = new Date().getTime();
		if (!this.sharedReplay$ || currentTime - this.subscriptionTime > windowTime) {
			this.sharedReplay$ = source.pipe(shareReplay(bufferSize, windowTime, scheduler));
			this.subscriptionTime = currentTime;
		}

		return this.sharedReplay$;
	}
}
