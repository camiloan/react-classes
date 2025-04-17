import { planetsApi } from "../api/planetsApi";
import type { Planet } from "../interfaces/planet.interface";

const sleep = async () => {
    return new Promise(resolve => setTimeout(resolve, 2000))
}

export const updatePlanetAction = async (planet: Planet) => {
    console.log('Realizando petición http...');

    try {
        await sleep();
        const res = await planetsApi.patch<Planet>(`/${planet.id}`, planet);
        return res.data;
    } catch (error) {

        console.log(error);
        throw new Error('Error al actualizar planeta');

    }
};