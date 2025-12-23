import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      service,
      serviceId,
      price,
      durationMinutes,
      startTime,
      endTime,
      notes,
    } = body;

    if (
      !name ||
      !email ||
      !service ||
      !serviceId ||
      !price ||
      !durationMinutes ||
      !startTime ||
      !endTime
    ) {
      return NextResponse.json(
        { error: "Missing required booking fields" },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("bookings").insert([
      {
        name,
        email,
        phone,
        service,
        service_id: serviceId,
        price,
        duration_minutes: durationMinutes,
        start_time: startTime,
        end_time: endTime,
        notes,
      },
    ]);

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Booking saved successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Booking insert error:", err);
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
