export const modificaNome = (texto) => ({
    type: 'modifica_nome',
    payload: texto
});

export const modificaEmail = (texto) => ({
    type: 'modifica_email',
    payload: texto
});

export const modificaSenha = (texto) => ({
    type: 'modifica_senha',
    payload: texto
});
