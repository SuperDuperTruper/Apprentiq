import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { verifyAuth, createErrorResponse } from '@/lib/auth-helpers';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get('Authorization');
    // Verify authentication and roles
    const authResult = await verifyAuth(authHeader);
    if ('error' in authResult) {
      return createErrorResponse(authResult.error, authResult.status);
    }

    const formData = await request.formData();
    const audioFile = formData.get('audio');

    if (!audioFile || !(audioFile instanceof File)) {
      return NextResponse.json(
        { error: 'No valid audio file provided' },
        { status: 400 }
      );
    }

    const transcription = await openai.audio.transcriptions.create({
      file: audioFile,
      model: 'whisper-1',
    });

    return NextResponse.json({ text: transcription.text });
  } catch (error) {
    console.error('Error in speech-to-text API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 