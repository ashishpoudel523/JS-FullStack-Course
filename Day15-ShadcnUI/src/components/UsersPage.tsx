import axios from "axios";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Building2,
  MoreHorizontal,
  Edit2,
  Trash2,
  Eye,
  Plus,
  Save,
} from "lucide-react";

type User = {
  id: string;
  name: string;
  email: string;
  type: string;
  status: string;
  revenue: string;
  joinDate: string;
};

async function getUsers() {
  try {
    const baseUrl = "https://69733836b5f46f8b582687ec.mockapi.io/movies_app/users";
    const limit = 100;
    let page = 1;
    const allUsers: User[] = [];

    while (true) {
      const response = await axios.get<User[]>(baseUrl, {
        params: { page, limit },
      });
      const pageUsers = response.data ?? [];
      allUsers.push(...pageUsers);

      if (pageUsers.length < limit) break;
      page += 1;
    }

    return allUsers;
  } catch (error) {
    console.error(error);
    return [];
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case "Active":
      return "bg-green-900/30 text-green-300 border-green-700";
    case "Inactive":
      return "bg-slate-700/30 text-slate-300 border-slate-600";
    default:
      return "bg-slate-700/30 text-slate-300";
  }
}

function getTypeColor(type: string) {
  switch (type) {
    case "Enterprise":
      return "bg-blue-900/30 text-blue-300 border-blue-700";
    case "Mid-Market":
      return "bg-purple-900/30 text-purple-300 border-purple-700";
    case "SMB":
      return "bg-green-900/30 text-green-300 border-green-700";
    case "Startup":
      return "bg-amber-900/30 text-amber-300 border-amber-700";
    default:
      return "bg-slate-700/30 text-slate-300";
  }
}

export function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [draftUser, setDraftUser] = useState<User | null>(null);
  const [isCreatingUser, setIsCreatingUser] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      const data = await getUsers();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  const handleAddUser = () => {
    const nextId =
      users.length > 0
        ? String(Math.max(...users.map((user) => Number(user.id) || 0)) + 1)
        : "1";

    const newUser: User = {
      id: nextId,
      name: "",
      email: "",
      type: "Startup",
      status: "Active",
      revenue: "$0",
      joinDate: "Today",
    };

    setUsers((prev) => [newUser, ...prev]);
    setEditingUserId(newUser.id);
    setDraftUser(newUser);
    setIsCreatingUser(true);
  };

  const handleEditUser = (user: User) => {
    setEditingUserId(user.id);
    setDraftUser({ ...user });
    setIsCreatingUser(false);
  };

  const handleDraftChange = (field: keyof User, value: string) => {
    setDraftUser((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  const handleSaveUser = () => {
    if (!draftUser) return;

    setUsers((prev) =>
      prev.map((user) => (user.id === draftUser.id ? draftUser : user))
    );
    setEditingUserId(null);
    setDraftUser(null);
    setIsCreatingUser(false);
  };

  const handleDeleteUser = (id: string) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    if (editingUserId === id) {
      setEditingUserId(null);
      setDraftUser(null);
      setIsCreatingUser(false);
    }
  };

  const handleCancelEdit = () => {
    if (isCreatingUser && editingUserId !== null) {
      setUsers((prev) => prev.filter((user) => user.id !== editingUserId));
    }
    setEditingUserId(null);
    setDraftUser(null);
    setIsCreatingUser(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="p-8 max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Users</h1>
            <p className="text-slate-400">Manage and track all your users</p>
          </div>
          <Button
            onClick={handleAddUser}
            className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
          >
            <Plus className="w-4 h-4" />
            Add User
          </Button>
        </div>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              All Users
            </CardTitle>
            <CardDescription className="text-slate-400">
              {users.length} users in your system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border border-slate-700 overflow-hidden">
              <Table>
                <TableHeader className="bg-slate-700/50">
                  <TableRow className="border-slate-700 hover:bg-slate-700/30">
                    <TableHead className="text-slate-300">User Name</TableHead>
                    <TableHead className="text-slate-300">Email</TableHead>
                    <TableHead className="text-slate-300">Type</TableHead>
                    <TableHead className="text-slate-300">Status</TableHead>
                    <TableHead className="text-slate-300">Revenue</TableHead>
                    <TableHead className="text-slate-300">Join Date</TableHead>
                    <TableHead className="text-right text-slate-300">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => {
                    const isEditing = editingUserId === user.id;
                    const rowData = isEditing && draftUser ? draftUser : user;

                    return (
                      <TableRow
                        key={user.id}
                        className="border-slate-700 hover:bg-slate-700/30 transition-colors"
                      >
                        <TableCell className="text-white font-medium">
                          {isEditing ? (
                            <input
                              value={rowData.name}
                              onChange={(event) =>
                                handleDraftChange("name", event.target.value)
                              }
                              placeholder="User name"
                              className="w-full rounded-md border border-slate-600 bg-slate-900 px-2 py-1 text-sm text-white outline-none focus:border-blue-500"
                            />
                          ) : (
                            user.name
                          )}
                        </TableCell>
                        <TableCell className="text-slate-300">
                          {isEditing ? (
                            <input
                              value={rowData.email}
                              onChange={(event) =>
                                handleDraftChange("email", event.target.value)
                              }
                              placeholder="Email"
                              className="w-full rounded-md border border-slate-600 bg-slate-900 px-2 py-1 text-sm text-white outline-none focus:border-blue-500"
                            />
                          ) : (
                            user.email
                          )}
                        </TableCell>
                        <TableCell>
                          {isEditing ? (
                            <select
                              value={rowData.type}
                              onChange={(event) =>
                                handleDraftChange("type", event.target.value)
                              }
                              className="w-full rounded-md border border-slate-600 bg-slate-900 px-2 py-1 text-sm text-white outline-none focus:border-blue-500"
                            >
                              <option value="Enterprise">Enterprise</option>
                              <option value="Mid-Market">Mid-Market</option>
                              <option value="SMB">SMB</option>
                              <option value="Startup">Startup</option>
                            </select>
                          ) : (
                            <Badge
                              variant="outline"
                              className={getTypeColor(user.type)}
                            >
                              {user.type}
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          {isEditing ? (
                            <select
                              value={rowData.status}
                              onChange={(event) =>
                                handleDraftChange("status", event.target.value)
                              }
                              className="w-full rounded-md border border-slate-600 bg-slate-900 px-2 py-1 text-sm text-white outline-none focus:border-blue-500"
                            >
                              <option value="Active">Active</option>
                              <option value="Inactive">Inactive</option>
                            </select>
                          ) : (
                            <Badge
                              variant="outline"
                              className={getStatusColor(user.status)}
                            >
                              {user.status}
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-white font-medium">
                          {isEditing ? (
                            <input
                              value={rowData.revenue}
                              onChange={(event) =>
                                handleDraftChange("revenue", event.target.value)
                              }
                              placeholder="$0"
                              className="w-full rounded-md border border-slate-600 bg-slate-900 px-2 py-1 text-sm text-white outline-none focus:border-blue-500"
                            />
                          ) : (
                            user.revenue
                          )}
                        </TableCell>
                        <TableCell className="text-slate-300">
                          {isEditing ? (
                            <input
                              value={rowData.joinDate}
                              onChange={(event) =>
                                handleDraftChange("joinDate", event.target.value)
                              }
                              placeholder="Join date"
                              className="w-full rounded-md border border-slate-600 bg-slate-900 px-2 py-1 text-sm text-white outline-none focus:border-blue-500"
                            />
                          ) : (
                            user.joinDate
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 hover:bg-slate-600"
                              >
                                <MoreHorizontal className="h-4 w-4 text-slate-300" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                              align="end"
                              className="bg-slate-800 border-slate-700"
                            >
                              <DropdownMenuItem className="text-slate-200 cursor-pointer gap-2 flex items-center hover:bg-slate-700">
                                <Eye className="w-4 h-4" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => handleEditUser(user)}
                                className="text-slate-200 cursor-pointer gap-2 flex items-center hover:bg-slate-700"
                              >
                                <Edit2 className="w-4 h-4" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={handleSaveUser}
                                disabled={!isEditing}
                                className="text-emerald-300 cursor-pointer gap-2 flex items-center hover:bg-emerald-900/30 disabled:opacity-40"
                              >
                                <Save className="w-4 h-4" />
                                Save
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => handleDeleteUser(user.id)}
                                className="text-red-400 cursor-pointer gap-2 flex items-center hover:bg-red-900/30"
                              >
                                <Trash2 className="w-4 h-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                          {isEditing && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={handleCancelEdit}
                              className="ml-2 text-slate-300 hover:bg-slate-600"
                            >
                              Cancel
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
