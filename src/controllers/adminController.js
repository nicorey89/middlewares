
module.exports = {
    admin: (req,res) => {
        const administrador = req.query.admin;
        res.render('admin', {
            administrador
        });
    }

}