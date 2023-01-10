import api from "../api";

export async function pegarRepositorioDoUsuario(id){
    try {
        const resultado = await api.get(`/repos?postId=${id}`)
        return resultado.data
    }
    catch (error) {
        console.log(error)
        return []
    }
}


export async function salvarRepositorioDoUsuario(postId, nome, data, id){
    try {
        await api.put(`/repos/${id}`, {
            name: nome,
            data: data,
            postId: postId,
            id: id
        });
        return 'Sucesso'
    }
    catch (error) {
        console.log(error)
        return 'Erro'
    }
}

export async function pegarRepositorioDoUsuarioPorNome(id, nome){
    try {
        const resultado = await api.get(`/repos?postId=${id}&name=${nome}`)
        return resultado.data[0]
    }
    catch (error) {
        console.log(error)
        return {}
    }
}

export async function criarRepositorioDoUsuario(postId, nome, data){
    try {
        await api.post(`/repos`, {
            name: nome,
            data: data,
            postId: postId,
        });
        return 'Sucesso'
    }
    catch (error) {
        console.log(error)
        return 'Erro'
    }
}

export async function deletarRepositorioDoUsuario(id){
    try {
        const resultado = await api.delete(`/repos/${id}`)
        return 'Sucesso'
    }
    catch (error) {
        console.log(error)
        return 'Erro'
    }
}