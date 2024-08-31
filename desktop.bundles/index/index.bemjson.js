module.exports = {
    block: "page",
    title: "test 2",
    favicon: "/favicon.ico",
    head: [
        { elem: "meta", attrs: { name: "description", content: "" } },
        {
            elem: "meta",
            attrs: {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
        },
        { elem: "css", url: "index.min.css" },
    ],
    scripts: [{ elem: "js", url: "index.min.js" }],
    content: [
        {
            mix: { block: "index" },
            block: "container",
            content: [
                { block: "header" },
                { block: "aside" },
                { block: "main" },
                { block: "footer" },
            ],
        },
    ],
};
