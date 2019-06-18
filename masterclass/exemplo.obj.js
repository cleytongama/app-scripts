const javascript = Object.create({})

Object.assign(javascript, {
    name: "JavaScript",
    year: 1995
}, {
        author: "Brendam Eich",
        influencedBy: "Java, Scheme and Self"
    })

    console.log(javascript)
    console.log(Object.keys(javascript))
    console.log(Object.values(javascript))