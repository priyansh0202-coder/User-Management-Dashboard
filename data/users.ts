import { User } from '@/types';

export const users: User[] = [
  {
    "id": "usr_1",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "Admin",
    "status": "Active",
    "locations": [{ "city": "New York", "country": "USA" }],
    "permissions": ["read", "write", "delete"]
  },
  {
    "id": "usr_2",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "role": "User",
    "status": "Inactive",
    "locations": [{ "city": "Chicago", "country": "USA" }],
    "permissions": ["read"]
  },
  {
    "id": "usr_3",
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "role": "Editor",
    "status": "Active",
    "locations": [{ "city": "San Francisco", "country": "USA" }],
    "permissions": ["read", "write"]
  },
  {
    "id": "usr_4",
    "name": "Bob Williams",
    "email": "bob.williams@example.com",
    "role": "Moderator",
    "status": "Pending",
    "locations": [{ "city": "Miami", "country": "USA" }],
    "permissions": ["read", "moderate"]
  },
  {
    "id": "usr_5",
    "name": "Charlie Brown",
    "email": "charlie.brown@example.com",
    "role": "Viewer",
    "status": "Active",
    "locations": [{ "city": "Austin", "country": "USA" }],
    "permissions": ["read"]
  },
  {
    "id": "usr_6",
    "name": "David Clark",
    "email": "david.clark@example.com",
    "role": "User",
    "status": "Active",
    "locations": [{ "city": "Seattle", "country": "USA" }],
    "permissions": ["read"]
  },
  {
    "id": "usr_7",
    "name": "Eve Adams",
    "email": "eve.adams@example.com",
    "role": "Admin",
    "status": "Inactive",
    "locations": [{ "city": "Boston", "country": "USA" }],
    "permissions": ["read", "write", "delete"]
  },
  {
    "id": "usr_8",
    "name": "Frank Miller",
    "email": "frank.miller@example.com",
    "role": "Moderator",
    "status": "Active",
    "locations": [{ "city": "Las Vegas", "country": "USA" }],
    "permissions": ["read", "moderate"]
  },
  {
    "id": "usr_9",
    "name": "Grace Lee",
    "email": "grace.lee@example.com",
    "role": "User",
    "status": "Pending",
    "locations": [{ "city": "Dallas", "country": "USA" }],
    "permissions": ["read"]
  },
  {
    "id": "usr_10",
    "name": "Henry White",
    "email": "henry.white@example.com",
    "role": "Editor",
    "status": "Active",
    "locations": [{ "city": "San Diego", "country": "USA" }],
    "permissions": ["read", "write"]
  },
  {
    "id": "usr_11",
    "name": "Isabella Moore",
    "email": "isabella.moore@example.com",
    "role": "Viewer",
    "status": "Inactive",
    "locations": [{ "city": "Orlando", "country": "USA" }],
    "permissions": ["read"]
  },
  {
    "id": "usr_12",
    "name": "Jack Robinson",
    "email": "jack.robinson@example.com",
    "role": "User",
    "status": "Active",
    "locations": [{ "city": "Portland", "country": "USA" }],
    "permissions": ["read"]
  },
  {
    "id": "usr_13",
    "name": "Karen Evans",
    "email": "karen.evans@example.com",
    "role": "Admin",
    "status": "Pending",
    "locations": [{ "city": "Phoenix", "country": "USA" }],
    "permissions": ["read", "write", "delete"]
  },
  {
    "id": "usr_14",
    "name": "Leo Walker",
    "email": "leo.walker@example.com",
    "role": "Moderator",
    "status": "Active",
    "locations": [{ "city": "Philadelphia", "country": "USA" }],
    "permissions": ["read", "moderate"]
  },
  {
    "id": "usr_15",
    "name": "Mia Scott",
    "email": "mia.scott@example.com",
    "role": "Editor",
    "status": "Inactive",
    "locations": [{ "city": "Denver", "country": "USA" }],
    "permissions": ["read", "write"]
  },
  {
    "id": "usr_16",
    "name": "Nathan Harris",
    "email": "nathan.harris@example.com",
    "role": "User",
    "status": "Active",
    "locations": [{ "city": "San Antonio", "country": "USA" }],
    "permissions": ["read"]
  },
  {
    "id": "usr_17",
    "name": "Olivia Martinez",
    "email": "olivia.martinez@example.com",
    "role": "Admin",
    "status": "Active",
    "locations": [{ "city": "Charlotte", "country": "USA" }],
    "permissions": ["read", "write", "delete"]
  },
  {
    "id": "usr_18",
    "name": "Paul Anderson",
    "email": "paul.anderson@example.com",
    "role": "Viewer",
    "status": "Inactive",
    "locations": [{ "city": "Nashville", "country": "USA" }],
    "permissions": ["read"]
  },
  {
    "id": "usr_19",
    "name": "Quinn Thomas",
    "email": "quinn.thomas@example.com",
    "role": "User",
    "status": "Pending",
    "locations": [{ "city": "Indianapolis", "country": "USA" }],
    "permissions": ["read"]
  },
  {
    "id": "usr_20",
    "name": "Rachel Carter",
    "email": "rachel.carter@example.com",
    "role": "Moderator",
    "status": "Active",
    "locations": [{ "city": "Jacksonville", "country": "USA" }],
    "permissions": ["read", "moderate"]
  }
]