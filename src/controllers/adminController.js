const adminControllers = {
    admin: (req, res) => res.send('Esta es la vista de ADMIN'),
    createNewItem: (req, res) => res.send('Esta es la vista para crear un nuevo item'),
    addNewItem: (req, res) => res.send('Esta es la vista para agregar un nuevo item'),
    editItemEsp: (req, res) => res.send('Esta es la vista para editar un item específico'),
    modItemEsp: (req, res) => res.send('Esta es la vista para impactar la modificación de un item específico'),
    deleteItemEsp: (req, res) => res.send('Esta es la vista para eliminar un item específico')
}    

module.exports = adminControllers