const shopControllers = {
    shop: (req, res) => res.send('Esta es la vista de SHOP'),
    itemSel: (req, res) => res.send('Esta es la vista del item seleccionado'),
    newItem: (req, res) => res.send('Esta es la ruta para agregar un nuevo item'),
    cart: (req, res) => res.send('Esta es la vista del carrito'),
    addItemCart: (req, res) => res.send('Esta es la ruta para agregar un item al carrito'),
}    

module.exports = shopControllers