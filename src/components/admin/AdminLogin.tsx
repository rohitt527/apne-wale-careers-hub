
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, User } from "lucide-react";

interface AdminLoginProps {
  onLogin: (username: string, password: string) => boolean;
}

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const success = onLogin(username, password);
      
      if (!success) {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-6">
        <div className="bg-brand-dark/10 p-3 inline-block rounded-full">
          <Lock className="h-6 w-6 text-brand-dark" />
        </div>
        <h2 className="text-xl font-semibold mt-2">Admin Login</h2>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center border rounded-md px-3 py-2">
          <User className="h-4 w-4 text-gray-500 mr-2" />
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center border rounded-md px-3 py-2">
          <Lock className="h-4 w-4 text-gray-500 mr-2" />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0"
            required
          />
        </div>
      </div>
      
      {error && (
        <div className="bg-red-50 text-red-700 p-2 rounded text-sm">
          {error}
        </div>
      )}
      
      <Button 
        type="submit" 
        className="w-full bg-brand-red hover:bg-red-700"
        disabled={isLoading}
      >
        {isLoading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};

export default AdminLogin;
