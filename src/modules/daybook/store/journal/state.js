// export default () => ({
//     El state es olo una funcion que devuelve un objeto
// })

export default () => ({
    isLoading: true,
    entries: [
        {
        id: new Date().getTime(), // 12323423542345
        date: new Date().toDateString(), //sat 23, julio
        text: 'Enim mollit exercitation ipsum excepteur fugiat amet cupidatat exercitation magna cupidatat. Aliquip eu commodo nostrud commodo. Eiusmod laborum tempor sint sit est nostrud ut consequat. Ea elit esse ut in aliquip eiusmod nulla et.',
        picture: null
    },
    {
        id: new Date().getTime() + 1000, // 12323423542345
        date: new Date().toDateString(), //sat 23, julio
        text: 'Aute velit tempor amet irure nostrud occaecat ut voluptate cillum commodo deserunt. Duis amet sit sunt reprehenderit excepteur eu sit qui et laboris consequat est do deserunt. Consequat pariatur nisi duis laboris esse eiusmod voluptate dolore anim ullamco minim ea exercitation occaecat. Officia aliqua excepteur tempor nostrud.',
        picture: null
    },
    {
        id: new Date().getTime() + 2000, // 12323423542345
        date: new Date().toDateString(), //sat 23, julio
        text: 'Ex esse nostrud incididunt pariatur eu culpa et non mollit ad irure aliquip. Magna amet consectetur dolor reprehenderit ipsum laboris mollit. Aliqua ullamco occaecat sit deserunt do ad laborum tempor aliqua nostrud consequat proident et. Sit aliquip dolore irure tempor adipisicing ipsum. Ea laborum cupidatat est ipsum veniam laboris veniam Lorem ex enim aliquip. Sit tempor et cupidatat culpa.',
        picture: null
    }
]
})