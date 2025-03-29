'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { UserTable } from '@/components/users/user-table';
import { users } from '@/data/users';
import { useDebounce } from '@/hooks/useDebounce';
import { Search } from 'lucide-react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');
  
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center md:text-left">
        User Management
      </h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-[180px] bg-white border border-gray-300 rounded-md">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Inactive">Inactive</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
          </SelectContent>
        </Select>
        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger className="w-full md:w-[180px] bg-white border border-gray-300 rounded-md">
            <SelectValue placeholder="Filter by role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="Admin">Admin</SelectItem>
            <SelectItem value="Editor">Editor</SelectItem>
            <SelectItem value="User">User</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <UserTable
        users={users}
        searchTerm={debouncedSearchTerm}
        statusFilter={statusFilter}
        roleFilter={roleFilter}
      />
    </div>
  );
}
