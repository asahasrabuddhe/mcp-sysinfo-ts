import si from "systeminformation";
import {ToolDefinition} from "../types/tools.js";

export const listProcesses: ToolDefinition<{}> = {
    name: "list-processes",
    description: "",
    schema: {},
    callback: async () => {
        const data = await si.processes();
        const processes = data.list.filter(p => p.state === 'running').map(p => ({
            pid: p.pid,
            name: p.name,
            cpu: p.cpu,
            memory: p.memRss
        }))

        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(processes),
                    structuredContent: processes,
                },
            ],
        };
    },
}