
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import AdminLogin from "@/components/admin/AdminLogin";

type AdminAuthProps = {
  children: React.ReactNode;
  redirectTo?: string;
};

export const AdminAuth = ({ children, redirectTo = "/blog" }: AdminAuthProps) => {
  const { isAdmin, adminLogin } = useAuth();
  const navigate = useNavigate();
  
  if (!isAdmin) {
    return (
      <div className="max-w-md mx-auto my-10">
        <Card>
          <CardContent className="p-6">
            <AdminLogin onLogin={adminLogin} />
          </CardContent>
        </Card>
      </div>
    );
  }
  
  return <>{children}</>;
};
