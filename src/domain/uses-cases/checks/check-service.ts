import { LogRepositoryImp } from "../../../infrastructure/repositories/log.repository";
import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";

interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>;
}

type SuccessCallback = (() => void) | undefined;
type ErrorCallback = ( error: string ) => void

export class CheckService implements CheckServiceUseCase {

    constructor(
        private readonly logRepositoryImp: LogRepositoryImp,
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback,
    ){}
    

    async execute( url: string): Promise<boolean> {

        const origin = 'uses-cases/checks/check-service.ts';
        try{
            const req = await fetch( url );
            if(!req.ok){
                throw new Error(`Error on check service ${ url }`);
            }

            const log = new LogEntity( {
                level: LogSeverityLevel.low,
                message: `SERVICE ${ url } WORKING`,
                origin
             });
            this.logRepositoryImp.saveLog( log );
            this.successCallback && this.successCallback();
            return true;
        } catch( error ){

            const errorMessage = `${ error } `;
            const log = new LogEntity( {
                level:LogSeverityLevel.high, 
                message: errorMessage,
                origin 
             });
            this.logRepositoryImp.saveLog( log );
            this.errorCallback && this.errorCallback( 'URL: '+ url );

            return false;   
        }

    };


}