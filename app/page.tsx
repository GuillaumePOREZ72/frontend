"use client"

import { useEffect, useState } from "react";
import api from "./api";
import toast from "react-hot-toast";

type Transaction = {
  id: string;
  text: string;
  amount: number;
  created_at: string;
}

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const getTransactions = async() => {
    try {
      const res = await api.get<Transaction[]>("transactions/")
      setTransactions(res.data)
      toast.success("Transactions chargées")
    } catch (error) {
      console.error("Erreur chargement transactions", error)
      toast.error("Erreur chargement transactions")
    }
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <button className="btn btn-sm">
      test
    </button>
  );
}
