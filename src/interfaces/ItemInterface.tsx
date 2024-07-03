export default interface Item {
	item_id: number;
	item_name: string;
	description: string;
	quantity: number;
	price: number;
	item_image: Blob;
	branch_id: string; // Foreign key referenced from BranchInterface
	created_at: Date;
	updated_at: Date;
}
