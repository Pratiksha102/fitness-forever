import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
  const { data, error } = await supabase.from("users").select("*").limit(1);

  if (error) {
    return NextResponse.json({ message: "Supabase connection failed", error }, { status: 500 });
  }
  console.log("is this inside get")
  return NextResponse.json({ message: "Supabase is connected!", data }, { status: 200 });
}
