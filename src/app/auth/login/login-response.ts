export interface LoginResponse {
    statusOk: boolean;
    statusMessage: string;
    idUsuario: string;
    token: string;
    expiration: string;
    expirationMinutes: number;
    nombre: string;
    tipoDocumento: {
      nombre: string;
      id: number;
      activo: boolean;
    };
    documento: string;
    imagen: string;
    email: string;
    roles: string[];
  }
  