import { EmailPlugin } from "../../../config/plugins/email.plugin";
import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface SendLogsEmailUseCase{
    execute(to: string | string[]):Promise<boolean>,

}


export class SendEmailLogs implements SendLogsEmailUseCase{


    constructor(
        private readonly logRepository: LogRepository,
    ){}

    async execute(to: string | string[]): Promise<boolean> {

        try{

           const emailPlugin = new EmailPlugin();
           const sent =  await emailPlugin.sendEmailWithLogsFile(to);
        
           if( !sent ){
            throw new Error('Email log was not sent');
           }


           const log = new LogEntity({
            level: LogSeverityLevel.low,
            message: ` Email Sent `,
            origin: 'use-cases/email/sent-email-logs'
        });
        this.logRepository.saveLog(log);

            return true;
        }catch( error ){
            const log = new LogEntity({
                level: LogSeverityLevel.high,
                message: ` ${ error } `,
                origin: 'use-cases/email/sent-email-logs'
            });
            this.logRepository.saveLog(log);
            return false;
        }
    }

}

