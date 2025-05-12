import { NextResponse } from 'next/server';

const HUGGING_FACE_API_URL = "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill";

export async function POST(req: Request) {
  try {
    // Check if API key is configured
    if (!process.env.HUGGING_FACE_API_KEY) {
      console.error('Hugging Face API key is not configured');
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const { message } = await req.json();

    console.log('Sending request to Hugging Face API...');
    const response = await fetch(HUGGING_FACE_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: message
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Hugging Face API Error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText
      });
      throw new Error(`API call failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Received response:', data);
    
    return NextResponse.json({
      message: data[0]?.generated_text || "I apologize, but I couldn't generate a response. Please try again."
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: "Failed to get response from AI" },
      { status: 500 }
    );
  }
} 