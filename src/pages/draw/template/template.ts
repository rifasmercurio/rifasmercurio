export class Template {

    generateTemplate(): any{
        return {
            code: {title: 'Código'},
            date: {title: 'Fecha Inicio'},
            description: {title: 'Descripción'},
            kickoff: {title: 'Fecha Fin'},
            status: {title: 'Estado'}
        };
    }

}