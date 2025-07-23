# Anexation Sports

Global Sports Tracker Platform

## Overview

Anexation Sports tracks real-time scores, stats, and events for major sports leagues worldwide.  
Tech stack: Next.js (frontend), Express (backend), PostgreSQL, Redis, Socket.io.

## Monorepo Structure

- `/frontend` — Next.js app
- `/backend` — Express API & WebSocket gateway
- `/db` — PostgreSQL schema & migrations
- `/docs` — Architecture, feature, and API docs
- `/scripts` — Utilities, tests, mock data

## Getting Started

1. Clone the repo
2. Install dependencies in `/frontend` and `/backend`
3. Set up `.env` files (use `.env.example` as template)
4. Start backend: `cd backend && npm run dev`
5. Start frontend: `cd frontend && npm run dev`
6. Access app at `localhost:3000`

## Documentation

See `/docs` for full architecture and feature instructions.
