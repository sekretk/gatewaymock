import "reflect-metadata";
import { injectable } from "inversify";
import { IAuthService } from "./interfaces";
import { v4 as uuidv4 } from 'uuid';

@injectable()
export class AuthService implements IAuthService {

    private _logins = new Map<string, string>();

    validate = (token: string) => this._logins.get(token);

    redeem = (token: string) => this._logins.delete(token);

    login(user: string): string {
        const token = uuidv4();
        this._logins.set(token, user);
        return token;
    }
}