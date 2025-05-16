import conf from "../conf/conf";
import { ID, Client, Account } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId)
    this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(
                ID.unique(), email, password, name,
            ) ;

            if (userAccount) {
                // call another method 
                return this.login({email, password});
            } else {
                return userAccount;
            }
            
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            const userLogin = await this.account.createEmailPasswordSession(
                email, password,
            );
            return userLogin;

        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.getCurrentUser;
        } catch (error) {
            console.log("Appwrite service :: getCurrentUSer :: error", error);
        }

        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService;

