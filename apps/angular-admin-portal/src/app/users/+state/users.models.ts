/**
 * Interface for the 'Users' data
 */
export interface UsersEntity {
  id: string | number; // Primary ID
  name: string;
  email: string;
  profilepicture: string;
  location: string;
  createdat: string;
}

export interface UsersListResponse {
  page: number;
  per_page: number;
  totalrecord: number;
  total_pages: number;
  data: Array<UsersEntity>
}

