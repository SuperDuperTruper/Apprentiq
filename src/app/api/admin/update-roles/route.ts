import { NextResponse } from 'next/server';
import { verifyAuth } from '@/lib/auth-helpers';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const sessionToken = cookies().get('session')?.value;
    const authResult = await verifyAuth(sessionToken, true); // Require admin
    
    if (authResult.error) {
      return NextResponse.json({ error: authResult.error }, { status: authResult.status });
    }

    const { userId, role } = await request.json();

    if (!userId || !role) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // Update user role in Cloudflare D1
    const response = await fetch(`${process.env.CLOUDFLARE_WORKER_URL}/admin/update-role`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionToken}`,
      },
      body: JSON.stringify({ userId, role }),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json({ error: error.message }, { status: response.status });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating user role:', error);
    return NextResponse.json(
      { error: 'Failed to update user role' },
      { status: 500 }
    );
  }
} 