import { NextResponse } from "next/server";

export function GET(request) {
  const works = [
    { name: "Documentation", reportTo: "SS Kirvani", deadLine: "20.05.2026" },
    {
      name: "Testing",
      reportTo: "MK Nihar",
      deadLine: "20.05.2026",
    },
    {
      name: "Deployment",
      reportTo: "SS Kirvani",
      deadLine: "23.05.2026",
    },
  ];

 return  NextResponse.json(works);
}
