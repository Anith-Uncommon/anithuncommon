import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { X } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => void;
}

export function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // Simple login - in a real app, this would call an API
    onLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md p-8 relative bg-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#626E73] hover:text-[#0A1926] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2" style={{ color: '#0A1926' }}>
            Sign In
          </h2>
          <p className="text-sm" style={{ color: '#626E73' }}>
            Access exclusive content and unlock all chapters
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#0A1926' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-[#0A1926] transition-colors"
              style={{ borderColor: '#D9D7CC' }}
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2" style={{ color: '#0A1926' }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-[#0A1926] transition-colors"
              style={{ borderColor: '#D9D7CC' }}
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full text-white py-3"
            style={{ backgroundColor: '#0A1926' }}
          >
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm" style={{ color: '#626E73' }}>
            Don't have an account?{" "}
            <button
              onClick={() => {
                // For now, just close the modal
                // In a real app, this would open a signup form
                alert("Please contact anithuncommon@gmail.com to create an account");
              }}
              className="font-semibold hover:underline"
              style={{ color: '#0A1926' }}
            >
              Contact us
            </button>
          </p>
        </div>
      </Card>
    </div>
  );
}
