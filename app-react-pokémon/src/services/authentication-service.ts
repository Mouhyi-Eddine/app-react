export default class AuthenticationService {
    static isAuthenticated: boolean = false;

    static login(username: string, passeword: string) : Promise<boolean> {
        const isAuthenticated = (username === 'pikachu' && passeword === 'pikachu');

        return new Promise(resolve => {
            setTimeout(()=> {
                this.isAuthenticated = isAuthenticated;
                resolve(isAuthenticated)
            }, 1000)
        });
    }
}