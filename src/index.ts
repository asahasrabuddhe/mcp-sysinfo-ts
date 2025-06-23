import {McpServer} from "@modelcontextprotocol/sdk/server/mcp.js";
import {StdioServerTransport} from "@modelcontextprotocol/sdk/server/stdio.js";
import {tools} from "./tools/index.js";

async function main() {
    // Create server instance
    const server = new McpServer({
        name: "Process Inspector",
        version: "1.0.0",
        capabilities: {
            resources: {},
            tools: {},
        },
    });

    // Register tools
    for (const tool of tools) {
        server.tool(tool.name, tool.description, tool.schema, tool.callback);
    }

    const transport = new StdioServerTransport();
    await server.connect(transport);
}

main().catch(err => {
    console.error("Error:", err);
    process.exit(1);
});