export interface BitEntry {
	bit: bigint | number;
	name: string;
	represented: boolean;
}

export type BitProducer<T extends bigint | number> = (key: string) => T;
