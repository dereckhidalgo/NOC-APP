import { LogEntity, LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/uses-cases/checks/check-service";
import { SendEmailLogs } from "../domain/uses-cases/email/send-email-logs";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImp } from "../infrastructure/repositories/log.repository";
import { CronService } from "../presentation/cron/cron-service";

const SystemLogRepository = new LogRepositoryImp(new FileSystemDataSource);


export class server {
    static start() {

        console.log('Server started');


        //new SendEmailLogs(SystemLogRepository).execute(['hidalgodereck27@gmail.com'])

        // CronService.createJob(
        //     '*/4 * * * * *',
        //     () => {
        //         new  CheckService(
        //             SystemLogRepository,
        //             () => console.log('Service is available'),
        //             (error) => console.log('Service is not available, ', error),
        //         )
        //         .execute('http://localhost:3000/posts');
        //     }
        // );
    }
}