"use client";

import React, { useState, useEffect } from "react";
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

interface User {
  id: string;
  username: string;
  gmail: string;
  password: string;
}

const UserDataTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Function to fetch user data
  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://6666c820a2f8516ff7a4e55a.mockapi.io/api/Shops",
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setUsers(data);
      toast.success("done fetching");
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="w-180 rounded-lg bg-white p-5 font-mono shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <Label className="text-xl font-bold">User Data Table</Label>
        <Button
          onClick={fetchUserData}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          {loading ? "Refreshing..." : "Refresh"}
        </Button>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">#</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Username
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Gmail
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Password
            </th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.username}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.gmail}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.password}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={4}
                className="border border-gray-300 px-4 py-2 text-center"
              >
                {loading ? "Loading..." : "No data available"}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserDataTable;
