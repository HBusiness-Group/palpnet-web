import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Middleware de autenticação e roteamento — implementação na Fase 2
export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/grupo/:path*/configuracoes',
    '/admin/:path*',
  ],
}
