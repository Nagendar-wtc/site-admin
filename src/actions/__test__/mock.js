import { API_BASE_URL, GET_COMMAND } from "../../utils/API";

export const commandsData = [
    {
      "id": "adpr5",
      "command": "START",
      "type": "Manual",
      "asset": "WTG004",
      "user": "eScada User",
      "receivedTimestamp": 1664878688,
      "timestamp": 12345678,
      "state": "Pending",
      "decisionMaker": "System",
      "decisionTimestamp": 1667446881,
      "reason": null,
      "commandValue": null
    }
  ]

export default async function mockFetch(url) {
    switch (url) {
        case `${API_BASE_URL}${GET_COMMAND}`: {
            return {
                ok: true,
                status: 200,
                json: async () => commandsData,
            };
        }
        default: {
            throw new Error(`Unhandled request: ${url}`);
        }
    }
}