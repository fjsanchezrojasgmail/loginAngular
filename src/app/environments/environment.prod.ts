import {IEnvironment, IEnvironmentParams} from "./environments";

const params: IEnvironmentParams = {
    production: true
};

export const environment: IEnvironment = new IEnvironment(params);