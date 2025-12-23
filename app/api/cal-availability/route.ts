// app/api/cal-availability/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: Request) {
  const apiKey = process.env.CALCOM_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Missing Cal.com API key" }, { status: 500 });
  }

  const eventTypeId = "4203674"; // Photography event ID
  const username = "gfkin";

  const now = new Date();
  const fourMonthsLater = new Date();
  fourMonthsLater.setMonth(now.getMonth() + 4);

  const startDate = now.toISOString().split("T")[0];
  const endDate = fourMonthsLater.toISOString().split("T")[0];

  try {
    const response = await axios.get("https://api.cal.com/v1/availability", {
      params: {
        apiKey,
        eventTypeId,
        username,
        dateFrom: startDate,
        dateTo: endDate,
        timeZone: "America/Toronto",
      },
    });

    console.log(response.data)
    return NextResponse.json(response.data);
  } catch (err) {
    console.error("Cal.com availability error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
