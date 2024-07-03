export default interface Admin {
	admin_id: number;
	username: string;
	password: string;
	role: "admin" | "branch_user";
	branch_id: string; // Foreign key referenced from BranchInterface
}
