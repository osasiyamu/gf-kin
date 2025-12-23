// app/api/cal-booking/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

const EVENT_TYPE_ID = 4203674; // 🔴 replace with your real eventTypeId

export async function POST(req: Request) {
  try {
    const { name, email, start, duration } = await req.json();

    if (!name || !email || !start || !duration) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Example: 30-minute appointment
    const startDate = new Date(start);
    const endDate = new Date(startDate.getTime() + duration * 60 * 1000);

    const response = await axios.post(
      `https://api.cal.com/v1/bookings?apiKey=${process.env.CALCOM_API_KEY}`,
      {
        users: ["gfkin"],
        eventTypeId: EVENT_TYPE_ID,
        start: startDate.toISOString(),
        end: endDate.toISOString(),
        timeZone: "America/Toronto", // Ottawa 🇨🇦
        language: "en",
        responses: {
          name,
          email,
          location: {
            value: "inPerson",
            optionValue: ""
          }
        },
        metadata: {}
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    return NextResponse.json({
      message: "Booking successful",
      data: response.data
    });
  } catch (error) {
    console.error(
      "Cal.com booking error:",
      axios.isAxiosError(error)
        ? error.response?.data || error.message
        : error
    );

    return NextResponse.json(
      { error: "Booking failed" },
      { status: 500 }
    );
  }
}
