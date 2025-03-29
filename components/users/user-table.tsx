'use client';

import { useState } from 'react';
import { User, SortDirection, SortField } from '@/types';
import { StatusBadge } from '@/components/ui/status-badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ArrowUpDown, Eye, Pencil } from 'lucide-react';

interface UserTableProps {
  users: User[];
  searchTerm: string;
  statusFilter: string;
  roleFilter: string;
}

export function UserTable({
  users,
  searchTerm,
  statusFilter,
  roleFilter,
}: UserTableProps) {
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredUsers = users
    .filter((user) => {
      const matchesSearch =
        searchTerm === '' ||
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === 'all' || user.status === statusFilter;

      const matchesRole = 
        roleFilter === 'all' || user.role === roleFilter;

      return matchesSearch && matchesStatus && matchesRole;
    })
    .sort((a, b) => {
      const multiplier = sortDirection === 'asc' ? 1 : -1;
      return a[sortField].localeCompare(b[sortField]) * multiplier;
    });

  return (
    <div className="overflow-x-auto rounded-md border m-1">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow className="bg-gray-100">
            {['Name', 'Email', 'Role'].map((field) => (
              <TableHead
                key={field}
                className="cursor-pointer px-4 py-2 text-left text-sm font-medium text-gray-700"
                onClick={() => handleSort(field.toLowerCase() as SortField)}
              >
                {field}
                <ArrowUpDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
            ))}
            <TableHead className="px-4 py-2">Status</TableHead>
            <TableHead className="px-4 py-2 text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id} className="border-b">
              <TableCell className="px-4 py-3 text-sm font-medium">{user.name}</TableCell>
              <TableCell className="px-4 py-3 text-sm">{user.email}</TableCell>
              <TableCell className="px-4 py-3 text-sm">{user.role}</TableCell>
              <TableCell className="px-4 py-3">
                <StatusBadge status={user.status} />
              </TableCell>
              <TableCell className="px-4 py-3 text-right space-x-2">
                <Button variant="outline" size="sm" onClick={() => console.log('View', user.id)}>
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => console.log('Edit', user.id)}>
                  <Pencil className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
