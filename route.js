// Next.js health check API endpoint for App Router
// File: app/api/health/route.js

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Basic health check
    const healthCheck = {
      status: 'OK',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      version: process.env.npm_package_version || '1.0.0',
    };

    // You can add additional health checks here
    // For example: database connectivity, external services, etc.
    
    return NextResponse.json(healthCheck, { status: 200 });
  } catch (error) {
    const errorResponse = {
      status: 'ERROR',
      timestamp: new Date().toISOString(),
      error: error.message,
    };
    
    return NextResponse.json(errorResponse, { status: 503 });
  }
}

// Optional: Add other HTTP methods if needed
export async function HEAD() {
  return new NextResponse(null, { status: 200 });
}