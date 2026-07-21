"use client";

import { BookCheck } from "lucide-react";
import toast from "react-hot-toast";

interface BorrowButtonProps {
  title: string;
  availableQuantity: number;
}

export function BorrowButton({ title, availableQuantity }: BorrowButtonProps) {
  function handleBorrow() {
    if (availableQuantity < 1) {
      toast.error("This title is currently unavailable.");
      return;
    }

    toast.success(`Borrowing confirmed: ${title}`);
  }

  return (
    <button
      type="button"
      onClick={handleBorrow}
      disabled={availableQuantity < 1}
      className="btn h-13 w-full border-0 bg-[#173f35] px-6 text-white hover:bg-[#24594b] disabled:bg-slate-300 sm:w-auto"
    >
      <BookCheck className="size-5" aria-hidden="true" />
      {availableQuantity > 0 ? "Borrow This Book" : "Currently Unavailable"}
    </button>
  );
}
