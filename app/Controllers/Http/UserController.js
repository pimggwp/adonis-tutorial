'use strict'

class UserController {
    index({view}){
        return view.render('users.index')
    }

    create({view}){
        return view.render('users.create')
    }

    edit({view,params}){
        const data = {
            user : {
                id: params.id
            }
        }
        return view.render('users.edit',data)
    }
}

module.exports = UserController
