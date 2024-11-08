import { NextResponse } from 'next/server';
import users from './user.json';

export async function GET(request: Request) {
	return NextResponse.json(users);
}

// export async function POST(request: Request) {
//   return NextResponse.json(users);
// }
