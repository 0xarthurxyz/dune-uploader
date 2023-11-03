import axios from "axios";
import "dotenv/config";

const URL = "https://api.dune.com/api/v1/table/upload/csv";
const DUNE_API_KEY = process.env.DUNE_API_KEY;

async function upload() {
    try {
        const requestBody = {
            table_name: "example_table",
            description: "Sample data for testing",
            is_private: false,
            data: "column1,column2\nvalue1,value2\nvalue3,value4",
        };

        const response = await axios.post(URL, requestBody, {
            headers: {
                "X-Dune-Api-Key": DUNE_API_KEY,
                "Content-Type": "application/json",
            },
        });

        console.log(response.data);
    } catch (error: any) {
        console.error("Error during the API request:", error.response.data);
    }
}

function main() {
    upload();
}

main();
