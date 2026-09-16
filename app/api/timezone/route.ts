// app/api/users/route.ts

import { NextRequest, NextResponse } from "next/server";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// GET /api/users
export async function GET() {
  const query = `
    query Navigation {
      navigation {
        locale
        logo {
          url
        }
      }
    }
  `;

  const response = await fetch("https://strapi.arventa.net/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });

  const result = await response.json();

  return NextResponse.json(result);
}

// POST /api/users
export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name) {
    return NextResponse.json(
      { error: "Name is required" },
      { status: 400 }
    );
  }

  const user = {
    id: users.length + 1,
    name: body.name,
  };

  users.push(user);

  return NextResponse.json(user, { status: 201 });
}