import _ from 'lodash'
import axios from 'axios'
import { tiposWebhook } from '../constants'

export default class PalavrasChave {
    static async buscarPalavrasChave (documento, webhooks) {
        const palavrasChave = await this._buscarPalavrasChaveViaWebhooks(documento, webhooks)
        const tabelas = await this._buscarConteudoTabelasViaWebhooks(documento, webhooks)
        return _.merge(palavrasChave, tabelas)
    }

    static async _buscarPalavrasChaveViaWebhooks (documento, webhooks) {
        if (!this._possuiRecursoBuscaPalavrasChave(webhooks)) {
            return {}
        }
        const { data } = await axios(this._prepararRequisicaoBuscaPalavrasChave(documento, webhooks))
        return this._transformarEmObjeto(data, documento.modelo)
    }

    static async _buscarConteudoTabelasViaWebhooks (documento, webhooks) {
        if (!this._possuiRecursoBuscaTabelasExternas(webhooks)) {
            return {}
        }

        const tabelas = await axios(this._prepararRequisicaoBuscaTabelasExternas(documento, webhooks))
        if (documento.modelo) {
            return this._renderizarTabelasParaModelo(tabelas.data)
        } else {
            return this._renderizarTabelasParaDocumento(tabelas.data, documento, webhooks)
        }
    }

    static _prepararRequisicaoBuscaPalavrasChave ({ entidadeId, entidadeTipo, categoria }, webhooks) {
        const recurso = tiposWebhook.BUSCAR_PALAVRAS_CHAVE
        return {
            url: webhooks.recursos.url,
            headers: this._getHeaders(webhooks),
            method: 'POST',
            data: { recurso, entidadeId, entidadeTipo, categoriaDocumento: categoria }
        }
    }

    static _prepararRequisicaoBuscaTabelasExternas ({ entidadeId, entidadeTipo, categoria }, webhooks) {
        const recurso = tiposWebhook.BUSCAR_TABELAS_EXTERNAS
        return {
            url: webhooks.recursos.url,
            headers: this._getHeaders(webhooks),
            method: 'POST',
            data: { recurso, entidadeId, entidadeTipo, categoriaDocumento: categoria }
        }
    }

    static _prepararRequisicaoRenderizacaoTabela (tipoTabela, { entidadeId, entidadeTipo, categoria }, webhooks) {
        const recurso = tiposWebhook.RENDERIZAR_TABELA_EXTERNA
        return {
            url: webhooks.recursos.url,
            headers: this._getHeaders(webhooks),
            method: 'POST',
            data: { tipoTabela, recurso, entidadeId, entidadeTipo, categoriaDocumento: categoria }
        }
    }

    static _possuiRecursoBuscaPalavrasChave (webhooks) {
        return this._possuiRecurso(webhooks, tiposWebhook.BUSCAR_PALAVRAS_CHAVE)
    }

    static _possuiRecursoBuscaTabelasExternas (webhooks) {
        return this._possuiRecurso(webhooks, tiposWebhook.BUSCAR_TABELAS_EXTERNAS)
    }

    static _possuiRecurso (webhooks, tipo) {
        return webhooks.recursos[tipo]
    }

    static _getHeaders (webhooks) {
        const headers = {}
        for (let header of webhooks.headers) {
            headers[header.chave] = header.valor
        }
        return headers
    }

    static _removerSintaxeChave (str) {
        return str.replace(/[${}]/g, '')
    }

    static async _renderizarTabelasParaDocumento (tabelas, documento, webhooks) {
        const tabelasRenderizadas = []
        for (const tabela of tabelas) {
            const tabelaRenderizada = await axios(this._prepararRequisicaoRenderizacaoTabela(tabela.chave, documento, webhooks))
            tabelasRenderizadas.push({
                chave: tabela.chave,
                valor: tabelaRenderizada.data
            })
        }
        return this._transformarEmObjeto(tabelasRenderizadas)
    }

    static _renderizarTabelasParaModelo (tabelas) {
        const tabelasRenderizadas = []
        for (const tabela of tabelas) {
            tabelasRenderizadas.push({
                chave: tabela.chave,
                valor: this._transformarEmChave(tabela.chave)
            })
        }
        return this._transformarEmObjeto(tabelasRenderizadas)
    }

    static _transformarEmChave (str) {
        return '${' + str + '}'
    }

    static _transformarEmObjeto (arr, modelo = false) {
        const objeto = {}
        for (const item of arr) {
            const chave = this._removerSintaxeChave(item.chave)
            objeto[chave] = modelo ? item.chave : item.valor
        }
        return objeto
    }
}
