export type User = {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'User' | 'Moderator' | 'Viewer';
  status: 'Active' | 'Inactive' | 'Pending';
  locations: { city: string; country: string }[];
  permissions: string[];
};

export type SortDirection = 'asc' | 'desc';
export type SortField = 'name' | 'email' | 'role';