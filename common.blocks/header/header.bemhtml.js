block("header")(
    js()(true),
    tag()("header"),
    mix()({ mix: { block: "header" } }),
    content()([
        {
            elem: "top",
            content: [
                {
                    elem: "logo bordered centered-text",
                    content: "Лого",
                },
                {
                    elem: "search bordered centered-text",
                    content: "Строка поиска",
                },
                {
                    elem: "phone bordered centered-text",
                    content: "Телефон",
                },
            ],
        },
        {
            elem: "menu bordered centered-text",
            content: "Меню",
        },
        {
            elem: "bottom bordered centered-text",
            content: "Шапка",
        },
    ])
);
