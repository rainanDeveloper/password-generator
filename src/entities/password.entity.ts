export interface PasswordProps {
    length: number;
}

const LETTER_POOL = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export class Password {
    public password: string;

    constructor(props: PasswordProps){
        this.generatePassword(props.length);
    }

    private generatePassword(length: number) {
       this.password = "";

        while(this.password.length < length){
            const letterPosition = Math.round(Math.random() * LETTER_POOL.length);

            this.password += LETTER_POOL[letterPosition];
        }
    }
}