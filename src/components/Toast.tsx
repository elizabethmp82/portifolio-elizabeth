"use client";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

type ToastProps = {
  message: string;
  type: "success" | "error" | "loading";
};

export default function Toast({ message, type }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (type !== "loading") {
      const timer = setTimeout(() => setVisible(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [type]);

  if (!visible) return null;

  const icon = {
    success: <CheckCircle className="text-green-500 w-5 h-5" />,
    error: <XCircle className="text-red-500 w-5 h-5" />,
    loading: <Loader2 className="text-blue-500 w-5 h-5 animate-spin" />,
  };

  const bgColor = {
    success: "bg-green-100 border-green-500 text-green-800",
    error: "bg-red-100 border-red-500 text-red-800",
    loading: "bg-blue-100 border-blue-500 text-blue-800",
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 border-l-4 px-4 py-3 shadow-lg rounded-md flex items-center gap-3 w-fit max-w-xs ${bgColor[type]}`}
    >
      {icon[type]}
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
