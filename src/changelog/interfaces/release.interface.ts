interface ReleaseAuthor {
	login: string;
	url: string;
	avatar_url: string;
}

export interface Release {
	tag_name: string;
	name: string;
	body: string;
	url: string;
	author: ReleaseAuthor;
	created_at: string;
	published_at: string;
}
