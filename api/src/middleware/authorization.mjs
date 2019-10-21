import { Responder } from '@codate/commons'
import Token from '../commons/utils/Token'

export default function (permissoesRequeridas) {
    return function (req, res, next) {
        if (ehMetodoSemPermissao(permissoesRequeridas)) {
            return next()
        }

        const permissoesUsuario = getPermissoesUsuario(req)
        if (ehUsuarioSemPermissoes(permissoesUsuario)) {
            return interromperRequisicao(req, res, next)
        }

        if (ehUsuarioComPermissao(permissoesRequeridas, permissoesUsuario)) {
            prosseguirRequisicao(next)
        } else {
            interromperRequisicao(req, res, next)
        }
    }

    function getPermissoesUsuario (req) {
        const token = req.headers.authorization
        try {
            const dadosUsuario = Token.verify(token)
            return dadosUsuario.source
        } catch (e) {
            return undefined
        }
    }

    function ehUsuarioSemPermissoes (permissoesUsuario) {
        return !permissoesUsuario || permissoesUsuario.length === 0
    }

    function ehUsuarioComPermissao (permissoesRequeridas, permissoesUsuario) {
        let temPermissao = false
        for (let permissaoRequerida of permissoesRequeridas) {
            if (permissoesUsuario.indexOf(permissaoRequerida) !== -1) {
                temPermissao = true
                break
            }
        }

        return temPermissao
    }

    function ehMetodoSemPermissao (permissoesRequeridas) {
        return permissoesRequeridas.length === 0
    }

    function prosseguirRequisicao (next) {
        next()
    }

    function interromperRequisicao (req, res, next) {
        const responder = new Responder(req, res, next)
        responder.unauthorized({})
    }
}
