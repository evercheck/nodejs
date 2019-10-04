import { request, IncomingHttpHeaders, RequestOptions } from "http";

interface Response {
    data: object,
    headers: IncomingHttpHeaders;
}

export function performRequest(options: RequestOptions) {
    return new Promise((resolve, rejects) => {
        request(
            options,
            function (response) {
                const { statusCode, headers } = response;
                if (statusCode && statusCode >= 300) {
                    rejects(
                        new Error(response.statusMessage)
                    )
                }
                const chunks: Uint8Array[] = [];
                response.on('data', (chunk) => {
                    chunks.push(chunk);
                })
                response.on('end', () => {
                    const data = Buffer.concat(chunks).toString();
                    const result: Response = {
                        data: JSON.parse(data),
                        headers
                    }
                    resolve(result);
                })
            }
        ).end();
    })
}

export function performPost(options: RequestOptions) {
    return new Promise((resolve, rejects) => {
        request(
            options,
            function (response) {
                const { statusCode, headers } = response;
                if (statusCode && statusCode >= 300) {
                    rejects(
                        new Error(response.statusMessage)
                    )
                }
                const chunks: Uint8Array[] = [];
                response.on('data', (chunk) => {
                    chunks.push(chunk);
                })
                response.on('end', () => {
                    const data = Buffer.concat(chunks).toString();
                    const result: Response = {
                        data: JSON.parse(data),
                        headers
                    }
                    resolve(result);
                })
            }
        ).write(JSON.stringify({
            author: 'khoa',
            title: 'testing',
            content: 'input a cat'
        }));
    })
}