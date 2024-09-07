# Python R2 Server for Cloudflare Workers

## Overview

This project implements an R2 server built in Python using only the standard library and Cloudflare Worker primitives. It's designed to run on Cloudflare Workers, providing R2 storage functionality.

## Features

- OpenAPI compatible client for uploading files to R2, fully implementing their API. With reference clients in Python and Node.js provided (`storage_client` and `storageClient` respectively).
- D1 integration to handle stateless authentication and organization permissioning logic (SQL schema not provided).
- Extensive and accurate Python types for Cloudflare Worker primitives and APIs.
- Stateless JWT-based authentication system for secure API access.
- Signed URL generation for secure file access with timeouts, role-based access, number of access attempts.
- Support for public and private file storage with customizable access controls.
- Efficient file handling and streaming for large file uploads and downloads.

## Important Notice

**This project is currently deprecated and not recommended for production use.**

While the code implementation is believed to be correct, there are significant performance issues that affect its reliability:

1. **High CPU Load**: The Python runtime in this environment causes excessive CPU usage, leading to somewhat-frequent server errors and timeouts.

2. **Reliability Issues**: The workers tend to throw 500 errors sporadically, seemingly at random. I suspect this may be related to (1), but the logs always seem to say that the response code is 200 while the client sees 500, and a Cloudflare-specific Error not originating from the worker itself.

3. **Lack of Effective Support**: Despite being a business customer with supposed 24/7 support, the issues remained unresolved. Based on this experience, I cannot recommend Cloudflare as a vendor.

## Open Source Release

Given the current limitations and the project's deprecation from active use, I have decided to open-source this implementation. I hope that by making the code publicly available, it might:

1. Serve as a reference for others attempting similar projects.
2. Potentially be improved or optimized by the community.
3. Provide insights into the challenges of running Python-based R2 servers on Cloudflare Workers.

## Contributions and Future Development

While this project is no longer actively maintained, we welcome community contributions, forks, or adaptations that might address the performance issues or extend its functionality.

## License

This project is released under the MIT License. See the [LICENSE](LICENSE) file for details.

## Disclaimer

This code is provided as-is, without any warranties or guarantees of functionality. Use at your own risk.
