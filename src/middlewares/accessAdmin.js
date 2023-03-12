const admins = ['Greta', 'Ada', 'Tim', 'Vim',]

module.exports = (req, res, next) => {
    const admin = req.query.admin;

    if(admins.includes(admin)) {
        next()
    }
    return res.send('No tienes los privilegios para ingresar');
};