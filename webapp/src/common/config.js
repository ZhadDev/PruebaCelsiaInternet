const PROTOCOL = import.meta.env.VITE_PROTOCOL;
const HOST_BASE = import.meta.env.VITE_HOST_BASE;
const PORT = import.meta.env.VITE_PORT;
const SERVICE_MAIN = import.meta.env.VITE_SERVICE_MAIN;

const PATH_MAIN = `${PROTOCOL}${HOST_BASE}:${PORT}${SERVICE_MAIN}`;
const PATH_USER = `${PATH_MAIN}/cliente`;
const PATH_SERVICE = `${PATH_MAIN}/servicio`;

export { PATH_USER, PATH_SERVICE };
