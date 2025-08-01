# Changelog

## 1.0.0 (2025-08-01)

Full Changelog: [v0.0.1-alpha.0...v1.0.0](https://github.com/filerg13/filertest-typescript/compare/v0.0.1-alpha.0...v1.0.0)

### Features

* **api:** update via SDK Studio ([9048042](https://github.com/filerg13/filertest-typescript/commit/9048042cfb1e0ab6166d494d1f295b8e2cb0bcf7))
* **client:** add support for endpoint-specific base URLs ([e8f7ec9](https://github.com/filerg13/filertest-typescript/commit/e8f7ec9e81395aba418a921f7baf9aa8ab3a72f3))
* **mcp:** implement support for binary responses ([0ae52c9](https://github.com/filerg13/filertest-typescript/commit/0ae52c9d9eecdf2491088ca7faaab8097b77755e))
* **mcp:** set X-Stainless-MCP header ([41256e8](https://github.com/filerg13/filertest-typescript/commit/41256e802a7bfc98c2ec98752aebccf464cb6a51))
* **mcp:** support filtering tool results by a jq expression ([92d5618](https://github.com/filerg13/filertest-typescript/commit/92d56188792408a6a65f26c5d05e7055130982b2))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([79505e9](https://github.com/filerg13/filertest-typescript/commit/79505e9524612c50e123bdb5edd188ec36d454df))
* **client:** explicitly copy fetch in withOptions ([dfee9c4](https://github.com/filerg13/filertest-typescript/commit/dfee9c475dd4633291b48d41012eddf90c50b887))
* **client:** get fetchOptions type more reliably ([0475858](https://github.com/filerg13/filertest-typescript/commit/04758588a724783d69175314405ca5def9ddd17c))
* **mcp:** avoid sending `jq_filter` to base API ([93d99a1](https://github.com/filerg13/filertest-typescript/commit/93d99a1ec96c75e0a65866bbce4c564c09200057))
* **mcp:** fix tool description of jq_filter ([154df17](https://github.com/filerg13/filertest-typescript/commit/154df176a25f96ddb73ce30a98543d1c797aa705))
* **mcp:** include required section for top-level properties and support naming transformations ([511dca4](https://github.com/filerg13/filertest-typescript/commit/511dca40becf38fe1d521c2fc18eaa00ba6be763))
* **mcp:** relax input type for asTextContextResult ([1f74293](https://github.com/filerg13/filertest-typescript/commit/1f7429377852e41e766ddcdad90e05ef949b3d99))
* **mcp:** reverse validJson capability option and limit scope ([1e98742](https://github.com/filerg13/filertest-typescript/commit/1e987420c7d87d53eef422d26a2c30f2476c8e77))
* **mcp:** support jq filtering on cloudflare workers ([04de1de](https://github.com/filerg13/filertest-typescript/commit/04de1de34ac93e1c9720718dbf9613e6bcbf2a83))
* publish script — handle NPM errors correctly ([1e077ec](https://github.com/filerg13/filertest-typescript/commit/1e077ec8dead862ebf0bf4c8a0efd9f42627ba7b))


### Chores

* add docs to RequestOptions type ([ecbe47f](https://github.com/filerg13/filertest-typescript/commit/ecbe47f99686e6ae7b21adf57831dddb3c6f0bf1))
* adjust eslint.config.mjs ignore pattern ([0b6e296](https://github.com/filerg13/filertest-typescript/commit/0b6e2963c3367acf7cd6e8cee75a0bd46f570a08))
* avoid type error in certain environments ([610dec9](https://github.com/filerg13/filertest-typescript/commit/610dec96ac9623d3628b4ab58d60ffa39213427e))
* **ci:** enable for pull requests ([60870a5](https://github.com/filerg13/filertest-typescript/commit/60870a5cae59a1ab34975d0062cab40716a5dda5))
* **ci:** only run for pushes and fork pull requests ([109242c](https://github.com/filerg13/filertest-typescript/commit/109242c8e47fc0f8984102caab44bb0e478b5c5a))
* **client:** improve path param validation ([865e82a](https://github.com/filerg13/filertest-typescript/commit/865e82a578594c187960be83b3322bcd54b9edc3))
* **client:** refactor imports ([ed8ee4f](https://github.com/filerg13/filertest-typescript/commit/ed8ee4fa2285847687de59fda517faec4e066148))
* **docs:** use top-level-await in example snippets ([c35d295](https://github.com/filerg13/filertest-typescript/commit/c35d295dc3bd00b346a11f89c48562c48ae9f5f9))
* **internal:** add pure annotations, make base APIResource abstract ([8495ece](https://github.com/filerg13/filertest-typescript/commit/8495ece0dae1c75f0d94638190eb55edfaff434d))
* **internal:** codegen related update ([a5b8f07](https://github.com/filerg13/filertest-typescript/commit/a5b8f07045f5eca658f2914faf439ae58a27983f))
* **internal:** fix readablestream types in node 20 ([c72c460](https://github.com/filerg13/filertest-typescript/commit/c72c460d2d70db6eb1604b9e40cfe5733c226f0f))
* **internal:** remove redundant imports config ([89acd73](https://github.com/filerg13/filertest-typescript/commit/89acd73f6c08ff9f2f220d43672dc5e6621e4b83))
* make some internal functions async ([3270edf](https://github.com/filerg13/filertest-typescript/commit/3270edf7713eb8225e999228d2ceed13f3e6e42a))
* **mcp:** formatting ([bb9b19f](https://github.com/filerg13/filertest-typescript/commit/bb9b19f1db1c997e5f6062880ce518cc55010125))
* **mcp:** provides high-level initMcpServer function and exports known clients ([29081af](https://github.com/filerg13/filertest-typescript/commit/29081af77b1042584ef1c25a6edcf135fa24cd2e))
* **mcp:** rework imports in tools ([81b1afb](https://github.com/filerg13/filertest-typescript/commit/81b1afb89e6ffd54be6560537570bcdfe9562efc))
* **readme:** update badges ([4a63140](https://github.com/filerg13/filertest-typescript/commit/4a631401df354636788f69d6d7c8dec4aa5e21a2))
* **readme:** use better example snippet for undocumented params ([b78b59b](https://github.com/filerg13/filertest-typescript/commit/b78b59b4dd9d56df44d4df3546b8002f76550f57))
* **ts:** reorder package.json imports ([a9f24b5](https://github.com/filerg13/filertest-typescript/commit/a9f24b5a76ecf0b039a9bb2b0221112f607dce25))
* update SDK settings ([2f1ef6c](https://github.com/filerg13/filertest-typescript/commit/2f1ef6c6f12cfea2c777c1e9c1b240482d3d01d2))
* update SDK settings ([8ecfbba](https://github.com/filerg13/filertest-typescript/commit/8ecfbba46575056b82d6fdea76bcb36c223be9bc))


### Refactors

* **types:** replace Record with mapped types ([93eb0d8](https://github.com/filerg13/filertest-typescript/commit/93eb0d89f8820847c23d9356888094eaebb07c49))
