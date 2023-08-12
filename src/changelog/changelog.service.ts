import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { Release } from './interfaces';
import { SharedReplayRefresh } from './helpers';

@Injectable()
export class ChangelogService {
	private readonly dataSource = new SharedReplayRefresh<Release[]>();

	private readonly changelog$ = this.httpService
		.get<Release[]>('repos/necordjs/necord/releases')
		.pipe(map(res => res.data));

	public constructor(private readonly httpService: HttpService) {}

	public get changelog() {
		return this.dataSource.sharedReplayTimerRefresh(this.changelog$, 1, 1000 * 60 * 60);
	}
}
