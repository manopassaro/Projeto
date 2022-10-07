// import { listenerCount } from "process";

const server = `http://localhost:8000/json`;

interface Game {
    game: string,
    categoria: string,
    id: number
}


class services {

    static async getAll (): Promise<Game | never> {
        const parseResponse = await fetch(server, {
            method: 'GET'
        });
        const list = await parseResponse.json();

        return list;
    }

    static async create (game: Game) {
        const parseResponse = await fetch(server, {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(game)
        });
        const created = parseResponse.ok;

        return created;
    }

    static async delete (id: number) {
        const parseResponse = await fetch(`${server}/${id}`, {
            method: 'DELETE'
        });
        const deleted = parseResponse.ok;

        return deleted
    }


}






export default services;



// export const services = {
//     getAll: () => fetch(server, {method: "GET"}).then(parseResponse),
//     getById: (id: any) => fetch(`${server}/${id}`, {method: "GET"}).then(parseResponse),
//     create: (game: any) => fetch(server, {method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         mode: 'cors',
//         body: JSON.stringify(game),
//     }).then(parseResponse),
//     updateById: (id: any, editedTask: any) => fetch(`${server}/${id}`, {method: 'PUT',
//         headers:{
//             'Content-Type': 'application/json',
//         },
//         mode: 'cors',
//         body: JSON.stringify(editedTask),
//     }).then(parseResponse),
//     deleteById: (id: any) => fetch(`${server}/${id}`, {method: "DELETE"}).then(parseResponse),
// }