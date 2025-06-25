# SysInfo TypeScript MCP Server

A Model Context Protocol (MCP) server implementation in TypeScript that provides system information tools for AI assistants. This server exposes process management capabilities.

## Features

- **Process Listing**: Paginated list of running processes.
- **Process Inspection**: Detailed inspection of specific processes by PID.
- **MCP Server**: Compatible with MCP clients and AI assistants.

## Prerequisites

- Node.js or Bun
- TypeScript ^5.8.3

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sysinfo-ts
   ```

2. Install the dependencies:
   ```bash
   bun install
   ```
   or if you're using npm:
   ```bash
   npm install
   ```

## Usage

### Running the Server

For Bun:
```bash
bun run index.ts
```

For Node.js:
```bash
npm run build && node build/index.js
```

The server will be ready to accept MCP tool requests.

### Available Tools

#### 1. List Processes
Lists all running processes with pagination support.

#### 2. Inspect Process
Inspect a specific process by its Process ID (PID).

## Configuration

Configurations are handled in the `tsconfig.json` for TypeScript compilation.

### Building

```bash
bun run build
```

or if you're using npm:
```bash
npm run build
```

## Dependencies

- **Model Context Protocol SDK**: MCP server functionalities
- **System Information**: System resource data access
- **Zod**: Schema validation
