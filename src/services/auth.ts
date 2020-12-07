import "reflect-metadata";
import { injectable } from "inversify";
import { IAuthService } from "./interfaces/interfaces";
import { IAuthCred, ISessionMeta } from "./interfaces";

@injectable()
export class AuthService implements IAuthService {

    private _logins = new Map<string, ISessionMeta>();

    validate = (token: string) => this._logins.get(token);

    redeem = (token: string) => this._logins.delete(token);

    login(creds: IAuthCred): string {
        const token = (Math.floor(Math.random() * 10000)).toString(36).toUpperCase();
        this._logins.set(token, {...creds, token});
        return token;
    }
}