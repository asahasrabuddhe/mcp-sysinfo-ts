import {z} from "zod";
import si from "systeminformation";
import {ToolDefinition} from "../types/tools.js";

export const inspectProcess: ToolDefinition<{pid: z.ZodNumber}> = {
    name: "inspect-process",
    description: "Get detailed info about a specific process by PID",
    schema: {
        pid: z.number().describe("Get detailed info about a specific process by PID"),
    },
    callback: async ({ pid }) => {
        const proc = (await si.processes()).list.find(p => p.pid === pid);
        if (!proc) {
            return {
                content: [
                    {
                        type: "text",
                        text: `Process with PID ${pid} not found`
                    }
                ]
            };
        }

        const process = {
            pid: proc.pid,
            name: proc.name,
            ppid: proc.parentPid,
            cpu: proc.cpu,
            memory: proc.memRss,
            cmd: proc.command,
            path: proc.path,
            user: proc.user
        }

        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(process),
                },
            ],
            structuredContent: process,
        };
    },
}