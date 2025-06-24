import si from "systeminformation";
import {ToolDefinition} from "../types/tools.js";
import {z} from "zod";

export const listProcesses: ToolDefinition<{
    cursor: z.ZodNumber,
    limit: z.ZodNumber
}> = {
    name: "list-processes",
    description: "Paginated list of running processes",
    schema: {
        cursor: z.number().min(0).describe("Index of the first process to return"),
        limit: z.number().min(1).max(100).describe("Maximum number of processes to return")
    },
    callback: async ({ cursor = 0, limit = 10 }) => {
        const data = await si.processes();
        const processes = data.list.map(p => ({
            pid: p.pid,
            name: p.name,
            cpu: p.cpu,
            memory: p.memRss
        }));

        const page = processes.slice(cursor, cursor + limit);
        const nextCursor = cursor + limit < processes.length ? cursor + limit : null;
        const result = { results: page, nextCursor };

        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(result),
                    structuredContent: result
                }
            ]
        };
    },
}