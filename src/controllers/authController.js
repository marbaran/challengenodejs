const authControllers = {
    login: (req, res) => res.send('Esta es la vista de LOGIN'),
    valDatLogin: (req, res) => res.send('Esta es la ruta que valida los datos de LOGIN'),
    register: (req, res) => res.send('Esta es la vista de REGISTER'),
    createNewUser: (req, res) => res.send('Esta es la ruta que crea un nuevo usuario'),
    closeSesUser: (req, res) => res.send('Esta es la ruta que cierra la sesión del usuario')
}    

module.exports = authControllers