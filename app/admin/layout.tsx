"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function checkAdmin() {
      console.log("ADMIN CHECK START");

      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      console.log("SESSION:", session);
      console.log("SESSION ERROR:", sessionError);

      if (!mounted) return;

      // Login page does not need admin verification
      if (pathname === "/admin/login") {
        setChecking(false);
        return;
      }

      // No logged-in user
      if (!session) {
        console.log("NO SESSION → LOGIN");
        router.replace("/admin/login");
        return;
      }

      console.log("LOGGED USER:", session.user.email);
      console.log("USER ID:", session.user.id);

      // Check admin permission
      const {
        data: isAdmin,
        error: adminError,
      } = await supabase.rpc("is_loadzy_admin");

      console.log("IS ADMIN:", isAdmin);
      console.log("ADMIN ERROR:", adminError);

      if (!mounted) return;

      if (adminError) {
        console.error("ADMIN RPC ERROR:", adminError);
        setChecking(false);
        return;
      }

      if (!isAdmin) {
        console.log("USER IS NOT ADMIN");
        await supabase.auth.signOut();
        router.replace("/admin/login");
        return;
      }

      console.log("ADMIN VERIFIED ✅");

      setChecking(false);
    }

    checkAdmin();

    return () => {
      mounted = false;
    };
  }, [pathname, router]);

  if (checking && pathname !== "/admin/login") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-100">
        <p className="font-bold text-[#062B55]">
          Checking admin access...
        </p>
      </main>
    );
  }

  return <>{children}</>;
}