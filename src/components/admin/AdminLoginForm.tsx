
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface AdminLoginFormProps {
  onLogin: () => void;
}

const AdminLoginForm = ({ onLogin }: AdminLoginFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock authentication - in a real app, this would validate against a database
    if (username === "admin" && password === "password") {
      toast({
        title: "Logged in successfully",
        description: "Welcome to the admin dashboard",
      });
      onLogin();
    } else {
      toast({
        title: "Authentication failed",
        description: "Invalid username or password",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <Button type="submit" className="w-full bg-albania-red hover:bg-red-700">
            Login
          </Button>
        </div>
      </form>
      <div className="mt-4 text-sm text-center text-gray-500">
        <p>For demo purposes, use:</p>
        <p>Username: admin</p>
        <p>Password: password</p>
      </div>
    </div>
  );
};

export default AdminLoginForm;
