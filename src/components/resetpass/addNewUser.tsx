"use client";

import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";

const AddNewUser = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    owner: "",
    gmail: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.username ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.owner ||
      !formData.gmail
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    // Prepare the object to send
    const newUser = {
      username: formData.username,
      knownIps: ["192.168.1.1", "2001:db8::ff00:42:8329"], // Example IPs
      profile: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        staticData: [100, 200, 300],
      },
      owner: formData.owner,
      gmail: formData.gmail,
    };

    try {
      const response = await fetch(
        "https://6666c820a2f8516ff7a4e55a.mockapi.io/api/Shops",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to add new user.");
      }

      toast.success("User added successfully!");
      setFormData({
        username: "",
        firstName: "",
        lastName: "",
        owner: "",
        gmail: "",
      });
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error("Failed to add user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-180 flex-col space-y-2 rounded-lg bg-white p-5 font-mono text-sm shadow-md"
    >
      <Label className="text-xl font-bold">New User</Label>
      <Label htmlFor="username" className="text-lg font-medium">
        Username
      </Label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Enter username"
        className="rounded-lg border p-3"
      />

      <Label htmlFor="firstName" className="text-lg font-medium">
        First Name
      </Label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Enter first name"
        className="rounded-lg border p-3"
      />

      <Label htmlFor="lastName" className="text-lg font-medium">
        Last Name
      </Label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Enter last name"
        className="rounded-lg border p-3"
      />

      <Label htmlFor="owner" className="text-lg font-medium">
        Owner
      </Label>
      <input
        type="text"
        name="owner"
        value={formData.owner}
        onChange={handleChange}
        placeholder="Enter owner"
        className="rounded-lg border p-3"
      />

      <Label htmlFor="gmail" className="text-lg font-medium">
        Gmail
      </Label>
      <input
        type="email"
        name="gmail"
        value={formData.gmail}
        onChange={handleChange}
        placeholder="Enter Gmail"
        className="rounded-lg border p-3"
      />

      <Button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add User"}
      </Button>
    </form>
  );
};

export default AddNewUser;
