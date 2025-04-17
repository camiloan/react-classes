import { planetsApi } from "../api/planetsApi";
import type { Planet } from "../interfaces/planet.interface";

export const createPlanetAction = async (planet: Partial<Planet>) => {
    console.log('Realizando petición http...');

    try {
        const res = await planetsApi.post<Planet>('/', planet);
        return res.data;
    } catch (error) {
        console.log(error);
        return error

    }
};

export const createPlanetActionForm = async (prevState: unknown, queryData: FormData) => {
    console.log('Realizando petición http...');
    const formData = Object.fromEntries(queryData.entries());
    try {
        const res = await planetsApi.post<Planet>('/', formData);
        return res.data;
    } catch (error) {
        console.log(error);
        throw new Error('Error al crear planeta');

    }
};  