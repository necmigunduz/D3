const selection = d3.select('#main')
const dataset = [
    {
        id: 1,
        region: "USA"
    },
    {
        id: 2,
        region: "Turkey"
    },
    {
        id: 3,
        region: "UK"
    },
    {
        id: 4,
        region: "Ghana"
    },
    {
        id: 5,
        region: "Ukraine"
    },
]
selection.selectAll('p')
            .data(dataset)
            .enter()
            .append('p')
            .text((d,i) => d.region)
            