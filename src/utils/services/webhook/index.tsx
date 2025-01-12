import apiClient from "../../axios";

// Definición de interfaces para tipos
export interface Webhook {
    id?: string;
    _id?: string;
    text: string;
    name: string;
    descripcion: string;
}


// // Obtener ContentMarketing
// export const SalesFunnel = async (): Promise<Webhook[]> => {
//     const { data } = await apiClient.get<{ data: Webhook[] }>("/todos");
//     return data.data;
// };

// // Obtener ContentMarketing
// export const ContentMarketing = async (): Promise<Webhook[]> => {
//     const { data } = await apiClient.get<{ data: Webhook[] }>("/todos");
//     return data.data;
// };

// // Obtener ContentMarketing
// export const CustomerFollowUp = async (): Promise<Webhook[]> => {
//     const { data } = await apiClient.get<{ data: Webhook[] }>("/todos");
//     return data.data;
// };


// Servicio genérico para obtener datos desde una URL específica
export const fetchWebhookData = async (url: string): Promise<Webhook[]> => {
    const { data } = await apiClient.get<{ data: Webhook[] }>(url);
    return data.data;
};


// Funciones específicas que utilizan la URL
export const SalesFunnel = async (): Promise<Webhook[]> => {
    return await fetchWebhookData("http://localhost:5678/webhook-test/9e209c26-b7d4-4f6f-8393-13004f7d5b92");
};

export const ContentMarketing = async (): Promise<Webhook[]> => {
    return await fetchWebhookData("http://localhost:5678/webhook-test/9e209c26-b7d4-4f6f-8393-13004f7d5b92");
};

export const CustomerFollowUp = async (): Promise<Webhook[]> => {
    return await fetchWebhookData("http://localhost:5678/webhook-test/9e209c26-b7d4-4f6f-8393-13004f7d5b92");
};


